import s from './advantagesAbout.module.scss';
import FastDeliveryIcon from '@/app/_icons/FastDeliveryIcon';
import MoneyIcon from '@/app/_icons/MoneyIcon';
import LockIcon from '@/app/_icons/LockIcon';
import CallIcon from '@/app/_icons/CallIcon';

const aboutMas = [
  {
    icon: <FastDeliveryIcon />,
    title: 'Free Shipping',
    text: 'Order above $200',
  },
  {
    icon: <MoneyIcon />,
    title: 'Money-back',
    text: '30 days guarantee',
  },
  {
    icon: <LockIcon />,
    title: 'Secure Payments',
    text: 'Secured by Stripe',
  },
  {
    icon: <CallIcon />,
    title: '24/7 Support',
    text: 'Phone and Email support',
  },
];

const AdvantagesAbout = () => (
  <section className={s.adv}>
    <div className='_container'>
      <div className={s.advAbout}>
        {aboutMas.map((adv) => (
          <div key={adv.title} className={s.advNumber}>
            <div className={s.advIcons}>{adv.icon}</div>
            <div className={s.advTitle}>{adv.title}</div>
            <div className={s.advText}>{adv.text}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AdvantagesAbout;
