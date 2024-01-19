import CartSection from '@/app/[locale]/(globalRoutes)/cart/_components/CartSection/CartSection';
import CartLayout from '@/app/[locale]/(globalRoutes)/cart/_components/CartLayout/CartLayout';

export default function Cart() {
  return (
    <CartLayout>
      <CartSection />
    </CartLayout>
  );
}
