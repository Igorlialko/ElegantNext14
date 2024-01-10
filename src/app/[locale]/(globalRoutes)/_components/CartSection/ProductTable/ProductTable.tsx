import s from './productTable.module.scss';
import clsx from 'clsx';

interface IProductTable {
  className?: string;
}

export default function ProductTable({ className }: IProductTable) {
  return <div className={clsx(s.productTable, className)} />;
}
