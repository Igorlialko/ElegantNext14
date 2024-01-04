import s from './ua.module.scss';
import ProfileIcon from '@/app/_icons/ProfileIcon';
import BasketIcon from '@/app/_icons/BasketIcon';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import WishListIcon from '@/app/_icons/WishListIcon';
import LogoutIcon from '@mui/icons-material/Logout';
import { Dispatch, SetStateAction, useState } from 'react';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

const UserActivity = ({
  setIsAuthorized,
}: {
  setIsAuthorized: Dispatch<SetStateAction<boolean>>;
}) => {
  const user = {
    avatar: '/images/avatar_placeholder.webp',
    firstName: 'Sofia',
    lastName: 'Harvetz',
  };
  const pathname = usePathname();

  const basketCount = 2;
  const wishlistCount = 1;

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
        console.log('sldfknvidf');
        setIsAuthorized(false);
        //===== log out
      },
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div className={s.userActivity}>
        <button
          type='button'
          onClick={handleOpen}
          className={clsx(s.iconProfile, {
            [s.activeCount]: basketCount || wishlistCount,
          })}
        >
          <ProfileIcon />
        </button>

        <div
          className={clsx(s.modal, {
            [s.isOpen]: isOpen,
          })}
        >
          <div className={s.profile}>
            <img
              src={user.avatar}
              alt={user.firstName + user.lastName}
              width={48}
              height={48}
              className={s.avatar}
            />
            <div className={s.name}>{`${user.firstName} ${user.lastName}`}</div>
          </div>

          {userLinks.map(({ href, title, count, icon, onClick, isDisableActive }) => (
            <Link
              key={href}
              href={href}
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
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default UserActivity;
