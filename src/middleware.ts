import { updateSession } from '@/utils/supabase/middleware';
import { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  console.log('middle');
  return await updateSession(request);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
