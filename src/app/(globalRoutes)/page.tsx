import Advantages from '@/app/(globalRoutes)/_components/Advantages/Advantages';
import SaleOff from '@/app/(globalRoutes)/_components/SaleOff/SaleOff';
import InteriorSolutions from '@/app/(globalRoutes)/_components/InteriorSolutions/InteriorSolutions';
import Arrivals from '@/app/(globalRoutes)/_components/Arrivals/Arrivals';
import MainSlider from '@/app/(globalRoutes)/_components/MainSlider/MainSlider';
import Newsletter from '@/app/(globalRoutes)/_components/Newsletter/Newsletter';
import Articles from '@/app/(globalRoutes)/_components/Articles/Articles';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

export default function Home() {
  return (
    <>
      <main>
        <MainSlider />
        <InteriorSolutions />
        <Arrivals />
        <Advantages />
        <SaleOff />
        <Articles />
        <Newsletter />
      </main>
    </>
  );
}
