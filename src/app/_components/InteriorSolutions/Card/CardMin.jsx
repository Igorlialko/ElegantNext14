import s from './CardMin.module.scss';

import ArrowLink from './UI/ArrowLink';
import clsx from 'clsx';

const CardMin = ({ imgUrl, title, linkTitle }) => {
  return (
    <div className={clsx(s.row2Itaem1)}>
      <a href='/'>
        <div className={s.title}>{title}</div>
        <ArrowLink className={s.positionLink} linkTitle={linkTitle} />
        <img src={imgUrl} alt={title} />
      </a>
    </div>
  );
};
export default CardMin;
