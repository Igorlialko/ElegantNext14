import s from './cartSummary.module.scss';
import H7 from '@/app/_typography/H7/H7';
import { useState } from 'react';
import Button from '@/commonUI/Button/Button';
import RadioInput from '@/commonUI/fields/RadioInput/RadioInput';

interface ICartSummary {
  title: string;
  subtotal: number;
}

const delivery = [
  {
    name: 'Free shipping',
    price: 0.0,
    nameRadio: 'delivery',
    id: 1,
  },
  {
    name: 'Express shipping',
    price: 15.0,
    nameRadio: 'delivery',
    id: 2,
  },
  {
    name: 'Pick Up',
    price: 21.0,
    nameRadio: 'delivery',
    id: 3,
  },
];
export default function CartSummary({ title, subtotal }: ICartSummary) {
  const [totalSum, setTotal] = useState(0);

  return (
    <form className={s.cartSummary}>
      <div className={s.title}>
        <H7>{title}</H7>
      </div>
      <div className={s.radioInputs}>
        {delivery.map((item) => {
          return (
            <RadioInput
              key={item.id}
              name={item.nameRadio}
              nameLabel={item.name}
              price={item.price}
            />
          );
        })}
      </div>
      <div className={s.summary}>
        <div className={s.summaryItem}>
          <p className={s.subtotalName}>Subtotal</p>
          <span className={s.subtotalPrice}>${subtotal}</span>
        </div>
        <div className={s.summaryItem}>
          <p className={s.totalName}>Total</p>
          <span className={s.totalPrice}>${totalSum}</span>
        </div>
      </div>
      <Button className={s.cartSummaryButton} typeButton='submit'>
        Checkout
      </Button>
    </form>
  );
}
