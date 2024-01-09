import s from '@/app/[locale]/(globalRoutes)/contact-us/_components/AboutUs/aboutUs.module.scss';
import UnderLineLink from '@/commonUI/UnderLineLink/UnderLineLink';

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
              <p>3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019.</p>
              <p> Our customer service is always prepared to support you 24/7</p>
            </div>
            <UnderLineLink url={'/shop'}>Shop Now</UnderLineLink>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
