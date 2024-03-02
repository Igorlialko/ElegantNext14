'use client';

import { useEffect, useState } from 'react';
import s from './account.module.scss';

export interface IGetUsers {
  success: boolean;
  total_pages: number;
  total_users: number;
  count: number;
  page: number;
  links: ILinks;
  users: IUser[];
}

export interface ILinks {
  next_url: string;
  prev_url: any;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  position: string;
  position_id: number;
  registration_timestamp: number;
  photo: string;
}

const Account = () => {
  const [users, setUsers] = useState<IUser[]>();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=10'
      );
      const usersData = (await response.json()) as IGetUsers;
      setUsers(usersData.users);
    })();
  }, []);

  return (
    <div>
      {users?.map((user) => {
        return (
          <div key={user.id} className={s.card}>
            <img src={user.photo} alt={user.name} />
            <div className={s.info}>
              <p>{user.name}</p>
              <p>{user.phone}</p>
              <p>{user.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Account;
