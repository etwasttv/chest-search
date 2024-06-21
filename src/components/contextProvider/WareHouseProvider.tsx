'use client';
import { ChestData } from '@/shared/ChestData';
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from 'react'

type WareHouseContext = {
  chestData: ChestData[];
  selectedChestId: string|null;
  setSelectedChestId: Dispatch<SetStateAction<string | null>>;
}

const WareHouseContext = createContext<WareHouseContext>(null!);

export function useWareHouseContext() {
  return useContext(WareHouseContext);
}

export function WareHouseProvider({ children }: { children: ReactNode } ) {
  const [chestDatas, setChestDatas] = useState<ChestData[]>([]);
  const [selectedChestId, setSelectedChestId] = useState<string|null>(null);

  async function getChestData() {
    const res = await fetch('/api/spreadsheet');
    setChestDatas(await res.json());
  }

  useEffect(() => {
    getChestData();
  }, []);

  return (
    <WareHouseContext.Provider value={{chestData: chestDatas, selectedChestId, setSelectedChestId}}>
      {children}
    </WareHouseContext.Provider>
  )
}
