import React, { Dispatch, SetStateAction } from 'react';
import s from './formAddress.module.scss';
import TextInputBordered from '@/app/[locale]/(globalRoutes)/my-account/_components/fields/TextInputBordered/TextInputBordered';
import PhoneInputBordered from '@/app/[locale]/(globalRoutes)/my-account/_components/fields/PhoneInputBordered/PhoneInputBordered';
import Button from '@/commonUI/Button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { dataAddress } from '../../mockData';

type FormValues = {
  nameAddress: string;
  nameUser: string;
  addressUser: string;
  phoneUser: string;
};

interface IFormAddress {
  id?: number;
  nameAddress?: string;
  nameUser?: string;
  addressUser?: string;
  phoneUser?: string;
  setIsShowForm: Dispatch<SetStateAction<boolean>>;
}

export default function FormAddress({
  id,
  nameAddress,
  nameUser,
  addressUser,
  phoneUser,
  setIsShowForm,
}: IFormAddress) {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmitForm: SubmitHandler<FormValues> = (data) => {
    if (id) {
      dataAddress.forEach((address) => {
        if (address.id === id) {
          address.addressUser = data.addressUser;
          address.nameUser = data.nameUser;
          address.phoneUser = data.phoneUser;
          address.nameAddress = data.nameAddress;
        }
        setIsShowForm(false);
      });
    } else {
      const date = Date.now();
      const newAddress = { ...data, id: date.valueOf() };
      setIsShowForm(false);
      dataAddress.push(newAddress);
    }
  };
  return (
    <form className={s.addressForm} name='Addres form' onSubmit={handleSubmit(onSubmitForm)}>
      <TextInputBordered
        {...register('nameAddress')}
        name='nameAddress'
        placeholder='Address name'
        value={nameAddress}
      />
      <TextInputBordered
        {...register('nameUser')}
        name='nameUser'
        placeholder='Your name'
        value={nameUser}
      />
      <PhoneInputBordered
        {...register('phoneUser')}
        name='phoneUser'
        placeholder='Your phone'
        value={phoneUser}
      />
      <TextInputBordered
        {...register('addressUser')}
        name='addressUser'
        placeholder='Your address'
        value={addressUser}
      />
      <Button className={s.button} typeButton='submit'>
        {id ? 'Save changes' : 'Create Address'}
      </Button>
    </form>
  );
}
