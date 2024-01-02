'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import s from './mainSlider.module.scss';

import { useRef } from 'react';

import ArrowNext from '@/app/_icons/arrows/mainSlider/ArrowNext';
import ArrowPrev from '@/app/_icons/arrows/mainSlider/ArrowPrev';

import type ISwiper from 'swiper/swiper';

export default function MainSlider() {
  const buttonSlideNext = useRef(null);
  const buttonSlidePrev = useRef(null);

  const images = [
    {
      url: '/images/mainSliderImages/sliderImage.webp',
      alt: 'image1',
    },
    {
      url: '/images/mainSliderImages/sliderImage.webp',
      alt: 'image2',
    },
    {
      url: '/images/mainSliderImages/sliderImage.webp',
      alt: 'image3',
    },
  ];

  return (
    <section className={s.mainSlider}>
      <div className='_container'>
        <Swiper
          modules={[Navigation, Pagination]}
          loop
          pagination={{ clickable: true }}
          onBeforeInit={(swiper: ISwiper) => {
            swiper.params.navigation.nextEl = buttonSlideNext.current;
            swiper.params.navigation.prevEl = buttonSlidePrev.current;
          }}
        >
          {images.map((image) => (
            <SwiperSlide key={image.alt}>
              <img src={image.url} alt={image.alt} />
            </SwiperSlide>
          ))}
          <div className={s.navigation}>
            <button className={s.arrowPrev} ref={buttonSlidePrev}>
              <ArrowNext />
            </button>
            <button className={s.arrowNext} ref={buttonSlideNext}>
              <ArrowPrev />
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
