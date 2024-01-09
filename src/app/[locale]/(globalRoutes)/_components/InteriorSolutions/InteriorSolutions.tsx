import s from './InteriorSolutions.module.scss';
import MainCard from './MainCard/MainCard';
import CardMin from './CardMin/CardMin';
import HeaderTitle from './Title/HeaderTitle';

export default function InteriorSolutions() {
  return (
    <div className='_container'>
      <section className={s.wrapper}>
        <HeaderTitle />
        <div className={s.flexContainer}>
          <div className={s.row1}>
            <MainCard
              imgUrl='/images/InteriorSolutions/interiorMain.webp'
              imgUrlMobile='/images/InteriorSolutions/interiorMainMobile.webp'
              title='Living Room'
              linkTitle='Shop Now'
            />
          </div>
          <div className={s.row2}>
            <CardMin
              imgUrl='/images/InteriorSolutions/interiorMin1.webp'
              imgUrlMobile='/images/InteriorSolutions/interiorMin1Mobile.webp'
              title='Bedroom'
              linkTitle='Shop Now'
            />
            <CardMin
              imgUrl='/images/InteriorSolutions/interiorMin2.webp'
              imgUrlMobile='/images/InteriorSolutions/interiorMin2Mobile.webp'
              title='Kitchen'
              linkTitle='Shop Now'
            />
          </div>
        </div>
      </section>
    </div>
  );
}
