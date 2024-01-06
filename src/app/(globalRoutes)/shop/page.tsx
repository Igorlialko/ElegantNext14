import ShopMain from '@/app/(globalRoutes)/shop/_components/ShopMain/ShopMain';

import Title from '@/app/(globalRoutes)/_components/Title/Title';

export default function Shop() {
  return (
    <main>
      <Title
        srcBig='/images/shopImage/shopTitle.webp'
        srcSmall='/images/shopImage/ShopImage.webp'
        altText='ShopImage'
        linkText='Shop'
        pageTitle='Shop Page'
        pageSubtitle='Let’s design the place you always imagined.'
      />
      <ShopMain />
    </main>
  );
}
