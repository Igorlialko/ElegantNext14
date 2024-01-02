import s from './MainCard.module.scss';
import ArrowLink from '../ArrowLink/ArrowLink';

interface IMainCard {
  linkTitle: string;
  title: string;
  imgUrl: string;
}

export default function MainCard({ linkTitle, title, imgUrl }: IMainCard) {
  return (
    <div className={s.row1Itaem}>
      <a href='/'>
        <div className={s.title}>{title}</div>
        <ArrowLink linkTitle={linkTitle} className={s.positionLink} />
        <img src={imgUrl} alt={title} />
      </a>
    </div>
  );
}
