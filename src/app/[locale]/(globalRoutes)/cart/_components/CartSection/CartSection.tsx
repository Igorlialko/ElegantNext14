'use client';

import s from './cartSection.module.scss';
import Coupon from '@/app/[locale]/(globalRoutes)/cart/_components/CartSection/Coupon/Coupon';
import CartSummary from '@/app/[locale]/(globalRoutes)/cart/_components/CartSection/CartSummary/CartSummary';
import ProductTable from '@/app/[locale]/(globalRoutes)/cart/_components/CartSection/ProductTable/ProductTable';

import React, { useState } from 'react';
import { tableProducts } from '../../mockData';

export default function CartSection() {
  const [products, setProducts] = useState(tableProducts);
  const subTotal = products.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const productService = {
    increase(id: number) {
      setProducts(
        products.map((item) => {
          if (item.id === id) {
            item.quantity++;
          }
          return item;
        })
      );
    },
    decrease(id: number) {
      setProducts(
        products.map((product) => {
          if (product.id === id) {
            if (product.quantity > 1) {
              product.quantity--;
            }
          }
          return product;
        })
      );
    },
    removeElement(id: number) {
      setProducts(products.filter((product) => product.id !== id));
    },
    onChangeQuantity(e: React.ChangeEvent<HTMLInputElement>, id: number) {
      //todo: event to input
      const value = parseFloat(e.target.value);
      setProducts(
        products.map((product) => {
          if (product.id === id) {
            if (value) {
              product.quantity = value;
              if (value > 100) {
                product.quantity = 100;
              }
            } else product.quantity = 1;
          }
          return product;
        })
      );
    },
  };

  return (
    <div className={s.order}>
      <ProductTable
        tableProducts={products}
        className={s.orderTable}
        increase={productService.increase}
        decrease={productService.decrease}
        remove={productService.removeElement}
        onChangeQuantity={productService.onChangeQuantity}
      />
      <CartSummary subtotal={subTotal} />
      <Coupon
        className={s.cartCoupon}
        title='Have a coupon?'
        description='Add your code for an instant cart discount'
      />
    </div>
  );
}
