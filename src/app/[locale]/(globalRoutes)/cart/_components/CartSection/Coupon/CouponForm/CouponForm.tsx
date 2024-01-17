import React from 'react';
import CouponInput from '@/commonUI/fields/CouponInput/CouponInput';

export default function CouponForm() {
  return (
    <form>
      <CouponInput placeholder='Coupon Code' buttonSlot={<button type='submit'>Apply</button>} />
    </form>
  );
}
