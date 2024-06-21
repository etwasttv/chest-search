'use client';

import WareHouse from '@/components/three/WareHouse';
import { Canvas } from '@react-three/fiber';

export default function WareHouseCanvas() {
  return (
    <Canvas>
      <WareHouse/>
    </Canvas>
  )
}
