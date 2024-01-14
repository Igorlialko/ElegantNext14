'use client';

import s from './cartSection.module.scss';
import H3 from '@/app/_typography/H3/H3';
import Steps from '@/app/[locale]/(globalRoutes)/_components/CartSection/Steps/Steps';
import { useEffect, useState } from 'react';
import Coupon from '@/app/[locale]/(globalRoutes)/_components/CartSection/Coupon/Coupon';
import CartSummary from '@/app/[locale]/(globalRoutes)/_components/CartSection/CartSummary/CartSummary';
import ProductTable from '@/app/[locale]/(globalRoutes)/_components/CartSection/ProductTable/ProductTable';
import H4 from '@/app/_typography/H4/H4';
import H6 from '@/app/_typography/H6/H6';
import Button from '@/commonUI/Button/Button';

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
  const [products, setProducts] = useState(tableProducts);
  const [subTotal, setSubTotal] = useState(sumSubTotal);
  const [step, setStep] = useState(whatStep);

  function whatStep() {
    let stepNumber = 0;
    stepsArray.forEach((step) => {
      stepNumber = step.active ? step.number : 1;
    });
    return stepNumber;
  }

  function sumSubTotal() {
    let subTotal = 0;
    products.forEach((item) => {
      subTotal += item.price * item.quantity;
    });
    return subTotal;
  }

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

  useEffect(() => {
    sumSubTotal();
  }, []);

  useEffect(() => {
    setSubTotal(sumSubTotal);
  }, [products]);

  useEffect(() => {
    setProducts(tableProducts);
    setSubTotal(sumSubTotal);
  }, [tableProducts]);

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
        )}
        {step === 2 && (
          <div className={s.orderComplete}>
            <div className={s.titles}>
              <H6>Thank you! 🎉</H6>
              <H4>Your order has been received</H4>
            </div>
            <div className={s.products}>
              {products.map((product) => {
                return (
                  <div key={product.id} className={s.product}>
                    <img src={product.imgPath} alt={product.altImg} />
                    <span>{product.quantity}</span>
                  </div>
                );
              })}
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
