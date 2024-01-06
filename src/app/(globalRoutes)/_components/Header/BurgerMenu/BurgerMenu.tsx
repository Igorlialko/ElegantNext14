import s from './burgerMenu.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { pageLinks } from '@/utils/routes';
import CloseIcon from '@/app/_icons/header/CloseIcon';
import { usePathname } from 'next/navigation';
import Button from '@/commonUI/Button/Button';
import LinksAuth from '@/app/(globalRoutes)/_components/Header/UserActivity/LinksAuth';
import TextInput from '@/commonUI/fields/TextInput/TextInput';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen((prev) => {
      if (prev) {
        document.body.classList.remove('overflow');
      } else {
        document.body.classList.add('overflow');
      }
      return !prev;
    });
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove('overflow');
    };
  }, []);
  const pathname = usePathname();
  const [isAuthorized, setIsAuthorized] = useState(true);

  const basketCount = 2;
  const wishlistCount = 1;

  return (
    <div className={s.burgerMenu}>
      <Link href='/' className={s.logo}>
        <span>3legant</span>
        <span>.</span>
      </Link>
      <button
        type='button'
        className={clsx(s.menuButton, {
          [s.isOpen]: isOpen,
          [s.activeCount]: basketCount || wishlistCount,
        })}
        onClick={handleOpen}
      >
        <span />
        <span />
        <span />
      </button>
      <div className={clsx(s.menu, isOpen && s.active)}>
        <div className={s.header}>
          <Link href='/' className={s.logo} onClick={handleOpen}>
            <span>3legant</span>
            <span>.</span>
          </Link>
          <button type='button' className={s.close} onClick={handleOpen}>
            <CloseIcon />
          </button>
        </div>
        {isAuthorized && <TextInput placeholder={'Search'} className={s.search} />}
        <ul className={s.links}>
          {pageLinks.map((link) => {
            return (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className={clsx(s.link, pathname === link.href && s.active)}
                  onClick={handleOpen}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
        {isAuthorized ? (
          <div onClick={handleOpen}>
            <LinksAuth
              setIsAuthorized={setIsAuthorized}
              wishlistCount={wishlistCount}
              basketCount={basketCount}
            />
          </div>
        ) : (
          <div className={s.buttons}>
            <Button className={s.button}>Sign In</Button>
            <Button className={s.button}>Sign Up</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BurgerMenu;
