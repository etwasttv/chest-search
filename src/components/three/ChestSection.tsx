import LargeChest from '@/components/three/LargeChest';
import { Vector3 } from 'three';


export type ChestSectionProps = {
  section: string;
  position: Vector3;
  rotation?: number;
}

export default function ChestSection({ section, position, rotation = 0}: ChestSectionProps) {

  /**
   * [   ]  5 段目
   * [   ]  4 段目
   * [   ]  3 段目
   * [   ]  2 段目
   * [&  ]  1 段目
   *
   * &が基準
   */

  return (
    <group
      position={position}
      rotation={[0, rotation, 0]}
    >
      <LargeChest section={section} idx={1} position={[0, 1, 0]}/>
      <LargeChest section={section} idx={2} position={[0, 2, 0]}/>
      <LargeChest section={section} idx={3} position={[0, 3, 0]}/>
      <LargeChest section={section} idx={4} position={[0, 4, 0]}/>
      <LargeChest section={section} idx={5} position={[0, 5, 0]}/>
    </group>
  )
}
