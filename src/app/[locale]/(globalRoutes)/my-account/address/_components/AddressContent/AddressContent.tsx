import React, { useState } from 'react';
import s from './addressContent.module.scss';
import CardAddress from '@/app/[locale]/(globalRoutes)/my-account/address/_components/CardAddress/CardAddress';
import FormAddress from '@/app/[locale]/(globalRoutes)/my-account/address/_components/FormAddress/FormAddress';
import CreateAddressButton from '@/app/[locale]/(globalRoutes)/my-account/address/_components/CreateAddressButton/CreateAddressButton';
import { dataAddress } from '../../mockData';

export default function AddressContent() {
  const [isShowForm, setIsShowForm] = useState(false);
  const [user, setUser] = useState({});

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
                  nameAddress={address.nameAddress}
                  nameUser={address.nameUser}
                  addressUser={address.addressUser}
                  phoneUser={address.phoneUser}
                  onClick={() => {
                    setIsShowForm((prev) => !prev);
                    setUser(address);
                  }}
                />
              );
            })}
          <CreateAddressButton
            className={s.addressButton}
            onClick={() => {
              setIsShowForm((prev) => !prev);
              setUser({});
            }}
          />
        </div>
      )}
      {isShowForm && <FormAddress {...user} setIsShowForm={setIsShowForm} />}
    </div>
  );
}
