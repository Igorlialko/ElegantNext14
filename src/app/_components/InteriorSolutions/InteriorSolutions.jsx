import s from './InteriorSolutions.module.scss';
import MainCard from './Card/MainCard';
import CardMin from './Card/CardMin';
import HeaderTitle from './Title/HeaderTitle';

export default function InteriorSolutions() {
  return (
    <div className='_container'>
      <section className={s.wrapper}>
        <HeaderTitle />
        <div className={s.flexContainer}>
          <div className={s.row1}>
            <MainCard
              imgUrl={'/images/InteriorSolutions/LivingRoom.webp'}
              title={'Living Room'}
              linkTitle={'Shop Now'}
            />
          </div>
          <div className={s.row2}>
            <CardMin
              imgUrl={'/images/InteriorSolutions/Bedroom.webp'}
              title={'Bedroom'}
              linkTitle={'Shop Now'}
            />
            <CardMin
              imgUrl={'/images/InteriorSolutions/Kitchen.webp'}
              title={'Kitchen'}
              linkTitle={'Shop Now'}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
