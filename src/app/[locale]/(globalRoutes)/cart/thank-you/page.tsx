import CartLayout from '@/app/[locale]/(globalRoutes)/cart/_components/CartLayout/CartLayout';
import ThankYou from '@/app/[locale]/(globalRoutes)/cart/thank-you/_components/ThankYou/ThankYou';

export default function Checkout() {
  return (
    <CartLayout>
      <ThankYou />
    </CartLayout>
  );
}
