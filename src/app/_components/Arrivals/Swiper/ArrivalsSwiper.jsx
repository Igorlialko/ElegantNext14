'use client';

import { useState, useEffect } from 'react';

import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ArrivalsSlide from '../Slide/ArrivalsSlide';
import { data } from './data.js';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

import './swiper.scss';
import s from './ArrivalsSwiper.module.scss';

function ArrivalsSwiper() {
  const [slides, setSlides] = useState(4);

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
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
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
      {data.map((product) => (
        <SwiperSlide key={Math.random()}>
          <ArrivalsSlide
            key={Math.random()}
            title={product.title}
            urlProduct={product.urlProduct}
            urlImg={product.urlImg}
            statusNew={product.statusNew}
            discount={product.discount}
            favorite={product.favorite}
            rating={product.rating}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ArrivalsSwiper;
