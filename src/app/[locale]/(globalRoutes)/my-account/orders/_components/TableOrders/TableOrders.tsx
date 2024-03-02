import React from 'react';
import s from './tableOrders.module.scss';

const dataOrders = [
  {
    idOrder: 3456_768,
    date: 'October 17, 2023',
    status: 'Delivered',
    price: '$1234.00',
  },
  {
    idOrder: 3456_980,
    date: 'October 17, 2023',
    status: 'Delivered',
    price: '$1234.00',
  },
  {
    idOrder: 3456_120,
    date: 'October 17, 2023',
    status: 'Delivered',
    price: '$1234.00',
  },
  {
    idOrder: 3456_030,
    date: 'October 17, 2023',
    status: 'Delivered',
    price: '$1234.00',
  },
];

export default function TableOrders() {
  return (
    <>
      <div className={s.tableOrders}>
        <table className={s.table}>
          <thead className={s.head}>
            <tr className={s.row}>
              <th>Number ID</th>
              <th>Dates</th>
              <th>Status</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody className={s.body}>
            {dataOrders.map((order) => {
              return (
                <tr className={s.row} key={order.idOrder}>
                  <td>#{order.idOrder}</td>
                  <td>{order.date}</td>
                  <td>{order.status}</td>
                  <td>{order.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={s.listsOrders}>
        {dataOrders.map((order) => {
          return (
            <ul className={s.list} key={order.date}>
              <li className={s.item}>
                <span>Number ID</span>#{order.idOrder}
              </li>
              <li className={s.item}>
                <span>Dates</span>
                {order.date}
              </li>
              <li className={s.item}>
                <span>Status</span>
                {order.status}
              </li>
              <li className={s.item}>
                <span>Price</span>
                {order.price}
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
}
