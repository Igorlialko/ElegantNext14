'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import s from './mainSlider.module.scss';

import { useRef } from 'react';

import ArrowNext from '@/app/_icons/arrows/mainSlider/ArrowNext';
import ArrowPrev from '@/app/_icons/arrows/mainSlider/ArrowPrev';

export default function MainSlider() {
  const buttonSlideNext = useRef(null);
  const buttonSlidePrev = useRef(null);
  return (
    <section className={s.mainSlider}>
      <div className='_container'>
        <Swiper
          modules={[Navigation, Pagination]}
          loop
          navigation={{ nextEl: buttonSlideNext.current, prevEl: buttonSlidePrev.current }}
          pagination={{ clickable: true }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.nextEl = buttonSlideNext.current;
            swiper.params.navigation.prevEl = buttonSlidePrev.current;
          }}
        >
          <SwiperSlide>
            <img src='/images/mainSliderImages/sliderImage.webp' alt='iamge' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/images/mainSliderImages/sliderImage.webp' alt='iamge' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/images/mainSliderImages/sliderImage.webp' alt='iamge' />
          </SwiperSlide>
          <div className={s.mainSlider__navigation}>
            <button className={s.mainSlider__navigation_arrowNext} ref={buttonSlideNext}>
              <ArrowNext />
            </button>
            <button className={s.mainSlider__navigation_arrowPrev} ref={buttonSlidePrev}>
              <ArrowPrev />
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
