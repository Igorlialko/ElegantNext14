import { AxiosResponse } from 'axios';
import { axiosInstance } from '@/api';
import { TUser } from '@/modules/auth/types';

export const authRegistration = async (data: {
  email: string;
  password: string;
}): Promise<
  AxiosResponse<{
    token: string;
    user: TUser;
  }>
> => await axiosInstance.post(`/auth/registration`, data);

export const authLogin = async (data: {
  email: string;
  password: string;
}): Promise<
  AxiosResponse<{
    token: string;
    user: TUser;
  }>
> => await axiosInstance.post(`/auth/login`, data);
