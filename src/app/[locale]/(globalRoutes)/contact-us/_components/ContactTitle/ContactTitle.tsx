import s from '@/app/[locale]/(globalRoutes)/contact-us/_components/ContactTitle/contactTitle.module.scss';
import Link from 'next/link';
import ChevronRightIcon from '@/app/_icons/arrows/ChevronRightIcon';

const ContactTitle = () => {
  return (
    <section className={s.contactTitle}>
      <div className='_container'>
        <div className={s.titleNavigation}>
          <Link href='/' className={s.home}>
            Home
          </Link>
          <ChevronRightIcon className={s.icon} />
          <p className={s.page}>Contact Us</p>
        </div>
        <h1 className={s.titleName}>
          We believe in sustainable decor. We’re passionate about life at home.
        </h1>
        <p className={s.titleText}>
          Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and
          classic design, which can be incorporated into any decor project. The pieces enchant for
          their sobriety, to last for generations, faithful to the shapes of each period, with a
          touch of the present
        </p>
      </div>
    </section>
  );
};
export default ContactTitle;
