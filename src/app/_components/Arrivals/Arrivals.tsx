import ArrivalsHeader from './HeaderSection/ArrivalsHeader';
import ArrivalsSwiper from './Swiper/ArrivalsSwiper';

import s from './Arrivals.module.scss';

const Arrivals = () => (
  <div className='_container'>
    <div className={s.flexWrap}>
      <ArrivalsHeader />
      <ArrivalsSwiper />
    </div>
  </div>
);

export default Arrivals;
