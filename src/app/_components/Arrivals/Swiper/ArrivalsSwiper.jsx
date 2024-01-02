'use client';

import { useState, useEffect } from 'react';

import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ArrivalsSlide from '../Slide/ArrivalsSlide';
import { data } from './data.js';

import './swiper.scss';
import s from './ArrivalsSwiper.module.scss';

function ArrivalsSwiper() {
  const [slides, setSlides] = useState(4);
  // TODO: refactor to breakpoints swiper
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 451) {
        setSlides(1);
      } else if (windowWidth <= 768) {
        setSlides(2);
      } else if (windowWidth <= 840) {
        setSlides(3);
      } else {
        setSlides(4);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return (
    <Swiper
      className={s.swiper}
      // install Swiper modules
      modules={[Scrollbar]}
      spaceBetween={24}
      slidesPerView={slides}
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
              favorite={product.favorite}
              rating={product.rating}
            />
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
}

export default ArrivalsSwiper;
