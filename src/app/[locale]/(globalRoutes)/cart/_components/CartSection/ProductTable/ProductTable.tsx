import s from './productTable.module.scss';
import clsx from 'clsx';
import Quantity from '@/commonUI/Quantity/Quantity';
import React from 'react';
import ButtonRemove from '@/commonUI/ButtonRemove/ButtonRemove';

interface IProductTable {
  className?: string;
  tableProducts: {
    name: string;
    imgPath: string;
    altImg: string;
    color: string;
    quantity: number;
    price: number;
    id: number;
  }[];
  increase: (id: number) => void;
  decrease: (id: number) => void;
  remove: (id: number) => void;
  onChangeQuantity: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
}

export default function ProductTable({
  className,
  tableProducts,
  remove,
  increase,
  decrease,
  onChangeQuantity,
}: IProductTable) {
  return (
    <div className={clsx(s.productTable, className)}>
      <div className={s.tableHead}>
        <div className={s.column}>
          <p>Product</p>
        </div>
        <div className={s.column}>
          <p>Quantity</p>
        </div>
        <div className={s.column}>
          <p>Price</p>
        </div>
        <div className={s.column}>
          <p>Subtotal</p>
        </div>
      </div>
      {tableProducts.map((product) => {
        return (
          <div key={product.id} className={s.productItem}>
            <div className={s.product}>
              <div className={s.productImage}>
                <img src={product.imgPath} alt={product.altImg} />
              </div>
              <div className={s.productInfo}>
                <p>{product.name}</p>
                <span>Color: {product.color}</span>
                <ButtonRemove remove={() => remove(product.id)} />
                <Quantity
                  className={s.productInfoQuantity}
                  quantity={product.quantity}
                  increase={() => increase(product.id)}
                  decrease={() => decrease(product.id)}
                  onChangeQuantity={(e) => onChangeQuantity(e, product.id)}
                />
              </div>
            </div>
            <div className={s.quantity}>
              <Quantity
                quantity={product.quantity}
                increase={() => increase(product.id)}
                decrease={() => decrease(product.id)}
                onChangeQuantity={(e) => onChangeQuantity(e, product.id)}
              />
            </div>
            <div className={s.price}>
              ${product.price}
              <ButtonRemove remove={() => remove(product.id)} />
            </div>
            <div className={s.subtotal}>${product.price * product.quantity}</div>
          </div>
        );
      })}
    </div>
  );
}
