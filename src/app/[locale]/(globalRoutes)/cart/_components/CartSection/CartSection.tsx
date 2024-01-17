'use client';

import s from './cartSection.module.scss';
import H3 from '@/app/_typography/H3/H3';
import Steps from '@/app/[locale]/(globalRoutes)/cart/_components/CartSection/Steps/Steps';
import Coupon from '@/app/[locale]/(globalRoutes)/cart/_components/CartSection/Coupon/Coupon';
import CartSummary from '@/app/[locale]/(globalRoutes)/cart/_components/CartSection/CartSummary/CartSummary';
import ProductTable from '@/app/[locale]/(globalRoutes)/cart/_components/CartSection/ProductTable/ProductTable';
import H4 from '@/app/_typography/H4/H4';
import H6 from '@/app/_typography/H6/H6';
import Button from '@/commonUI/Button/Button';
import CheckoutDetails from '@/app/[locale]/(globalRoutes)/cart/_components/CheckoutDetails/CheckoutDetails';
import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const stepsArray = [
  {
    name: 'Shopping cart',
    url: '/en/cart',
    active: true,
    complete: false,
  },
  {
    name: 'Checkout details',
    url: '/en/cart/checkout',
    active: false,
    complete: false,
  },
  {
    name: 'Order complete',
    url: '/en/cart/thank-you',
    active: false,
    complete: false,
  },
];

const ordersInformation = {
  orderCode: '#0123_45678',
  total: 'October 19, 2023',
  date: '$1,345.00',
  paymentMethod: 'Credit Card',
};

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
  const step = usePathname();
  const router = useRouter();

  function sendOrder(url: string) {
    stepsArray.forEach((item) => {
      if (item.url === step) {
        item.active = false;
        item.complete = true;
      }
      if (item.url === url) {
        item.active = true;
      }
    });
    router.push('/en/cart/checkout');
  }

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
    <section className={s.cartSection}>
      <div className='_container'>
        <div className={s.title}>
          <H3>Cart</H3>
        </div>
        <div className={s.steps}>
          <Steps steps={stepsArray} />
        </div>
        {step === stepsArray[0].url && (
          <div className={s.order}>
            <ProductTable
              tableProducts={products}
              className={s.orderTable}
              increase={productService.increase}
              decrease={productService.decrease}
              remove={productService.removeElement}
              onChangeQuantity={productService.onChangeQuantity}
            />
            <CartSummary
              title='Cart summary'
              subtotal={subTotal}
              sendOrder={() => sendOrder('/en/cart/checkout')}
            />
            <Coupon
              className={s.cartCoupon}
              title='Have a coupon?'
              description='Add your code for an instant cart discount'
            />
          </div>
        )}
        {step === stepsArray[1].url && <CheckoutDetails />}
        {step === stepsArray[2].url && (
          <div className={s.orderComplete}>
            <div className={s.titles}>
              <H6>Thank you! 🎉</H6>
              <H4>Your order has been received</H4>
            </div>
            <div className={s.products}>
              {products.map((product) => (
                <div key={product.id} className={s.product}>
                  <img src={product.imgPath} alt={product.altImg} />
                  <span>{product.quantity}</span>
                </div>
              ))}
            </div>
            <ul className={s.informations}>
              <li className={s.information}>
                <span className={s.informationName}>Order code:</span>
                <p className={s.informationText}>{ordersInformation.orderCode}</p>
              </li>
              <li className={s.information}>
                <span className={s.informationName}>Date:</span>
                <p className={s.informationText}>{ordersInformation.date}</p>
              </li>
              <li className={s.information}>
                <span className={s.informationName}>Total:</span>
                <p className={s.informationText}>{ordersInformation.total}</p>
              </li>
              <li className={s.information}>
                <span className={s.informationName}>Payment method:</span>
                <p className={s.informationText}>{ordersInformation.paymentMethod}</p>
              </li>
            </ul>
            <Button roundedButton className={s.buttonHistory}>
              Purchase history
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
