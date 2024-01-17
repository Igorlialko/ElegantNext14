'use client';

import s from '@/app/[locale]/(globalRoutes)/contact-us/_components/Button/button.module.scss';
import React, { useState } from 'react';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

import Link from 'next/link';

const ButtonPlace = () => {
  const [open, setOpen] = useState(false);
  const clickFalse = () => {
    setOpen(false);
  };
  const clickOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div>
      <ClickAwayListener onClickAway={clickFalse}>
        <div className={s.country}>
          <button className={s.button} type='button' onClick={clickOpen}>
            <img
              width='24'
              height='24'
              src='https://img.icons8.com/fluency/24/ukraine-circular.png'
              alt='ukraine-circular'
            />
          </button>
          {open ? (
            <div className={s.countryContainer}>
              <Link href='/' className={s.s}>
                <img
                  width='34'
                  height='34'
                  src='https://img.icons8.com/fluency/34/ukraine-circular.png'
                  alt='ukraine-circular'
                />
              </Link>
              <Link href='/' className={s.s}>
                <img
                  width='34'
                  height='34'
                  src='https://img.icons8.com/fluency/34/usa-circular.png'
                  alt='usa-circular'
                />
              </Link>
              <Link href='/' className={s.s}>
                <img
                  width='34'
                  height='34'
                  src='https://img.icons8.com/fluency/34/france-circular.png'
                  alt='france-circular'
                />
              </Link>
            </div>
          ) : null}
        </div>
      </ClickAwayListener>
    </div>
  );
};
export default ButtonPlace;
