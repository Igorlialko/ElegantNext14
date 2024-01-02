import s from './MainCard.module.scss';
import ArrowLink from './UI/ArrowLink';

function MainCard({ linkTitle, title, imgUrl }) {
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

export default MainCard;
