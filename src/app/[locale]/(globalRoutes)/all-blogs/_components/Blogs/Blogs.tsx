'use client';

import s from './blogs.module.scss';
import CategoriesList from '@/commonUI/CategoriesList/CategoriesList';
import Button from '@/commonUI/Button/Button';
import CardBlog from '@/modules/blog/ui/CardBlog/CardBlog';
import React, { useState } from 'react';
import clsx from 'clsx';
import { views } from '@/app/[locale]/(globalRoutes)/_components/ViewSortSelect/views';
import ViewSortSelect from '@/app/[locale]/(globalRoutes)/_components/ViewSortSelect/ViewSortSelect';

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
  const [view, setView] = useState(views[0]);
  const [activeSort, setActiveSort] = useState('');

  return (
    <section className={s.blogs}>
      <div className='_container'>
        <div className={s.blogsControls}>
          <CategoriesList categories={categories} />
          <ViewSortSelect
            setActiveView={setView}
            activeView={view}
            activeSort={activeSort}
            setActiveSort={setActiveSort}
          />
        </div>
        <div
          className={clsx(s.blogsCards, {
            [s.grid2]: view === views[1] || view === views[2],
            [s.gridRow2]: view === views[3],
          })}
        >
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
          <Button roundedButton>Show more</Button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
