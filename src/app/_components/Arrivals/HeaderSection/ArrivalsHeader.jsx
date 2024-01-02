import s from './ArrivalsHeader.module.scss';
import UnderLineLink from '@/commonUI/UnderLineLink/UnderLineLink';
// TODO: tsx component

const ArrivalsHeader = () => (
  <div className={s.flexWrap}>
    <div className={s.title}>New Arrivals</div>
    <UnderLineLink url='/'>More Products</UnderLineLink>
  </div>
);

export default ArrivalsHeader;
