import s from '@/app/_components/SaleOff/saleOff.module.scss';
import Link from 'next/link';

const SaleOff = () => {
  return (
    <section className={s.saleOff}>
      <div className='_container'>
        <div className={s.sale}>
          <div className={s.saleImg}>
            <img src='/images/name.webp' alt='Paste20image' height={532} width={720} />
          </div>
          <div className={s.salePost}>
            <div className={s.saleSale}>SALE UP TO 35% OFF</div>
            <div className={s.saleTitle}>
              HUNDREDS of <br />
              New lower prices!
            </div>
            <div className={s.saleText}>
              It’s more affordable than ever to give every room in your home a stylish makeover
            </div>
            <Link href='/shop' className={s.saleButton}>
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleOff;
