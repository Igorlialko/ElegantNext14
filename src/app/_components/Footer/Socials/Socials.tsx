import s from './social.module.scss';
import Instagram from '@/app/_icons/social/Instagram';
import Facebook from '@/app/_icons/social/Facebook';
import Youtube from '@/app/_icons/social/Youtube';

const Socials = () => (
  <ul className={s.social}>
    {[
      {
        icon: <Instagram />,
        id: 1,
        href: 'https://www.instagram.com',
      },
      {
        icon: <Facebook />,
        id: 2,
        href: 'https://www.facebook.com',
      },
      {
        icon: <Youtube />,
        id: 3,
        href: 'https://www.youtube.com',
      },
    ].map(({ icon, id, href }) => (
      <li key={id}>
        <a href={href} target='_blank' rel='noreferrer'>
          {icon}
        </a>
      </li>
    ))}
  </ul>
);

export default Socials;
