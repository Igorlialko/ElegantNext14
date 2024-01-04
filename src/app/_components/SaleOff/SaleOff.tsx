import s from '@/app/_components/SaleOff/saleOff.module.scss';
import H4 from '@/app/_typography/H4/H4';
import UnderLineLink from '@/commonUI/UnderLineLink/UnderLineLink';

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
            <H4 className={s.saleTitle}>
              HUNDREDS of <br />
              New lower prices!
            </H4>
            <p className={s.saleText}>
              It’s more affordable than ever to give every room in your home a stylish makeover
            </p>
            <UnderLineLink url={'/shop'}>Shop Now</UnderLineLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleOff;
