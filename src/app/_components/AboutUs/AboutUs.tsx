import s from '@/app/_components/AboutUs/aboutUs.module.scss';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <section className={s.aboutUs}>
      <div className='_container'>
        <div className={s.about}>
          <div className={s.aboutImg}>
            <img src='/images/name.webp' alt='Paste20image' height={532} width={720} />
          </div>
          <div className={s.aboutPost}>
            <div className={s.aboutTitle}>About Us</div>
            <div className={s.aboutText}>
              3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. <br />{' '}
              Our customer service is always prepared to support you 24/7
            </div>
            <Link href='/shop' className={s.aboutButton}>
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
