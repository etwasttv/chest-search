'use client';

import { Text3D } from '@react-three/drei';

export default function ToWorldSpawnText() {
  return (
    <Text3D
      scale={2}
      rotation={[-Math.PI/3, Math.PI, 0, 'YXZ']}
      position={[10, 1, 22]}
      font='/assets/font/Noto Sans JP_Bold.json'
    >
      至 初期リスポーン
    </Text3D>
  )
}
