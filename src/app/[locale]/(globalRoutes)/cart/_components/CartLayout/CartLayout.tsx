import s from '@/app/[locale]/(globalRoutes)/cart/_components/CartSection/cartSection.module.scss';
import H3 from '@/app/_typography/H3/H3';
import Steps from '@/app/[locale]/(globalRoutes)/cart/_components/CartSection/Steps/Steps';
import { ReactNode } from 'react';

interface ICartLayout {
  children: ReactNode;
}

const CartLayout = ({ children }: ICartLayout) => {
  return (
    <main>
      <section className={s.cartSection}>
        <div className='_container'>
          <div className={s.title}>
            <H3>Cart</H3>
          </div>
          <div className={s.steps}>
            <Steps />
          </div>
          {children}
        </div>
      </section>
    </main>
  );
};

export default CartLayout;
