import { useWareHouseContext } from '@/components/contextProvider/WareHouseProvider';
import { Gltf, useGLTF } from '@react-three/drei'
import { ThreeElements } from '@react-three/fiber';
import { useState } from 'react';
import { Vector3 } from 'three';

export type LargeChestProps = ThreeElements['mesh'] & {
  section: string;
  idx: number;
}

export default function LargeChest({ section, idx, ...props }: LargeChestProps) {
  const SELECTED_FRAME_RADIUS = 0.03;
  const SELECTED_FRAME_LENGTH = 0.2;
  const SELECTED_FRAME_TOP_OFFSET = 0.08;
  const chestData = useWareHouseContext();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const chestItem = chestData.filter(c => c.chestId.toLowerCase() === `${section.padStart(2, '0')}-${idx}`.toLowerCase());

  return (
    <mesh
      {...props}
      onPointerOver={(e) => {
        e.stopPropagation();
        setIsHovered(true);
        console.log(`${section.padStart(2, '0')}-${idx}`);
        console.log()
        console.log(`${chestItem.map(c => c.japanese)}`);
      }}
      onPointerLeave={(e) => {
        setIsHovered(false);
      }}
    >
      {isHovered && 
        <group>
          {/* 左下手前 */}
          <mesh position={[1, SELECTED_FRAME_LENGTH/2, -0.5]}>
            <cylinderGeometry args={[SELECTED_FRAME_RADIUS, SELECTED_FRAME_RADIUS, 0.2, 16, 1]}/>
          </mesh>
          <mesh position={[1, 0, -0.5+SELECTED_FRAME_LENGTH/2]} rotation={[Math.PI/2, 0, 0]}>
            <cylinderGeometry args={[SELECTED_FRAME_RADIUS, SELECTED_FRAME_RADIUS, 0.2, 16, 1]}/>
          </mesh>
          <mesh position={[1-SELECTED_FRAME_LENGTH/2, 0, -0.5]} rotation={[0, 0, Math.PI/2]}>
            <cylinderGeometry args={[SELECTED_FRAME_RADIUS, SELECTED_FRAME_RADIUS, 0.2, 16, 1]}/>
          </mesh>

          {/* 右上手前 */}
          <mesh position={[-1, 1-SELECTED_FRAME_LENGTH/2-SELECTED_FRAME_TOP_OFFSET, -0.5]}>
            <cylinderGeometry args={[SELECTED_FRAME_RADIUS, SELECTED_FRAME_RADIUS, 0.2, 16, 1]}/>
          </mesh>
          <mesh position={[-1, 1-SELECTED_FRAME_TOP_OFFSET, -0.5+SELECTED_FRAME_LENGTH/2]} rotation={[Math.PI/2, 0, 0]}>
            <cylinderGeometry args={[SELECTED_FRAME_RADIUS, SELECTED_FRAME_RADIUS, 0.2, 16, 1]}/>
          </mesh>
          <mesh position={[-1+SELECTED_FRAME_LENGTH/2, 1-SELECTED_FRAME_TOP_OFFSET, -0.5]} rotation={[0, 0, Math.PI/2]}>
            <cylinderGeometry args={[SELECTED_FRAME_RADIUS, SELECTED_FRAME_RADIUS, 0.2, 16, 1]}/>
          </mesh>

          {/* 左上奥 */}
          <mesh position={[1, 1-SELECTED_FRAME_LENGTH/2-SELECTED_FRAME_TOP_OFFSET, 0.5]}>
            <cylinderGeometry args={[SELECTED_FRAME_RADIUS, SELECTED_FRAME_RADIUS, 0.2, 16, 1]}/>
          </mesh>
          <mesh position={[1, 1-SELECTED_FRAME_TOP_OFFSET, 0.5-SELECTED_FRAME_LENGTH/2]} rotation={[Math.PI/2, 0, 0]}>
            <cylinderGeometry args={[SELECTED_FRAME_RADIUS, SELECTED_FRAME_RADIUS, 0.2, 16, 1]}/>
          </mesh>
          <mesh position={[1-SELECTED_FRAME_LENGTH/2, 1-SELECTED_FRAME_TOP_OFFSET, 0.5]} rotation={[0, 0, Math.PI/2]}>
            <cylinderGeometry args={[SELECTED_FRAME_RADIUS, SELECTED_FRAME_RADIUS, 0.2, 16, 1]}/>
          </mesh>

          {/* 右下奥 */}
          <mesh position={[-1, SELECTED_FRAME_LENGTH/2, 0.5]}>
            <cylinderGeometry args={[SELECTED_FRAME_RADIUS, SELECTED_FRAME_RADIUS, 0.2, 16, 1]}/>
          </mesh>
          <mesh position={[-1, 0, 0.5-SELECTED_FRAME_LENGTH/2]} rotation={[Math.PI/2, 0, 0]}>
            <cylinderGeometry args={[SELECTED_FRAME_RADIUS, SELECTED_FRAME_RADIUS, 0.2, 16, 1]}/>
          </mesh>
          <mesh position={[-1+SELECTED_FRAME_LENGTH/2, 0, 0.5]} rotation={[0, 0, Math.PI/2]}>
            <cylinderGeometry args={[SELECTED_FRAME_RADIUS, SELECTED_FRAME_RADIUS, 0.2, 16, 1]}/>
          </mesh>
        </group>
      }
      <Gltf src="/gltf/largechest/chest_large.gltf" position={[0, 0, 1/16]}/>
    </mesh>
  )
}
