import s from './cartSummary.module.scss';
import H7 from '@/app/_typography/H7/H7';
import { ChangeEvent, useState } from 'react';
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
    checked: true,
  },
  {
    name: 'Express shipping',
    price: 15.0,
    nameRadio: 'delivery',
    id: 2,
    checked: false,
  },
  {
    name: 'Pick Up',
    price: 21.0,
    nameRadio: 'delivery',
    id: 3,
    checked: false,
  },
];

export default function CartSummary({ title, subtotal }: ICartSummary) {
  const [deliveryArray, setDeliveryArray] = useState(delivery);
  const currentDeliveryValue = deliveryArray.find((item) => item.checked)?.price || 0;
  const totalSum = subtotal + currentDeliveryValue;

  function changeDelivery(e: ChangeEvent<HTMLInputElement>) {
    const value = parseFloat(e.currentTarget.value);
    setDeliveryArray((prev) =>
      prev.map((item) => {
        item.checked = item.price === value;
        return item;
      })
    );
  }

  return (
    <form className={s.cartSummary}>
      <div className={s.title}>
        <H7>{title}</H7>
      </div>
      <div className={s.radioInputs}>
        {deliveryArray.map((item) => (
          <RadioInput
            key={item.id}
            name={item.nameRadio}
            nameLabel={item.name}
            price={item.price}
            checked={item.checked}
            changeTotal={changeDelivery}
          />
        ))}
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
