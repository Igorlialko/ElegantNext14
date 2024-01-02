import s from './ArrowLink.module.scss';

import clsx from 'clsx';

interface ILink {
  className: string;
  linkTitle: string;
}

const ArrowLink = ({ className, linkTitle }: ILink) => {
  return (
    <div className={s.linkWrap}>
      <div className={clsx(s.link, className)}>{linkTitle}</div>
    </div>
  );
};

export default ArrowLink;
