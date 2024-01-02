import Advantages from '@/app/_components/Advantages/Advantages';
import SaleOff from '@/app/_components/SaleOff/SaleOff';

import InteriorSolutions from './_components/InteriorSolutions/InteriorSolutions';
import Arrivals from './_components/Arrivals/Arrivals';

export default function Home() {
  return (
    <main>
      <InteriorSolutions />
      <Arrivals />
      <Advantages />
      <SaleOff />
    </main>
  );
}
