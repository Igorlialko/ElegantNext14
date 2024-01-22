import s from './ua.module.scss';
import ProfileIcon from '@/app/_icons/ProfileIcon';
import clsx from 'clsx';
import { useState } from 'react';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import LinksAuth from '@/app/[locale]/(globalRoutes)/_components/Header/UserActivity/LinksAuth';
import { useAuthStore } from '@/store/authStore';

const userPlaceholder = '/images/avatar_placeholder.webp';

const UserActivity = () => {
  const user = useAuthStore((state) => state.userData.user);

  const basketCount = 2;
  const wishlistCount = 1;

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  const userName =
    user?.lastName && user.firstName ? `${user.firstName} ${user.lastName}` : user?.email;

  return (
    user && (
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
                src={user.image || userPlaceholder}
                alt={userName}
                width={48}
                height={48}
                className={s.avatar}
              />
              <div className={s.name}>{userName}</div>
            </div>

            <LinksAuth basketCount={basketCount} wishlistCount={wishlistCount} />
          </div>
        </div>
      </ClickAwayListener>
    )
  );
};

export default UserActivity;
