'use client';

import { Text3D } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

export default function ToWorldSpawnText() {
  
  const { width, height } = useThree((state) => state.viewport)

  return (
    <Text3D
      scale={2}
      rotation={[-Math.PI/3, Math.PI, 0, 'YXZ']}
      position={[width+4, 1, 22]}
      font='/assets/font/Noto Sans JP_Bold.json'
    >
      至 初期リスポーン
    </Text3D>
  )
}
