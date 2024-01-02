import s from './advantages.module.scss';
import FastDeliveryIcon from '@/app/_icons/FastDeliveryIcon';

const cardMas = [
  {
    icon: <FastDeliveryIcon />,
    title: 'Free Shipping',
    text: 'Order above $200',
  },
  {
    icon: <FastDeliveryIcon />,
    title: 'Money-back',
    text: '30 days guarantee',
  },
  {
    icon: <FastDeliveryIcon />,
    title: 'Secure Payments',
    text: 'Secured by Stripe',
  },
  {
    icon: <FastDeliveryIcon />,
    title: '24/7 Support',
    text: 'Phone and Email support',
  },
];

const Advantages = () => (
  <section className='_container'>
    <div className={s.cards}>
      {cardMas.map((card) => (
        <div key={card.title} className={s.cardNumber}>
          <div className={s.cardIcons}>{card.icon}</div>
          <div className={s.cardTitle}>{card.title}</div>
          <div className={s.cardText}>{card.text}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Advantages;
