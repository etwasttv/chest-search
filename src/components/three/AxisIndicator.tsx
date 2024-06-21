import { ThreeElements } from '@react-three/fiber';

export default function AxisIndicator(props: ThreeElements['group']) {
  return (
    <group
      {...props}
    >
      <mesh
        position={[0.5, 0, 0]}
        rotation={[0, 0, Math.PI/2]}
      >
        <cylinderGeometry args={[0.01, 0.01, 1, 16, 1]}/>
        <meshStandardMaterial color={'red'}/>
      </mesh>
      <mesh
        position={[0, 0.5, 0]}
      >
        <cylinderGeometry args={[0.01, 0.01, 1, 16, 1]}/>
        <meshStandardMaterial color={'green'}/>
      </mesh>
      <mesh
        position={[0, 0, 0.5]}
        rotation={[Math.PI/2, 0, 0]}
      >
        <cylinderGeometry args={[0.01, 0.01, 1, 16, 1]}/>
        <meshStandardMaterial color={'blue'}/>
      </mesh>
    </group>
  );
}
