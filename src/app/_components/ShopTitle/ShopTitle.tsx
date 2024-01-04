import s from '@/app/_components/ShopTitle/shopTitle.module.scss';
import Link from 'next/link';
import ChevronRightIcon from '@/app/_icons/arrows/ChevronRightIcon';

const ShopTitle = () => {
  return (
    <section className={s.shopTitle}>
      <div className='_container'>
        <div className={s.shopImage}>
          <img src='/images/shopImage/ShopImage.webp' alt='ShopImage' />
        </div>
        <div className={s.shopText}>
          <div className={s.shopNavigation}>
            <Link href='/' className={s.shopHome}>
              Home
            </Link>
            <ChevronRightIcon className={s.shopIcon} />
            <p className={s.shopPage}>Shop</p>
          </div>
          <h1 className={s.shopT}>Shop Page</h1>
          <h2 className={s.shopP}>Let’s design the place you always imagined.</h2>
        </div>
      </div>
    </section>
  );
};
export default ShopTitle;
