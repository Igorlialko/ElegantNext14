import ContactTitle from '@/app/(globalRoutes)/contact-us/_components/ContactTitle/ContactTitle';
import AboutUs from '@/app/(globalRoutes)/contact-us/_components/AboutUs/AboutUs';
import ContactUs from '@/app/(globalRoutes)/contact-us/_components/ContactUs/ContactUs';
import Advantages from '@/app/(globalRoutes)/_components/Advantages/Advantages';
import s from './page.module.scss';
import Form from '@/app/(globalRoutes)/contact-us/_components/Form/Form';

export default function ContactUsPage() {
  return (
    <main>
      <ContactTitle />
      <AboutUs />
      <ContactUs />
      <Form />
      <Advantages className={s.advantages} />
    </main>
  );
}
