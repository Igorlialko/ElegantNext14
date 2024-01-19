import s from './thx.module.scss';
import H6 from '@/app/_typography/H6/H6';
import H4 from '@/app/_typography/H4/H4';
import Button from '@/commonUI/Button/Button';
import { tableProducts } from '@/app/[locale]/(globalRoutes)/cart/mockData';

const ordersInformation = {
  orderCode: '#0123_45678',
  total: 'October 19, 2023',
  date: '$1,345.00',
  paymentMethod: 'Credit Card',
};

const ThankYou = () => {
  return (
    <div className={s.orderComplete}>
      <div className={s.titles}>
        <H6>Thank you! 🎉</H6>
        <H4>Your order has been received</H4>
      </div>
      <div className={s.products}>
        {tableProducts.map((product) => (
          <div key={product.id} className={s.product}>
            <img src={product.imgPath} alt={product.altImg} />
            <span>{product.quantity}</span>
          </div>
        ))}
      </div>
      <ul className={s.informations}>
        <li className={s.information}>
          <span className={s.informationName}>Order code:</span>
          <p className={s.informationText}>{ordersInformation.orderCode}</p>
        </li>
        <li className={s.information}>
          <span className={s.informationName}>Date:</span>
          <p className={s.informationText}>{ordersInformation.date}</p>
        </li>
        <li className={s.information}>
          <span className={s.informationName}>Total:</span>
          <p className={s.informationText}>{ordersInformation.total}</p>
        </li>
        <li className={s.information}>
          <span className={s.informationName}>Payment method:</span>
          <p className={s.informationText}>{ordersInformation.paymentMethod}</p>
        </li>
      </ul>
      <Button roundedButton className={s.buttonHistory}>
        Purchase history
      </Button>
    </div>
  );
};

export default ThankYou;
