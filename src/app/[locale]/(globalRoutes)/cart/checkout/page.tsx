import CartLayout from '@/app/[locale]/(globalRoutes)/cart/_components/CartLayout/CartLayout';
import CheckoutDetails from '@/app/[locale]/(globalRoutes)/cart/checkout/_components/CheckoutDetails/CheckoutDetails';

export default function Checkout() {
  return (
    <CartLayout>
      <CheckoutDetails />
    </CartLayout>
  );
}
