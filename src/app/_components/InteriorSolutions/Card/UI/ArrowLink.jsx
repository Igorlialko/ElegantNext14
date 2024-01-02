import s from './ArrowLink.module.scss';

import clsx from 'clsx';

const ArrowLink = ({ className, linkTitle }) => {
  return (
    <div className={s.linkWrap}>
      <div className={clsx(s.link, className)}>{linkTitle}</div>
    </div>
  );
};

export default ArrowLink;
