import React from 'react';
import s from './ordersContent.module.scss';
import TableOrders from '@/app/[locale]/(globalRoutes)/my-account/orders/_components/TableOrders/TableOrders';

export default function OrdersContent() {
  return (
    <div className={s.ordersContent}>
      <p className={s.title}>Orders History</p>
      <TableOrders />
    </div>
  );
}
