'use client';

import { Text3D } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

export default function ToExchangeText() {
  
  return (
    <Text3D
      scale={2}
      position={[-5.8, 1, -22]}
      rotation={[-Math.PI/3, 0, 0]}
      font='/assets/font/Noto Sans JP_Bold.json'
    >
      至 取引所
    </Text3D>
  )
}
