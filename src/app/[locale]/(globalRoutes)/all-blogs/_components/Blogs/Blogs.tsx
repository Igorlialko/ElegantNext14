'use client';

import s from './blogs.module.scss';
import CategoriesList from '@/commonUI/CategoriesList/CategoriesList';
import Button from '@/commonUI/Button/Button';
import CardBlog from '@/modules/blog/ui/CardBlog/CardBlog';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { views } from '@/app/[locale]/(globalRoutes)/_components/ViewSortSelect/views';
import ViewSortSelect from '@/app/[locale]/(globalRoutes)/_components/ViewSortSelect/ViewSortSelect';

import CircularProgress from '@mui/material/CircularProgress';
import { TBlog } from '@/modules/blog/types';
import { getBlogs } from '@/modules/blog/api/fetchers';
import { dateFormatBlog } from '@/modules/blog/utils/formatter';

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

const Blogs = () => {
  const [view, setView] = useState(views[0]);
  const [activeSort, setActiveSort] = useState('');

  const [blogs, setBlogs] = useState<TBlog[]>([]);
  const [page, setPage] = useState(1);
  const limit = 9;
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const [isNextLoading, setIsNextLoading] = useState(false);

  useEffect(() => {
    getBlogs(page, limit)
      .then((res) => {
        setBlogs(res.data);
      })
      .catch(() => {
        // todo:add snackbar to errors
      })
      .finally(() => {
        setIsFirstLoading(false);
      });
  }, []);

  const showMore = () => {
    setIsNextLoading(true);
    getBlogs(page + 1, limit)
      .then((res) => {
        setPage((prev) => prev + 1);
        setBlogs((prevState) => [...prevState, ...res.data]);
      })
      .catch(() => {
        // todo:add snackbar to errors
      })
      .finally(() => {
        setIsNextLoading(false);
      });
  };

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
        {/*todo: create skeleton*/}
        {isFirstLoading && <CircularProgress />}

        <div
          className={clsx(s.blogsCards, {
            [s.grid2]: view === views[1] || view === views[2],
            [s.gridRow2]: view === views[3],
          })}
        >
          {!!blogs.length &&
            blogs.map((blog) => (
              <CardBlog
                view={view}
                key={blog.id}
                imageURL={blog.image}
                imageAlt={blog.title}
                title={blog.title}
                linkURL={`/all-blogs/${blog.slug}`}
                cardDate={dateFormatBlog(blog.date)}
              />
            ))}
        </div>
        {isNextLoading && (
          <div className={s.blogsButton}>
            <CircularProgress />
          </div>
        )}

        {/*todo: unshow button when totalCount blogs was full*/}
        {!isFirstLoading && !!blogs.length && !isNextLoading && (
          <div className={s.blogsButton}>
            <Button roundedButton onClick={showMore}>
              Show more
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
