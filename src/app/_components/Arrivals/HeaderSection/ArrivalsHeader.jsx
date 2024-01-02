import UnderLineLink from '../../UI/UnderLineLink';

import s from './ArrivalsHeader.module.scss';

const ArrivalsHeader = () => (
  <div className={s.flexWrap}>
    <div className={s.title}>New Arrivals</div>
    <UnderLineLink url='/'>More Products</UnderLineLink>
  </div>
);

export default ArrivalsHeader;
