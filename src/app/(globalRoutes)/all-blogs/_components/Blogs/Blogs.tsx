'use client';

import s from './blogs.module.scss';
import CategoriesList from '@/commonUI/CategoriesList/CategoriesList';
import HeaderView from '@/commonUI/headerView/HeaderView';
import Button from '@/commonUI/Button/Button';
import CardBlog from '@/modules/blog/ui/CardBlog/CardBlog';
import React, { useState } from 'react';
import clsx from 'clsx';

const categories = [
  {
    category: 'All Blog',
    id: 0,
  },
  {
    category: 'Featured',
    id: 1,
  },
];

const cardsBlog = [
  {
    imageURL: '/images/blogs/cards/img.webp',
    imageAlt: 'image',
    title: '7 ways to decor your home',
    linkURL: '/',
    date: 'October 16, 2023',
    id: 0,
  },
  {
    imageURL: '/images/blogs/cards/img-1.webp',
    imageAlt: 'image',
    title: 'Inside a beautiful kitchen organization',
    linkURL: '/',
    date: 'October 16, 2023',
    id: 1,
  },
  {
    imageURL: '/images/blogs/cards/img-2.webp',
    imageAlt: 'image',
    title: 'Decor your bedroom for your children',
    linkURL: '/',
    date: 'October 16, 2023',
    id: 2,
  },
  {
    imageURL: '/images/blogs/cards/img-3.webp',
    imageAlt: 'image',
    title: 'Modern texas home is beautiful and completely kid-friendly',
    linkURL: '/',
    date: 'October 16, 2023',
    id: 3,
  },
  {
    imageURL: '/images/blogs/cards/img-4.webp',
    imageAlt: 'image',
    title: 'Modern texas home is beautiful and completely kid-friendly',
    linkURL: '/',
    date: 'October 16, 2023',
    id: 4,
  },
  {
    imageURL: '/images/blogs/cards/img-5.webp',
    imageAlt: 'image',
    title: 'Modern texas home is beautiful and completely kid-friendly',
    linkURL: '/',
    date: 'October 16, 2023',
    id: 5,
  },
  {
    imageURL: '/images/blogs/cards/img-6.webp',
    imageAlt: 'image',
    title: 'Modern texas home is beautiful and completely kid-friendly',
    linkURL: '/',
    date: 'October 16, 2023',
    id: 6,
  },
  {
    imageURL: '/images/blogs/cards/img-7.webp',
    imageAlt: 'image',
    title: 'Modern texas home is beautiful and completely kid-friendly',
    linkURL: '/',
    date: 'October 16, 2023',
    id: 7,
  },
  {
    imageURL: '/images/blogs/cards/img-8.webp',
    imageAlt: 'image',
    title: 'Modern texas home is beautiful and completely kid-friendly',
    linkURL: '/',
    date: 'October 16, 2023',
    id: 8,
  },
];
const Blogs = () => {
  const [view, setView] = useState<string>('all');

  function classView(view: string) {
    if (view === 'all') {
      return undefined;
    }
    if (view === 'card' || view === 'cardDescriptionColumn') {
      return s.grid2;
    }
    if (view === 'cardDescriptionRow') {
      return s.gridRow2;
    }
  }

  function changeView(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const viewCards = e.currentTarget.value;
    setView(viewCards);
  }

  return (
    <section className={s.blogs}>
      <div className='_container'>
        <div className={s.blogsControls}>
          <CategoriesList categories={categories} />
          <HeaderView
            className={s.blogsSort}
            view={view}
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => changeView(e)}
          />
        </div>
        <div className={clsx(s.blogsCards, classView(view))}>
          {cardsBlog.map((card) => {
            return (
              <CardBlog
                view={view}
                key={card.id}
                imageURL={card.imageURL}
                imageAlt={card.imageAlt}
                title={card.title}
                linkURL={card.linkURL}
                cardDate={card.date}
              />
            );
          })}
        </div>
        <div className={s.blogsButton}>
          <Button typeButton='button' roundedButton>
            Show more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
