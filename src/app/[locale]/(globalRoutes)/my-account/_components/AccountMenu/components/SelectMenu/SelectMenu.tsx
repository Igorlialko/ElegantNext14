import s from './selectMenu.module.scss';
import clsx from 'clsx';

interface ISelectMenu {
  className?: string;
}

export default function SelectMenu({ className }: ISelectMenu) {
  return (
    <>
      <ul className={clsx(s.menu, className)}>
        <li className={clsx(s.item, s.active)}>
          <button>Account</button>
        </li>
        <li className={clsx(s.item)}>
          <button>Address</button>
        </li>
        <li className={clsx(s.item)}>
          <button>Orders</button>
        </li>
        <li className={clsx(s.item)}>
          <button>Wishlist</button>
        </li>
        <li className={clsx(s.item)}>
          <button>Log Out</button>
        </li>
      </ul>
    </>
  );
}
