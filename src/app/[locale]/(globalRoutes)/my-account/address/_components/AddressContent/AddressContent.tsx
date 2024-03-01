import React, { useState } from 'react';
import s from './addressContent.module.scss';
import CardAddress from '@/app/[locale]/(globalRoutes)/my-account/address/_components/CardAddress/CardAddress';
import FormAddress from '@/app/[locale]/(globalRoutes)/my-account/address/_components/FormAddress/FormAddress';
import CreateAddressButton from '@/app/[locale]/(globalRoutes)/my-account/address/_components/CreateAddressButton/CreateAddressButton';

const dataAddress = [
  {
    name: 'Billing Address',
    nameUser: 'Sofia Havertz',
    phoneUser: '(+1) 234 567 890',
    addressUser: '345 Long Island, NewYork, United States',
    id: 1,
  },
  {
    name: 'Shipping Address',
    nameUser: 'Sofia Havertz',
    phoneUser: '(+1) 234 567 890',
    addressUser: '345 Long Island, NewYork, United States',
    id: 2,
  },
];

export default function AddressContent() {
  const [isShowForm, setIsShowForm] = useState(false);
  const [idUser, setIdUser] = useState(NaN);

  return (
    <div className={s.address}>
      <p className={s.title}>Address</p>
      {!isShowForm && (
        <div className={s.groupAddress}>
          {dataAddress.length > 0 &&
            dataAddress.map((address) => {
              return (
                <CardAddress
                  key={address.id}
                  nameAddress={address.name}
                  nameUser={address.nameUser}
                  addressUser={address.addressUser}
                  phoneUser={address.phoneUser}
                  addressId={address.id}
                  onClick={(id) => {
                    setIsShowForm((prev) => !prev);
                    setIdUser(id);
                  }}
                />
              );
            })}
          <CreateAddressButton
            className={s.addressButton}
            onClick={() => setIsShowForm((prev) => !prev)}
          />
        </div>
      )}
      {isShowForm && <FormAddress setIsShowForm={setIsShowForm} />}
    </div>
  );
}
