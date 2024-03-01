import React from 'react';
import s from './cardAddress.module.scss';
import EditIcon from '@/app/_icons/EditIcon';

interface ICardAddress {
  nameAddress: string;
  nameUser: string;
  phoneUser: string;
  addressUser: string;
  addressId: number;
  onClick: (id: number) => void;
}

export default function CardAddress({
  nameAddress,
  nameUser,
  phoneUser,
  addressUser,
  addressId,
  onClick,
}: ICardAddress) {
  return (
    <div className={s.cardAddress}>
      <p className={s.addressName}>{nameAddress}</p>
      <button
        className={s.buttonEdit}
        type='button'
        onClick={() => {
          onClick(addressId);
        }}
      >
        <EditIcon />
        Edit
      </button>
      <ul className={s.addressList}>
        <li className={s.info}>{nameUser}</li>
        <li className={s.info}>{phoneUser}</li>
        <li className={s.info}>{addressUser}</li>
      </ul>
    </div>
  );
}
