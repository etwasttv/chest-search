'use client';

import { ChestData } from '@/shared/ChestData';

type ChestInfoPaneProps = {
  selectedChestId: string;
  chestData: ChestData[];
}

export default function ChestItemPane({selectedChestId, chestData}: ChestInfoPaneProps) {

  return (
    <div className='text-nowrap bg-base-300 flex flex-col justify-stretch select-none'>
      <div className='p-2 bg-primary text-primary-content'>
        <h3 className='font-bold'>{selectedChestId}</h3>
      </div>
      <ul className='ms-2 py-1 px-2'>
        {chestData.length === 0 ? <li>アイテム情報なし</li> : chestData.map(d => {return <li className='text-accent' key={d.itemId}>{d.japanese}</li> ;})}
      </ul>
    </div>
  );
}
