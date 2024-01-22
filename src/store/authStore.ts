'use client';

import { createProvider } from 'next-zustand';
import { TUser } from '@/modules/auth/types';
import { deleteCookie, setCookie } from 'cookies-next';

export type TUserData = {
  token?: string;
  user: TUser | null;
};

interface IAuthStore {
  userData: TUserData;
  addUserData: (userData: TUserData) => void;
  isAuthorized: boolean;
  removeUserData: () => void;
}

const initialUserData = {
  token: '',
  user: null,
};

export const { Provider: AuthProvider, useStore: useAuthStore } = createProvider<IAuthStore>()(
  (setState, getState) => ({
    isAuthorized: false,
    userData: initialUserData,
    addUserData(userData) {
      setCookie('userData', userData);
      setState({ userData, isAuthorized: true });
    },
    removeUserData() {
      deleteCookie('userData');
      setState({ userData: initialUserData, isAuthorized: false });
    },
  })
);
