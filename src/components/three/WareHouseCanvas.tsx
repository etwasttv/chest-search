'use client';

import WareHouse from '@/components/three/WareHouse';
import { Canvas } from '@react-three/fiber';

export default function WareHouseCanvas() {
  return (
    <div className='h-full relative'>
      <Canvas
        camera={{position: [20, 20, 20]}}
      >
        <WareHouse/>
      </Canvas>
    </div>
  )
}
