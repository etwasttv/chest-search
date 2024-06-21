import { Gltf, useGLTF } from '@react-three/drei'
import { ThreeElements } from '@react-three/fiber';

export type LargeChestProps = ThreeElements['mesh'] & {
  section: string;
  idx: number;
}

export default function LargeChest({ section, idx, ...props }: LargeChestProps) {

  return (
    <mesh
      {...props}
      onPointerOver={(e) => {
        console.log(`This is ${section}-${idx}`);
      }}
    >
      <Gltf src="/gltf/largechest/chest_large.gltf"/>
    </mesh>
  )
}
