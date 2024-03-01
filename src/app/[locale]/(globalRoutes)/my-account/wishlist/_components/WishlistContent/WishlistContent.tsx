import React from 'react';
import s from './wishlistContent.module.scss';
import TableWishlist from '@/app/[locale]/(globalRoutes)/my-account/wishlist/_components/TableWishlist/TableWishlist';

export default function WishlistContent() {
  return (
    <div className={s.wishlistContent}>
      <p className={s.title}>Your Wishlist</p>
      <TableWishlist />
    </div>
  );
}
