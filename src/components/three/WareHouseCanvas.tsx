'use client';

import WareHouse from '@/components/three/WareHouse';
import { Canvas } from '@react-three/fiber';

export default function WareHouseCanvas() {
  return (
    <div className='h-full'>
      <Canvas resize={{debounce: 0}}>
        <WareHouse/>
      </Canvas>
    </div>
  )
}
