import React, { useState } from 'react';
import s from './tableWishlist.module.scss';
import { wishlistProducts } from '../../mockData';
import Button from '@/commonUI/Button/Button';
import ButtonRemove from '@/commonUI/ButtonRemove/ButtonRemove';

export default function TableWishlist() {
  const [products, setProducts] = useState(wishlistProducts);

  function remove(id: number) {
    setProducts(products.filter((product) => product.id !== id));
  }

  return (
    <table className={s.tableWishlist}>
      <thead className={s.head}>
        <tr className={s.row}>
          <th>Product</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className={s.body}>
        {products.map((product) => {
          return (
            <tr key={product.id} className={s.row}>
              <td>
                <div className={s.product}>
                  <ButtonRemove className={s.removeButton} remove={() => remove(product.id)} />
                  <div className={s.productImage}>
                    <img src={product.imgPath} alt={product.altImg} />
                  </div>
                  <div className={s.productInfo}>
                    <p className={s.productName}>{product.name}</p>
                    <span>Color: {product.color}</span>
                    <p className={s.productPrice}>${product.price}</p>
                  </div>
                </div>
              </td>
              <td>${product.price}</td>
              <td>
                <Button className={s.button}>Add to cart</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
