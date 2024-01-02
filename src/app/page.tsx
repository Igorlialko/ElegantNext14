import Advantages from '@/app/_components/Advantages/Advantages';
import SaleOff from '@/app/_components/SaleOff/SaleOff';
import InteriorSolutions from '@/app/_components/InteriorSolutions/InteriorSolutions';
import Arrivals from '@/app/_components/Arrivals/Arrivals';
import MainSlider from '@/app/_components/MainSlider/MainSlider';
import Newsletter from '@/app/_components/Newsletter/Newsletter';
import Articles from '@/app/_components/Articles/Articles';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

export default function Home() {
  return (
    <main>
      <MainSlider />
      <InteriorSolutions />
      <Arrivals />
      <Advantages />
      <SaleOff />
      <Articles />
      <Newsletter />
    </main>
  );
}
