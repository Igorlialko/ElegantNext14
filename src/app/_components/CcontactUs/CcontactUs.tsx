import s from '@/app/_components/CcontactUs/ccontactUs.module.scss';
import StoreIcon from '@/app/_icons/StoreIcon';
import CallingIcon from '@/app/_icons/CallingIcon';
import MailIcon from '@/app/_icons/MailIcon';

const contactMas = [
  {
    icon: <StoreIcon />,
    title: 'Address',
    text: '234 Hai Trieu, Ho Chi Minh City, Viet Nam',
  },
  {
    icon: <CallingIcon />,
    title: 'Contact Us',
    text: '+84 234 567 890',
  },
  {
    icon: <MailIcon />,
    title: 'Email',
    text: 'hello@3legant.com',
  },
];
const CcontactUs = () => {
  return (
    <section className={s.contactUs}>
      <div className='_container'>
        <h2 className={s.contactTitle}>Contact Us</h2>
        <div className={s.contactInformation}>
          {contactMas.map((cont) => (
            <div key={cont.title} className={s.contactNumber}>
              <div className={s.contactIcons}>{cont.icon}</div>
              <div className={s.contTitle}>{cont.title}</div>
              <div className={s.contactText}>{cont.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CcontactUs;
