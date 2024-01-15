'use client';

import s from './cartSection.module.scss';
import H3 from '@/app/_typography/H3/H3';
import Steps from '@/app/[locale]/(globalRoutes)/cart/_components/CartSection/Steps/Steps';
import { useState } from 'react';
import Coupon from '@/app/[locale]/(globalRoutes)/cart/_components/CartSection/Coupon/Coupon';
import CartSummary from '@/app/[locale]/(globalRoutes)/cart/_components/CartSection/CartSummary/CartSummary';
import ProductTable from '@/app/[locale]/(globalRoutes)/cart/_components/CartSection/ProductTable/ProductTable';
import H4 from '@/app/_typography/H4/H4';
import H6 from '@/app/_typography/H6/H6';
import Button from '@/commonUI/Button/Button';

//todo: create steps for url pathname. example: http://localhost:3000/en/cart/thank-you
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
  //todo:update to pathname
  const [step, setStep] = useState(whatStep);

  function whatStep() {
    let stepNumber = 0;
    stepsArray.forEach((step) => {
      stepNumber = step.active ? step.number : 1;
    });
    return stepNumber;
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
      const newArray = products.map((product) => {
        if (product.id === id) {
          if (product.quantity > 1) {
            product.quantity--;
          }
        }
        return product;
      });
      setProducts(newArray);
    },
    removeElement(id: number) {
      setProducts(products.filter((product) => product.id !== id));
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
        {step === 1 && (
          <div className={s.order}>
            <ProductTable
              tableProducts={products}
              className={s.orderTable}
              increase={productService.increase}
              decrease={productService.decrease}
              remove={productService.removeElement}
            />
            <CartSummary title='Cart summary' subtotal={subTotal} />
            <Coupon
              className={s.cartCoupon}
              title='Have a coupon?'
              description='Add your code for an instant cart discount'
            />
          </div>
        )}
        {step === 2 && (
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
                <p className={s.informationText}>#0123_45678</p>
              </li>
              <li className={s.information}>
                <span className={s.informationName}>Date:</span>
                <p className={s.informationText}>October 19, 2023</p>
              </li>
              <li className={s.information}>
                <span className={s.informationName}>Total:</span>
                <p className={s.informationText}>$1,345.00</p>
              </li>
              <li className={s.information}>
                <span className={s.informationName}>Payment method:</span>
                <p className={s.informationText}>Credit Card</p>
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
