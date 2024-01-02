import s from './advantages.module.scss';

const cardMas = [
  {
    url: '/images/fastDelivery.png',
    alt: 'fastDelivery',
    title: 'Free Shipping',
    text: 'Order above $200',
  },
  {
    url: '/images/money.png',
    alt: 'money',
    title: 'Money-back',
    text: '30 days guarantee',
  },
  {
    url: '/images/lock%2001.png',
    alt: 'lock',
    title: 'Secure Payments',
    text: 'Secured by Stripe',
  },
  {
    url: '/images/call.png',
    alt: 'call',
    title: '24/7 Support',
    text: 'Phone and Email support',
  },
];

const Advantages = () => (
  <section className='_container'>
    <div className={s.cards}>
      {cardMas.map((card) => (
        <div key={card.url} className={s.cardNumber}>
          <div className={s.cardIcons}>
            <img src={card.url} alt={card.alt} width={48} height={48} />
          </div>
          <div className={s.cardTitle}>{card.title}</div>
          <div className={s.cardText}>{card.text}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Advantages;
