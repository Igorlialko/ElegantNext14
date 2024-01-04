import ContactTitle from '@/app/contact-us/_components/ContactTitle/ContactTitle';
import AboutUs from '@/app/contact-us/_components/AboutUs/AboutUs';
import ContactUs from '@/app/contact-us/_components/ContactUs/ContactUs';
import Advantages from '@/app/_components/Advantages/Advantages';
import s from './page.module.scss';

export default function ContactUsPage() {
  return (
    <main>
      <ContactTitle />
      <AboutUs />
      <ContactUs />
      <Advantages className={s.advantages} />
    </main>
  );
}
