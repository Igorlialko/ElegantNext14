// import s from '@/app/(globalRoutes)/shop/_components/ShopTitle/shopTitle.module.scss';
// import Link from 'next/link';
// import ChevronRightIcon from '@/app/_icons/arrows/ChevronRightIcon';
//
// const ShopTitle = () => {
//   return (
//     <section>
//       <div className='_container'>
//         <div className={s.shopTitle}>
//           <div className={s.shopImage}>
//             <picture>
//               <source media='(max-width: 799px)' srcSet='/images/shopImage/shopTitle.webp' />
//               <source media='(min-width: 800px)' srcSet='/images/shopImage/ShopImage.webp' />
//               <img
//                 src='/images/shopImage/shopTitle.webp'
//                 alt='ShopImage'
//                 width={100}
//                 height={100}
//               />
//             </picture>
//           </div>
//           <div className={s.shopText}>
//             <div className={s.shopNavigation}>
//               <Link href='/' className={s.shopHome}>
//                 Home
//               </Link>
//               <ChevronRightIcon className={s.shopIcon} />
//               <p className={s.shopPage}>Shop</p>
//             </div>
//             <h1 className={s.shopT}>Shop Page</h1>
//             <h2 className={s.shopP}>Let’s design the place you always imagined.</h2>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default ShopTitle;
import Title from '@/app/(globalRoutes)/_components/Title/Title';

const ShopTitle = () => {
  return (
    <div>
      <Title
        imageSrcB='/images/shopImage/shopTitle.webp'
        imageSrcS='/images/shopImage/ShopImage.webp'
        altText='ShopImage'
        linktext='Shop'
        pageTitle='Shop Page'
        pageSubtitle='Let’s design the place you always imagined.'
      />
    </div>
  );
};

export default ShopTitle;
