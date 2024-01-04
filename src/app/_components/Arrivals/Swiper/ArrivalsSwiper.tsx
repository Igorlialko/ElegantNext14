'use client';

import { useState } from 'react';
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrivalsSlide from '../Slide/ArrivalsSlide';
import { data } from './data';
import clsx from 'clsx';

import s from './ArrivalsSwiper.module.scss';

function ArrivalsSwiper() {
  const [slides, setSlides] = useState(4);

  // TODO: refactor to breakpoints swiper

  return (
    <div className={clsx(s.swiper, s.swiperScroll, s.swiperSlide)}>
      <Swiper
        // install Swiper modules
        modules={[Scrollbar]}
        // spaceBetween={24}
        slidesPerView={4}
        breakpoints={{
          320: {
            slidesPerView: 1.4,
            spaceBetween: 20,
          },

          487: {
            slidesPerView: 2.3,
            spaceBetween: 30,
          },
          625: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
        // navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data.map(
          (
            product // TODO: add id to key
          ) => (
            <SwiperSlide key={Math.random()}>
              <ArrivalsSlide
                title={product.title}
                urlProduct={product.urlProduct}
                urlImg={product.urlImg}
                statusNew={product.statusNew}
                discount={product.discount}
                isDiscount={product.isDiscount}
                favorite={product.favorite}
                rating={[1, 2, 3, 4, 5]}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
}

export default ArrivalsSwiper;
