'use client';
import { ChestData } from '@/shared/ChestData';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

const WareHouseContext = createContext<ChestData[]>(null!);

export function useWareHouseContext() {
  return useContext(WareHouseContext);
}

export function WareHouseProvider({ children }: { children: ReactNode } ) {
  const [chestDatas, setChestDatas] = useState<ChestData[]>([]);

  async function getChestData() {
    const res = await fetch('/api/spreadsheet');
    setChestDatas(await res.json());
  }

  useEffect(() => {
    getChestData();
  }, []);

  return (
    <WareHouseContext.Provider value={chestDatas}>
      {children}
    </WareHouseContext.Provider>
  )
}
