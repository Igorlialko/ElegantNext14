import React, { Dispatch, SetStateAction } from 'react';
import s from './formAddress.module.scss';
import TextInputBordered from '@/app/[locale]/(globalRoutes)/my-account/_components/fields/TextInputBordered/TextInputBordered';
import PhoneInputBordered from '@/app/[locale]/(globalRoutes)/my-account/_components/fields/PhoneInputBordered/PhoneInputBordered';
import Button from '@/commonUI/Button/Button';
import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form';
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onChange' });
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
  const handleError = (errors: FieldErrors) => console.log(errors);

  const formOptions = {
    nameAddress: {
      required: 'Address name is required',
      minLength: {
        value: 2,
        message: 'Address name must have at least 2 characters',
      },
      maxLength: {
        value: 20,
        message: 'Address name must contain less than 20 characters',
      },
      pattern: {
        value: /^[A-Za-z]{1,20}$/,
        message: 'Address name must not have numbers or special characters',
      },
    },
    nameUser: {
      required: 'User name is required',
      minLength: {
        value: 2,
        message: 'User name must have at least 2 characters',
      },
      maxLength: {
        value: 10,
        message: 'User name must contain less than 15 characters',
      },
      pattern: {
        value: /^[A-Za-z]{1,10}$/,
        message: 'User name must not have numbers or special characters',
      },
    },
    phoneUser: {
      required: 'User name is required',
    },
    addressUser: {
      required: 'User name is required',
      minLength: {
        value: 2,
        message: 'User name must have at least 2 characters',
      },
      maxLength: {
        value: 100,
        message: 'User name must contain less than 15 characters',
      },
      pattern: {
        value: /^[A-Za-z]{1,100}$/,
        message: 'User name must not have numbers or special characters',
      },
    },
  };

  return (
    <form className={s.addressForm} name='Addres form' onSubmit={handleSubmit(onSubmitForm)}>
      <TextInputBordered
        {...register('nameAddress', formOptions.nameAddress)}
        name='nameAddress'
        placeholder='Address name'
        value={nameAddress}
        required
        error={errors.nameAddress?.message}
      />
      <TextInputBordered
        {...register('nameUser', formOptions.nameUser)}
        name='nameUser'
        placeholder='Your name'
        value={nameUser}
        required
        error={errors.nameUser?.message}
      />
      <PhoneInputBordered
        {...register('phoneUser', formOptions.phoneUser)}
        name='phoneUser'
        placeholder='Your phone'
        value={phoneUser}
        required
        error={errors.phoneUser?.message}
      />
      <TextInputBordered
        {...register('addressUser', formOptions.addressUser)}
        name='addressUser'
        placeholder='Your address'
        value={addressUser}
        required
        error={errors.addressUser?.message}
      />
      <Button className={s.button} typeButton='submit'>
        {id ? 'Save changes' : 'Create Address'}
      </Button>
    </form>
  );
}
