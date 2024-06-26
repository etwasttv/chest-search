import { WareHouseProvider } from '@/components/contextProvider/WareHouseProvider';
import WareHouseCanvas from '@/components/three/WareHouseCanvas';

export default async function ChestMap() {

  return (
    <WareHouseProvider>
      <WareHouseCanvas/>
    </WareHouseProvider>
  );
}
