import Advantages from '@/app/[locale]/(globalRoutes)/_components/Advantages/Advantages';
import SaleOff from '@/app/[locale]/(globalRoutes)/_components/SaleOff/SaleOff';
import InteriorSolutions from '@/app/[locale]/(globalRoutes)/_components/InteriorSolutions/InteriorSolutions';
import Arrivals from '@/app/[locale]/(globalRoutes)/_components/Arrivals/Arrivals';
import MainSlider from '@/app/[locale]/(globalRoutes)/_components/MainSlider/MainSlider';
import Newsletter from '@/app/[locale]/(globalRoutes)/_components/Newsletter/Newsletter';
import Articles from '@/app/[locale]/(globalRoutes)/_components/Articles/Articles';

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
