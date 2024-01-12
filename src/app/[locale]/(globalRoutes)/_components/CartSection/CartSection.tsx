'use client';

import s from './cartSection.module.scss';
import H3 from '@/app/_typography/H3/H3';
import Steps from '@/app/[locale]/(globalRoutes)/_components/CartSection/Steps/Steps';
import { useEffect, useState } from 'react';
import Coupon from '@/app/[locale]/(globalRoutes)/_components/CartSection/Coupon/Coupon';
import CartSummary from '@/app/[locale]/(globalRoutes)/_components/CartSection/CartSummary/CartSummary';
import ProductTable from '@/app/[locale]/(globalRoutes)/_components/CartSection/ProductTable/ProductTable';

const stepsArray = [
  {
    name: 'Shopping cart',
    number: 1,
    active: true,
  },
  {
    name: 'Order complete',
    number: 2,
    active: false,
  },
];
const tableProducts = [
  {
    name: 'Tray Table',
    imgPath: '/images/product/image-0.webp',
    altImg: 'img',
    color: 'Black',
    quantity: 2,
    price: 19.0,
    id: 1,
  },
  {
    name: 'Tray Table',
    imgPath: '/images/product/image-1.webp',
    altImg: 'img',
    color: 'Red',
    quantity: 2,
    price: 19.0,
    id: 2,
  },
  {
    name: 'Table lamp',
    imgPath: '/images/product/image-2.webp',
    altImg: 'img',
    color: 'Gold',
    quantity: 2,
    price: 39.0,
    id: 3,
  },
];
export default function CartSection() {
  const [steps, setSteps] = useState(stepsArray);
  const [subTotal, setSubTotal] = useState(0);
  const [products, setProducts] = useState(tableProducts);

  function sumSubTotal() {
    let subTotal = 0;
    tableProducts.forEach((item) => {
      subTotal += item.price * item.quantity;
    });
    setSubTotal(subTotal);
  }

  useEffect(() => {
    sumSubTotal();
  }, []);
  useEffect(() => {
    sumSubTotal();
  }, [products]);

  function Increase(id: number) {
    const newArray = products.map((item) => {
      if (item.id === id) {
        item.quantity++;
      }
      return item;
    });
    setProducts(newArray);
  }

  function Decrease(id: number) {
    const newArray = products.map((product) => {
      if (product.id === id) {
        if (product.quantity > 1) {
          product.quantity--;
        }
      }
      return product;
    });
    setProducts(newArray);
  }

  function removeElement(id: number) {
    setProducts(
      products.filter((product) => {
        return product.id !== id;
      })
    );
  }

  return (
    <section className={s.cartSection}>
      <div className='_container'>
        <div className={s.cartSectionTitle}>
          <H3>Cart</H3>
        </div>
        <div className={s.cartSectionSteps}>
          <Steps steps={steps} />
        </div>
        <div className={s.cartSectionOrder}>
          <ProductTable
            tableProducts={products}
            className={s.cartSectionOrderTable}
            increase={(id) => Increase(id)}
            decrease={(id) => {
              Decrease(id);
            }}
            remove={(id) => {
              removeElement(id);
            }}
          />
          <CartSummary title='Cart summary' subtotal={subTotal} />
          <Coupon
            className={s.cartCoupon}
            title='Have a coupon?'
            description='Add your code for an instant cart discount'
          />
        </div>
      </div>
    </section>
  );
}
