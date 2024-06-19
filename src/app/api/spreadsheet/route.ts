import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { NextResponse } from 'next/server';
import { ChestData } from '@/shared/ChestData';

export async function GET(request: Request) {
  const SCOPES = [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive.file',
  ];
  const jwt = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
    scopes: SCOPES,
  });
  const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID!, jwt);
  await doc.loadInfo();

  const data: ChestData[] = [];

  const chestSheet = doc.sheetsById[Number(process.env.SPREADSHEET_SHEET_ID!)];
  const rows = await chestSheet.getRows();
  for (const row of rows) {
    data.push({
      itemId: row.get('itemId'),
      english: row.get('english'),
      japanese: row.get('japanese'),
      chestId: row.get('chestId'),
    });
  }

  return NextResponse.json(data);
}
