'use client';
import { ChestData } from '@/shared/ChestData';
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from 'react'

type WareHouseContext = {
  chestDatas: ChestData[];
  selectedChestId: string|null;
  setSelectedChestId: Dispatch<SetStateAction<string | null>>;
  getChestData: (chestId: string) => ChestData[];
}

const WareHouseContext = createContext<WareHouseContext>(null!);

export function useWareHouseContext() {
  return useContext(WareHouseContext);
}

export function WareHouseProvider({ children }: { children: ReactNode|undefined } ) {
  const [chestDatas, setChestDatas] = useState<ChestData[]>(null!);
  const [selectedChestId, setSelectedChestId] = useState<string|null>(null);
  const getChestData = (chestId: string) => chestDatas.filter(c => c.chestId === chestId);

  async function getChestDatas() {
    const res = await fetch('/api/spreadsheet', { cache: 'no-store' });
    setChestDatas(await res.json());
  }

  useEffect(() => {
    getChestDatas();
  }, []);

  return (
    <WareHouseContext.Provider value={{chestDatas, selectedChestId, setSelectedChestId, getChestData}}>
      {!chestDatas ? <div className='flex justify-center align-middle h-full'><span className="loading loading-spinner loading-lg"></span></div> : children}
    </WareHouseContext.Provider>
  )
}

export const fetchCache = 'force-no-store';
