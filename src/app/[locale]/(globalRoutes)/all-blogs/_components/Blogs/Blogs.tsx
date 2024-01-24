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
import SkeletBlogCard from '@/app/[locale]/(globalRoutes)/all-blogs/_components/SkeletBlogCard/SkeletBlogCard';

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
  const [totalCards, setTotalCards] = useState(0);
  const [counterTotalCards, setCounterTotalCards] = useState(0);

  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const [isNextLoading, setIsNextLoading] = useState(false);
  const isShowMore = !(counterTotalCards === totalCards && totalCards !== 0);

  useEffect(() => {
    getBlogs(page, limit)
      .then((res) => {
        setBlogs(res.data.results);
        setTotalCards(res.data.total);
        res.data.results.forEach(() => {
          setCounterTotalCards((prev) => prev + 1);
        });
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
        res.data.results.forEach(() => {
          setCounterTotalCards((prev) => prev + 1);
        });
        setPage((prev) => prev + 1);
        setBlogs((prevState) => [...prevState, ...res.data.results]);
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

        <div
          className={clsx(s.blogsCards, {
            [s.grid2]: view === views[1] || view === views[2],
            [s.gridRow2]: view === views[3],
          })}
        >
          {isFirstLoading &&
            Array.from({ length: limit }, (item, index) => {
              return <SkeletBlogCard key={index} />;
            })}
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
        {!isFirstLoading && !!blogs.length && !isNextLoading && isShowMore && (
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
