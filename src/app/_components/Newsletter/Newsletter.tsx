import s from './newsletter.module.scss';
import Email from '@/app/_icons/Email';
import H4 from '@/app/_components/typography/H4/H4';

export default function Newsletter() {
  return (
    <section className={s.newsletter}>
      <img src='/images/newsLetter/homeNewsletter.webp' alt='Newsletter' />
      <div className='_container'>
        <div className={s.newsletter__block}>
          <div className={s.newsletter__block_header}>
            <H4>Join Our Newsletter</H4>
            <p>Sign up for deals, new products and promotions</p>
          </div>
          <div className={s.newsletter__block_form}>
            <form action=''>
              <Email />
              <input type='email' placeholder='Email address' />
              <button>Signup</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
