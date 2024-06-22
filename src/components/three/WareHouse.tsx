'use client';

import { useWareHouseContext } from '@/components/contextProvider/WareHouseProvider';
import ChestItemPane from '@/components/three/ChestItemPane';
import ChestSection from '@/components/three/ChestSection';
import ToExchangeText from '@/components/three/Text/ToExchange';
import ToWorldSpawnText from '@/components/three/Text/ToWorldSpawn';
import { Gltf, Html, OrbitControls, Stats } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { Vector3 } from 'three';

export default function WareHouse() {
  const { camera, size } = useThree();
  const { getChestData, selectedChestId } = useWareHouseContext();

  console.log(size);

  return (
    <>
      <Html
        calculatePosition={(e, c) => [0, size.height/2]}
      >
        {selectedChestId && <ChestItemPane selectedChestId={selectedChestId} chestData={getChestData(selectedChestId)}/>}
      </Html>
      <OrbitControls
        onEnd={(e) => {
          console.log('end');
        }}
        onStart={(e) => {
          console.log('start');
        }}
        camera={camera}
      />
      <directionalLight position={[30, 20, 20]} intensity={1}/>
      <directionalLight position={[-30, 20, 20]} intensity={1}/>
      <directionalLight position={[30, 20, -20]} intensity={1}/>
      <directionalLight position={[-30, 20, -20]} intensity={1}/>
      <Gltf src="/gltf/storage/storage_opt.glb" position={[0, 0, 0]}/>
      {/* <Stats/> */}
      {/* <axesHelper args={[5]} position={[0, 2, 0]}/> */}
      <ToExchangeText/>
      <ToWorldSpawnText/>

      {/* A */}
      <ChestSection section='A01'  position={new Vector3( 22, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A02'  position={new Vector3( 20, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A03'  position={new Vector3( 18, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A04'  position={new Vector3( 16, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A05'  position={new Vector3( 10, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A06'  position={new Vector3(  8, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A07'  position={new Vector3(  6, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A08'  position={new Vector3(  4, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A09'  position={new Vector3( -4, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A10' position={new Vector3( -6, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A11' position={new Vector3( -8, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A12' position={new Vector3(-10, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A13' position={new Vector3(-16, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A14' position={new Vector3(-18, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A15' position={new Vector3(-20, 0, 12)} rotation={Math.PI}/>
      <ChestSection section='A16' position={new Vector3(-22, 0, 12)} rotation={Math.PI}/>

      {/* B */}
      <ChestSection section='B01'  position={new Vector3( 22, 0, 10)}/>
      <ChestSection section='B02'  position={new Vector3( 20, 0, 10)}/>
      <ChestSection section='B03'  position={new Vector3( 18, 0, 10)}/>
      <ChestSection section='B04'  position={new Vector3( 16, 0, 10)}/>
      <ChestSection section='B05'  position={new Vector3( 10, 0, 10)}/>
      <ChestSection section='B06'  position={new Vector3(  8, 0, 10)}/>
      <ChestSection section='B07'  position={new Vector3(  6, 0, 10)}/>
      <ChestSection section='B08'  position={new Vector3(  4, 0, 10)}/>
      <ChestSection section='B09'  position={new Vector3( -4, 0, 10)}/>
      <ChestSection section='B10' position={new Vector3( -6, 0, 10)}/>
      <ChestSection section='B11' position={new Vector3( -8, 0, 10)}/>
      <ChestSection section='B12' position={new Vector3(-10, 0, 10)}/>
      <ChestSection section='B13' position={new Vector3(-16, 0, 10)}/>
      <ChestSection section='B14' position={new Vector3(-18, 0, 10)}/>
      <ChestSection section='B15' position={new Vector3(-20, 0, 10)}/>
      <ChestSection section='B16' position={new Vector3(-22, 0, 10)}/>

      {/* C */}
      <ChestSection section='C01'  position={new Vector3( 22, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C02'  position={new Vector3( 20, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C03'  position={new Vector3( 18, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C04'  position={new Vector3( 16, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C05'  position={new Vector3( 10, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C06'  position={new Vector3(  8, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C07'  position={new Vector3(  6, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C08'  position={new Vector3(  4, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C09'  position={new Vector3( -4, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C10' position={new Vector3( -6, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C11' position={new Vector3( -8, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C12' position={new Vector3(-10, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C13' position={new Vector3(-16, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C14' position={new Vector3(-18, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C15' position={new Vector3(-20, 0, 5)} rotation={Math.PI}/>
      <ChestSection section='C16' position={new Vector3(-22, 0, 5)} rotation={Math.PI}/>

      {/* D */}
      <ChestSection section='D01'  position={new Vector3( 22, 0, 3)}/>
      <ChestSection section='D02'  position={new Vector3( 20, 0, 3)}/>
      <ChestSection section='D03'  position={new Vector3( 18, 0, 3)}/>
      <ChestSection section='D04'  position={new Vector3( 16, 0, 3)}/>
      <ChestSection section='D05'  position={new Vector3( 10, 0, 3)}/>
      <ChestSection section='D06'  position={new Vector3(  8, 0, 3)}/>
      <ChestSection section='D07'  position={new Vector3(  6, 0, 3)}/>
      <ChestSection section='D08'  position={new Vector3(  4, 0, 3)}/>
      <ChestSection section='D09'  position={new Vector3( -4, 0, 3)}/>
      <ChestSection section='D10' position={new Vector3( -6, 0, 3)}/>
      <ChestSection section='D11' position={new Vector3( -8, 0, 3)}/>
      <ChestSection section='D12' position={new Vector3(-10, 0, 3)}/>
      <ChestSection section='D13' position={new Vector3(-16, 0, 3)}/>
      <ChestSection section='D14' position={new Vector3(-18, 0, 3)}/>
      <ChestSection section='D15' position={new Vector3(-20, 0, 3)}/>
      <ChestSection section='D16' position={new Vector3(-22, 0, 3)}/>

      {/* E */}
      <ChestSection section='E01'  position={new Vector3( 22, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E02'  position={new Vector3( 20, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E03'  position={new Vector3( 18, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E04'  position={new Vector3( 16, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E05'  position={new Vector3( 10, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E06'  position={new Vector3(  8, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E07'  position={new Vector3(  6, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E08'  position={new Vector3(  4, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E09'  position={new Vector3( -4, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E10' position={new Vector3( -6, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E11' position={new Vector3( -8, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E12' position={new Vector3(-10, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E13' position={new Vector3(-16, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E14' position={new Vector3(-18, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E15' position={new Vector3(-20, 0, -3)} rotation={Math.PI}/>
      <ChestSection section='E16' position={new Vector3(-22, 0, -3)} rotation={Math.PI}/>

      {/* F */}
      <ChestSection section='F01'  position={new Vector3( 22, 0, -5)}/>
      <ChestSection section='F02'  position={new Vector3( 20, 0, -5)}/>
      <ChestSection section='F03'  position={new Vector3( 18, 0, -5)}/>
      <ChestSection section='F04'  position={new Vector3( 16, 0, -5)}/>
      <ChestSection section='F05'  position={new Vector3( 10, 0, -5)}/>
      <ChestSection section='F06'  position={new Vector3(  8, 0, -5)}/>
      <ChestSection section='F07'  position={new Vector3(  6, 0, -5)}/>
      <ChestSection section='F08'  position={new Vector3(  4, 0, -5)}/>
      <ChestSection section='F09'  position={new Vector3( -4, 0, -5)}/>
      <ChestSection section='F10' position={new Vector3( -6, 0, -5)}/>
      <ChestSection section='F11' position={new Vector3( -8, 0, -5)}/>
      <ChestSection section='F12' position={new Vector3(-10, 0, -5)}/>
      <ChestSection section='F13' position={new Vector3(-16, 0, -5)}/>
      <ChestSection section='F14' position={new Vector3(-18, 0, -5)}/>
      <ChestSection section='F15' position={new Vector3(-20, 0, -5)}/>
      <ChestSection section='F16' position={new Vector3(-22, 0, -5)}/>

      {/* G */}
      <ChestSection section='G01'  position={new Vector3( 22, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G02'  position={new Vector3( 20, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G03'  position={new Vector3( 18, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G04'  position={new Vector3( 16, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G05'  position={new Vector3( 10, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G06'  position={new Vector3(  8, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G07'  position={new Vector3(  6, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G08'  position={new Vector3(  4, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G09'  position={new Vector3( -4, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G10' position={new Vector3( -6, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G11' position={new Vector3( -8, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G12' position={new Vector3(-10, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G13' position={new Vector3(-16, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G14' position={new Vector3(-18, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G15' position={new Vector3(-20, 0, -10)} rotation={Math.PI}/>
      <ChestSection section='G16' position={new Vector3(-22, 0, -10)} rotation={Math.PI}/>

      {/* H */}
      <ChestSection section='H01'  position={new Vector3( 22, 0, -12)}/>
      <ChestSection section='H02'  position={new Vector3( 20, 0, -12)}/>
      <ChestSection section='H03'  position={new Vector3( 18, 0, -12)}/>
      <ChestSection section='H04'  position={new Vector3( 16, 0, -12)}/>
      <ChestSection section='H05'  position={new Vector3( 10, 0, -12)}/>
      <ChestSection section='H06'  position={new Vector3(  8, 0, -12)}/>
      <ChestSection section='H07'  position={new Vector3(  6, 0, -12)}/>
      <ChestSection section='H08'  position={new Vector3(  4, 0, -12)}/>
      <ChestSection section='H09'  position={new Vector3( -4, 0, -12)}/>
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
