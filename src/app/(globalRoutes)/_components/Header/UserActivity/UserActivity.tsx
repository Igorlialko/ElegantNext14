import s from './ua.module.scss';
import ProfileIcon from '@/app/_icons/ProfileIcon';
import clsx from 'clsx';
import { Dispatch, SetStateAction, useState } from 'react';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import LinksAuth from '@/app/(globalRoutes)/_components/Header/UserActivity/LinksAuth';

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

  const basketCount = 2;
  const wishlistCount = 1;

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

          <LinksAuth
            basketCount={basketCount}
            wishlistCount={wishlistCount}
            setIsAuthorized={setIsAuthorized}
          />
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default UserActivity;
