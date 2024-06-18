'use client';

import { ChestData } from '@/shared/ChestData';
import { useEffect, useState } from 'react';

export default function ChestDataTable() {

  const [chestDatas, setChestDatas] = useState<ChestData[]>([]);

  async function getChestData() {
    const res = await fetch('/api/spreadsheet/all');
    setChestDatas(await res.json());
  }

  useEffect(() => {
    getChestData();
  }, []);

  return (
    <div className='overflow-x-auto flex justify-stretch w-full'>
      <table className='table table-xs'>
        <thead>
          <tr>
            <th></th>
            <th>Item Id</th>
            <th>Name-English</th>
            <th>Name-Japanese</th>
            <th>Chest Id</th>
          </tr>
        </thead>
        <tbody>
          {chestDatas.map((data, idx) => (
            <tr key={idx} className='hover:bg-base-content hover:text-base-300'>
              <td>{idx+1}</td>
              <td>{data.itemId}</td>
              <td>{data.english}</td>
              <td>{data.japanese}</td>
              <td>{data.chestId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
