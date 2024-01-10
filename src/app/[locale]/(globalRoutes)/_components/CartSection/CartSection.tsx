'use client';

import s from './cartSection.module.scss';
import H3 from '@/app/_typography/H3/H3';
import Steps from '@/app/[locale]/(globalRoutes)/_components/CartSection/Steps/Steps';
import { useState } from 'react';
import Coupon from '@/app/[locale]/(globalRoutes)/_components/CartSection/Coupon/Coupon';
import CartSummary from '@/app/[locale]/(globalRoutes)/_components/CartSection/CartSummary/CartSummary';
import ProductTable from '@/app/[locale]/(globalRoutes)/_components/CartSection/ProductTable/ProductTable';

const stepsArray = [
  {
    name: 'Shopping cart',
    number: 1,
    active: true,
  },
  {
    name: 'Order complete',
    number: 2,
    active: false,
  },
];

export default function CartSection() {
  const [steps, setSteps] = useState(stepsArray);

  return (
    <section className={s.cartSection}>
      <div className='_container'>
        <div className={s.cartSectionTitle}>
          <H3>Cart</H3>
        </div>
        <div className={s.cartSectionSteps}>
          <Steps steps={steps} />
        </div>
        <div className={s.cartSectionOrder}>
          <ProductTable className={s.cartSectionOrderTable} />
          <CartSummary title='Cart summary' subtotal={1234.0} />
          <Coupon title='Have a coupon?' description='Add your code for an instant cart discount' />
        </div>
      </div>
    </section>
  );
}
