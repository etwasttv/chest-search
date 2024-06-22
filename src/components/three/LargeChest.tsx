import { useWareHouseContext } from '@/components/contextProvider/WareHouseProvider';
import { Gltf, Line } from '@react-three/drei'
import { ThreeElements } from '@react-three/fiber';
import { useEffect, useState } from 'react';

export type LargeChestProps = ThreeElements['mesh'] & {
  section: string;
  idx: number;
}

export default function LargeChest({ section, idx, ...props }: LargeChestProps) {
  const SELECTED_FRAME_TOP_OFFSET = 1/16;
  const SELECTED_FRAME_LINE_WIDTH = 2;
  
  const chestId = `${section}-${idx}`;

  const { selectedChestId, setSelectedChestId } = useWareHouseContext();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const isSelected = selectedChestId === chestId;
  const SELECTED_FRAME_COLOR = isSelected ? "#58d401" : "#AAAAAA";

  useEffect(() => {
    document.body.style.cursor = isHovered ? 'pointer' : 'auto'
}, [isHovered]);

  return (
    <mesh
      {...props}
      onPointerOver={(e) => {
        e.stopPropagation();
        setIsHovered(true);
        // console.log(`${section.padStart(2, '0')}-${idx}`);
        // console.log(`${chestItem.map(c => c.japanese)}`);
      }}
      onPointerLeave={(e) => {
        setIsHovered(false);
      }}
      onClick={(e) => {
        if (isHovered) {
          if (!isSelected)
            setSelectedChestId(chestId);
          else
            setSelectedChestId(null);
        }
      }}
    >
      {(isHovered || isSelected) && 
        <group>
          {/* 左下手前 */}
          <mesh position={[1, 0, -0.5]}>
            <Line points={[[-2, 0, 0], [0, 0, 0]]} lineWidth={SELECTED_FRAME_LINE_WIDTH} color={SELECTED_FRAME_COLOR}/>
            <Line points={[[-2, 1-SELECTED_FRAME_TOP_OFFSET, 0], [0, 1-SELECTED_FRAME_TOP_OFFSET, 0]]} lineWidth={SELECTED_FRAME_LINE_WIDTH} color={SELECTED_FRAME_COLOR}/>
            <Line points={[[-2, 0, 1], [0, 0, 1]]} lineWidth={SELECTED_FRAME_LINE_WIDTH} color={SELECTED_FRAME_COLOR}/>
            <Line points={[[-2, 1-SELECTED_FRAME_TOP_OFFSET, 1], [0, 1-SELECTED_FRAME_TOP_OFFSET, 1]]} lineWidth={SELECTED_FRAME_LINE_WIDTH} color={SELECTED_FRAME_COLOR}/>
            <Line points={[[-2, 0, 0], [-2, 0, 1]]} lineWidth={SELECTED_FRAME_LINE_WIDTH} color={SELECTED_FRAME_COLOR}/>
            <Line points={[[-2, 1-SELECTED_FRAME_TOP_OFFSET, 0], [-2, 1-SELECTED_FRAME_TOP_OFFSET, 1]]} lineWidth={SELECTED_FRAME_LINE_WIDTH} color={SELECTED_FRAME_COLOR}/>
            <Line points={[[0, 0, 0], [0, 0, 1]]} lineWidth={SELECTED_FRAME_LINE_WIDTH} color={SELECTED_FRAME_COLOR}/>
            <Line points={[[0, 1-SELECTED_FRAME_TOP_OFFSET, 0], [0, 1-SELECTED_FRAME_TOP_OFFSET, 1]]} lineWidth={SELECTED_FRAME_LINE_WIDTH} color={SELECTED_FRAME_COLOR}/>
            <Line points={[[-2, 0, 0], [-2, 1-SELECTED_FRAME_TOP_OFFSET, 0]]} lineWidth={SELECTED_FRAME_LINE_WIDTH} color={SELECTED_FRAME_COLOR}/>
            <Line points={[[-2, 0, 1], [-2, 1-SELECTED_FRAME_TOP_OFFSET, 1]]} lineWidth={SELECTED_FRAME_LINE_WIDTH} color={SELECTED_FRAME_COLOR}/>
            <Line points={[[0, 0, 0], [0, 1-SELECTED_FRAME_TOP_OFFSET, 0]]} lineWidth={SELECTED_FRAME_LINE_WIDTH} color={SELECTED_FRAME_COLOR}/>
            <Line points={[[0, 0, 1], [0, 1-SELECTED_FRAME_TOP_OFFSET, 1]]} lineWidth={SELECTED_FRAME_LINE_WIDTH} color={SELECTED_FRAME_COLOR}/>
          </mesh>
        </group>
      }
      <Gltf src="/gltf/largechest/large_chest_opt.glb" position={[0, 0, 1/16]}/>
    </mesh>
  )
}
