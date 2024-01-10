import s from './coupon.module.scss';
import H7 from '@/app/_typography/H7/H7';
import CouponForm from '@/app/[locale]/(globalRoutes)/_components/CartSection/Coupon/CouponForm/CouponForm';
import clsx from 'clsx';

interface Icoupon {
  title: string;
  description: string;
  className?: string;
}

export default function Coupon({ title, description, className }: Icoupon) {
  return (
    <div className={clsx(s.coupon, className)}>
      <H7>{title}</H7>
      <p className={s.couponDescription}>{description}</p>
      <CouponForm />
    </div>
  );
}
