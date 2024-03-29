import React from 'react';
import { usePathname, Link } from '@/navigation';
import BasketIcon from '@/app/_icons/BasketIcon';
import WishListIcon from '@/app/_icons/WishListIcon';
import LogoutIcon from '@mui/icons-material/Logout';
import clsx from 'clsx';
import s from '@/app/[locale]/(globalRoutes)/_components/Header/UserActivity/ua.module.scss';
import { useAuthStore } from '@/store/authStore';

const LinksAuth = ({
  basketCount,
  wishlistCount,
}: {
  basketCount: number;
  wishlistCount: number;
}) => {
  const removeUserData = useAuthStore((state) => state.removeUserData);
  const pathname = usePathname();

  const userLinks = [
    {
      title: 'Cart',
      href: '/cart',
      count: basketCount,
      icon: <BasketIcon />,
    },
    {
      title: 'Wishlist',
      href: '/wishlist',
      count: wishlistCount,
      icon: <WishListIcon />,
    },
    {
      isDisableActive: true,
      title: 'Log out',
      href: '/',
      icon: <LogoutIcon sx={{ color: '#141718' }} />,
      onClick: () => {
        //todo: post request to logout
        removeUserData();
        //===== log out
      },
    },
  ];
  return (
    <>
      {userLinks.map(({ href, title, count, icon, onClick, isDisableActive }) => (
        <Link
          key={href}
          href={href as any}
          className={clsx(s.link, !isDisableActive && pathname === href && s.active)}
          onClick={onClick}
        >
          <p>{title}</p>
          <div className={s.basket}>
            {!!count && <div className={s.basketCount}>{count}</div>}
            {icon}
          </div>
        </Link>
      ))}
    </>
  );
};

export default LinksAuth;
