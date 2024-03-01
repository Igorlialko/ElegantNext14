import React, { Dispatch, SetStateAction } from 'react';
import s from './formAddress.module.scss';
import TextInputBordered from '@/app/[locale]/(globalRoutes)/my-account/_components/fields/TextInputBordered/TextInputBordered';
import PhoneInputBordered from '@/app/[locale]/(globalRoutes)/my-account/_components/fields/PhoneInputBordered/PhoneInputBordered';
import Button from '@/commonUI/Button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
  nameAddress: string;
  nameUser: string;
  addressUser: string;
  phoneUser: string;
};

interface IFormAddress {
  idUser?: number;
  nameAddress?: string;
  nameUser?: string;
  addressUser?: string;
  phoneUser?: string;
  setIsShowForm: Dispatch<SetStateAction<boolean>>;
}

export default function FormAddress({
  idUser,
  nameAddress,
  nameUser,
  addressUser,
  phoneUser,
  setIsShowForm,
}: IFormAddress) {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmitForm: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    setIsShowForm(false);
  };
  return (
    <form className={s.addressForm} name='Addres form' onSubmit={handleSubmit(onSubmitForm)}>
      <TextInputBordered
        {...register('nameAddress')}
        name='nameAddress'
        placeholder='Address name'
      />
      <TextInputBordered {...register('nameUser')} name='nameUser' placeholder='Your name' />
      <PhoneInputBordered {...register('phoneUser')} name='phoneUser' placeholder='Your phone' />
      <TextInputBordered
        {...register('addressUser')}
        name='addressUser'
        placeholder='Your address'
      />
      <Button className={s.button} typeButton='submit'>
        {idUser ? 'Save changes' : 'Create Address'}
      </Button>
    </form>
  );
}
