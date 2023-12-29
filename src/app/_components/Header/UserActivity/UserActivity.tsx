import s from './ua.module.scss';
import ProfileIcon from '@/app/_icons/ProfileIcon';
import BasketIcon from '@/app/_icons/BasketIcon';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import WishListIcon from '@/app/_icons/WishListIcon';

const userLinks = [
  {
    title: 'Cart',
    href: '/cart',
  },
  {
    title: 'Wishlist',
    href: '/wishlist',
  },
];

const UserActivity = () => {
  const pathname = usePathname();
  return (
    <div className={s.userActivity}>
      <button type='button'>
        <ProfileIcon />
      </button>
      <div className={s.modal}>
        <Link
          href={userLinks[0].href}
          className={clsx(s.link, pathname === userLinks[0].href && s.active)}
        >
          <p>{userLinks[0].title}</p>
          <div className={s.basket}>
            <div className={s.basketCount}>2</div>
            <BasketIcon />
          </div>
        </Link>
        <Link
          href={userLinks[1].href}
          className={clsx(s.link, pathname === userLinks[1].href && s.active)}
        >
          <p>{userLinks[1].title}</p>
          <div className={s.basket}>
            <div className={s.basketCount}>2</div>
            <WishListIcon />
          </div>
        </Link>
      </div>
    </div>
  );
};
export default UserActivity;
