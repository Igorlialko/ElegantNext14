import s from './advantages.module.scss';
import FastDeliveryIcon from '@/app/_icons/FastDeliveryIcon';
import MoneyIcon from '@/app/_icons/MoneyIcon';
import LockIcon from '@/app/_icons/LockIcon';
import CallIcon from '@/app/_icons/CallIcon';

const cardMas = [
  {
    icon: <FastDeliveryIcon />,
    title: 'Free Shipping',
    text: 'Order above $200',
    id: 1,
  },
  {
    icon: <MoneyIcon />,
    title: 'Money-back',
    text: '30 days guarantee',
    id: 2,
  },
  {
    icon: <LockIcon />,
    title: 'Secure Payments',
    text: 'Secured by Stripe',
    id: 3,
  },
  {
    icon: <CallIcon />,
    title: '24/7 Support',
    text: 'Phone and Email support',
    id: 4,
  },
];

const Advantages = ({ className }: { className?: string }) => (
  <section className={className}>
    <div className='_container'>
      <div className={s.cards}>
        {cardMas.map((card) => (
          <div key={card.id} className={s.cardNumber}>
            {card.icon}
            <div className={s.cardTitle}>{card.title}</div>
            <div className={s.cardText}>{card.text}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Advantages;
