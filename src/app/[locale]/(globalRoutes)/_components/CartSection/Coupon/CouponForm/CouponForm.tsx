import React from 'react';
import CouponInput from '@/commonUI/fields/CouponInput/CouponInput';

export default function CouponForm() {
  return (
    <form action=''>
      <CouponInput placeholder='Coupon Code' buttonSlot={<button type='submit'>Apply</button>} />
    </form>
  );
}
