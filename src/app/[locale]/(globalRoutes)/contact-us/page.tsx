import ContactTitle from '@/app/[locale]/(globalRoutes)/contact-us/_components/ContactTitle/ContactTitle';
import AboutUs from '@/app/[locale]/(globalRoutes)/contact-us/_components/AboutUs/AboutUs';
import ContactUs from '@/app/[locale]/(globalRoutes)/contact-us/_components/ContactUs/ContactUs';
import Advantages from '@/app/[locale]/(globalRoutes)/_components/Advantages/Advantages';
import s from './page.module.scss';
import Form from '@/app/[locale]/(globalRoutes)/contact-us/_components/Form/Form';
import Account from '@/app/[locale]/(globalRoutes)/contact-us/_components/ContactUs/Account';

export default function ContactUsPage() {
  return (
    <main>
      <ContactTitle />
      <AboutUs />
      <ContactUs />
      <Account />
      <Form />
      <Advantages className={s.advantages} />
    </main>
  );
}
