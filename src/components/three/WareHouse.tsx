'use client';

import AxisIndicator from '@/components/three/AxisIndicator';
import ChestSection from '@/components/three/ChestSection';
import ToExchangeText from '@/components/three/Text/ToExchange';
import ToWorldSpawnText from '@/components/three/Text/ToWorldSpawn';
import { Gltf, MapControls, Text3D } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { Color, Vector3 } from 'three';

export default function WareHouse() {
  const { camera } = useThree();

  useEffect(() => {
    //  カメラの初期位置
    camera.position.setX(30);
    camera.position.setY(30);
    camera.position.setZ(40);
  }, []);

  return (
    <>
      <MapControls
        onEnd={(e) => {
          console.log('end');
        }}
      />
      <directionalLight position={[30, 20, 20]} intensity={5}/>
      <directionalLight position={[-30, 20, -20]} intensity={5}/>
      <AxisIndicator position={[0, 7, 0]}/>
      <Gltf src="/gltf/storage/storage.gltf"/>
      <ToExchangeText/>
      <ToWorldSpawnText/>

      {/* A */}
      <ChestSection section='A1'  position={new Vector3( 22, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A2'  position={new Vector3( 20, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A3'  position={new Vector3( 18, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A4'  position={new Vector3( 16, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A5'  position={new Vector3( 10, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A6'  position={new Vector3(  8, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A7'  position={new Vector3(  6, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A8'  position={new Vector3(  4, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A9'  position={new Vector3( -4, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A10' position={new Vector3( -6, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A11' position={new Vector3( -8, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A12' position={new Vector3(-10, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A13' position={new Vector3(-16, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A14' position={new Vector3(-18, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A15' position={new Vector3(-20, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A16' position={new Vector3(-22, 0, 12)} rotation={Math.PI}/>

      {/* B */}
      <ChestSection section='B1'  position={new Vector3( 22, 0, 10)}/>
      <ChestSection section='B2'  position={new Vector3( 20, 0, 10)}/>
      <ChestSection section='B3'  position={new Vector3( 18, 0, 10)}/>
      <ChestSection section='B4'  position={new Vector3( 16, 0, 10)}/>
      <ChestSection section='B5'  position={new Vector3( 10, 0, 10)}/>
      <ChestSection section='B6'  position={new Vector3(  8, 0, 10)}/>
      <ChestSection section='B7'  position={new Vector3(  6, 0, 10)}/>
      <ChestSection section='B8'  position={new Vector3(  4, 0, 10)}/>
      <ChestSection section='B9'  position={new Vector3( -4, 0, 10)}/>
      <ChestSection section='B10' position={new Vector3( -6, 0, 10)}/>
      <ChestSection section='B11' position={new Vector3( -8, 0, 10)}/>
      <ChestSection section='B12' position={new Vector3(-10, 0, 10)}/>
      <ChestSection section='B13' position={new Vector3(-16, 0, 10)}/>
      <ChestSection section='B14' position={new Vector3(-18, 0, 10)}/>
      <ChestSection section='B15' position={new Vector3(-20, 0, 10)}/>
      <ChestSection section='B16' position={new Vector3(-22, 0, 10)}/>

      {/* C */}
      <ChestSection section='C1'  position={new Vector3( 22, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C2'  position={new Vector3( 20, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C3'  position={new Vector3( 18, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C4'  position={new Vector3( 16, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C5'  position={new Vector3( 10, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C6'  position={new Vector3(  8, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C7'  position={new Vector3(  6, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C8'  position={new Vector3(  4, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C9'  position={new Vector3( -4, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C10' position={new Vector3( -6, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C11' position={new Vector3( -8, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C12' position={new Vector3(-10, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C13' position={new Vector3(-16, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C14' position={new Vector3(-18, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C15' position={new Vector3(-20, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C16' position={new Vector3(-22, 0, 5)} rotation={Math.PI}/>

      {/* D */}
      <ChestSection section='D1'  position={new Vector3( 22, 0, 3)}/>
      <ChestSection section='D2'  position={new Vector3( 20, 0, 3)}/>
      <ChestSection section='D3'  position={new Vector3( 18, 0, 3)}/>
      <ChestSection section='D4'  position={new Vector3( 16, 0, 3)}/>
      <ChestSection section='D5'  position={new Vector3( 10, 0, 3)}/>
      <ChestSection section='D6'  position={new Vector3(  8, 0, 3)}/>
      <ChestSection section='D7'  position={new Vector3(  6, 0, 3)}/>
      <ChestSection section='D8'  position={new Vector3(  4, 0, 3)}/>
      <ChestSection section='D9'  position={new Vector3( -4, 0, 3)}/>
      <ChestSection section='D10' position={new Vector3( -6, 0, 3)}/>
      <ChestSection section='D11' position={new Vector3( -8, 0, 3)}/>
      <ChestSection section='D12' position={new Vector3(-10, 0, 3)}/>
      <ChestSection section='D13' position={new Vector3(-16, 0, 3)}/>
      <ChestSection section='D14' position={new Vector3(-18, 0, 3)}/>
      <ChestSection section='D15' position={new Vector3(-20, 0, 3)}/>
      <ChestSection section='D16' position={new Vector3(-22, 0, 3)}/>

      {/* E */}
      <ChestSection section='E1'  position={new Vector3( 22, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E2'  position={new Vector3( 20, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E3'  position={new Vector3( 18, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E4'  position={new Vector3( 16, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E5'  position={new Vector3( 10, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E6'  position={new Vector3(  8, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E7'  position={new Vector3(  6, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E8'  position={new Vector3(  4, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E9'  position={new Vector3( -4, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E10' position={new Vector3( -6, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E11' position={new Vector3( -8, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E12' position={new Vector3(-10, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E13' position={new Vector3(-16, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E14' position={new Vector3(-18, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E15' position={new Vector3(-20, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E16' position={new Vector3(-22, 0, -3)} rotation={Math.PI}/>

      {/* F */}
      <ChestSection section='F1'  position={new Vector3( 22, 0, -5)}/>
      <ChestSection section='F2'  position={new Vector3( 20, 0, -5)}/>
      <ChestSection section='F3'  position={new Vector3( 18, 0, -5)}/>
      <ChestSection section='F4'  position={new Vector3( 16, 0, -5)}/>
      <ChestSection section='F5'  position={new Vector3( 10, 0, -5)}/>
      <ChestSection section='F6'  position={new Vector3(  8, 0, -5)}/>
      <ChestSection section='F7'  position={new Vector3(  6, 0, -5)}/>
      <ChestSection section='F8'  position={new Vector3(  4, 0, -5)}/>
      <ChestSection section='F9'  position={new Vector3( -4, 0, -5)}/>
      <ChestSection section='F10' position={new Vector3( -6, 0, -5)}/>
      <ChestSection section='F11' position={new Vector3( -8, 0, -5)}/>
      <ChestSection section='F12' position={new Vector3(-10, 0, -5)}/>
      <ChestSection section='F13' position={new Vector3(-16, 0, -5)}/>
      <ChestSection section='F14' position={new Vector3(-18, 0, -5)}/>
      <ChestSection section='F15' position={new Vector3(-20, 0, -5)}/>
      <ChestSection section='F16' position={new Vector3(-22, 0, -5)}/>

      {/* G */}
      <ChestSection section='G1'  position={new Vector3( 22, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G2'  position={new Vector3( 20, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G3'  position={new Vector3( 18, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G4'  position={new Vector3( 16, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G5'  position={new Vector3( 10, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G6'  position={new Vector3(  8, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G7'  position={new Vector3(  6, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G8'  position={new Vector3(  4, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G9'  position={new Vector3( -4, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G10' position={new Vector3( -6, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G11' position={new Vector3( -8, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G12' position={new Vector3(-10, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G13' position={new Vector3(-16, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G14' position={new Vector3(-18, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G15' position={new Vector3(-20, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G16' position={new Vector3(-22, 0, -10)} rotation={Math.PI}/>

      {/* H */}
      <ChestSection section='H1'  position={new Vector3( 22, 0, -12)}/>
      <ChestSection section='H2'  position={new Vector3( 20, 0, -12)}/>
      <ChestSection section='H3'  position={new Vector3( 18, 0, -12)}/>
      <ChestSection section='H4'  position={new Vector3( 16, 0, -12)}/>
      <ChestSection section='H5'  position={new Vector3( 10, 0, -12)}/>
      <ChestSection section='H6'  position={new Vector3(  8, 0, -12)}/>
      <ChestSection section='H7'  position={new Vector3(  6, 0, -12)}/>
      <ChestSection section='H8'  position={new Vector3(  4, 0, -12)}/>
      <ChestSection section='H9'  position={new Vector3( -4, 0, -12)}/>
      <ChestSection section='H10' position={new Vector3( -6, 0, -12)}/>
      <ChestSection section='H11' position={new Vector3( -8, 0, -12)}/>
      <ChestSection section='H12' position={new Vector3(-10, 0, -12)}/>
      <ChestSection section='H13' position={new Vector3(-16, 0, -12)}/>
      <ChestSection section='H14' position={new Vector3(-18, 0, -12)}/>
      <ChestSection section='H15' position={new Vector3(-20, 0, -12)}/>
      <ChestSection section='H16' position={new Vector3(-22, 0, -12)}/>
    </>
  )
}
