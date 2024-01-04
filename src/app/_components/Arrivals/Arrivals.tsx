'use client';

import ArrivalsHeader from './HeaderSection/ArrivalsHeader';

import s from './Arrivals.module.scss';
import ArrivalsSwiper from '@/app/_components/Arrivals/Swiper/ArrivalsSwiper';

const Arrivals = () => (
  <div className='_container'>
    <div className={s.flexWrap}>
      <ArrivalsHeader />
      <ArrivalsSwiper />
    </div>
  </div>
);

export default Arrivals;
