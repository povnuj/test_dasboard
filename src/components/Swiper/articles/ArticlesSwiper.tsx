'use client'
import {
  ASlide,
  Box,
  useAppSelector,
  Swiper, 
  SwiperSlide,
} from "@/lib/barrel";

import  { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import css from './ArticlesSwiper.module.css'
import 'swiper/css/free-mode';
import Image from 'next/image';
import { useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import { ASlideInterface } from "@/lib/Interfces";


export default function ArticlesSwiper(props: ASlideInterface){
  const swiperRef = useRef<any | null>(null);
  const theme = useTheme();
  const isNew = props.buttons.btn1?.active;
  const allSlides = props.slides;
  const newSlides = props.slides.filter(slide => slide.isNew);
  const slides =  isNew ? allSlides : newSlides;   

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  
  const breakpoints = {
    100: {
      slidesPerView: 1,
      spaceBetween: 5
    },
    [theme.breakpoints.values.xs]: {
      slidesPerView: 1,
      spaceBetween: 5
    },
    500: {
      slidesPerView: 1.1,
      spaceBetween: 20
    },
    740: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    [theme.breakpoints.values.sm]: {
      slidesPerView: 1.7,
      spaceBetween: 26
    },
    [theme.breakpoints.values.md]: {
      slidesPerView: 2.5,
      spaceBetween: 26
    },
    [theme.breakpoints.values.lg]: {
      slidesPerView: 3.5,
      spaceBetween: 26
    },
    [theme.breakpoints.values.xl]: {
      slidesPerView: 4,
      spaceBetween: 10
    }
  }

  return (
    <Box position={'relative'} >
      <Swiper
        className={css.main_articles_swiper}
        // centeredSlides={true}
        slidesPerView={4}
        spaceBetween={10}
        ref={swiperRef}
        loop={true}
        observer={true}
        navigation={{
          nextEl: '.articles_swiper-button-next',
          prevEl: '.articles_swiper-button-prev'
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={breakpoints}
        >
        
        { slides.map(slide => 
          <SwiperSlide  className={css.slide} key={slide.id}>
            <ASlide {...slide} />
          </SwiperSlide>
        )} 
        </Swiper>

        <div className={css["articles_swiper-button-prev"]} onClick={handlePrev}>
          <Image src='/assets/ico/left_arrow.svg' alt="arrow" width={27} height={23} />  
        </div>
        <div className={css["articles_swiper-button-next"]} onClick={handleNext}>
          <Image src='/assets/ico/right_arrow.svg' alt="arrow" width={27} height={23} />
        </div>
    </Box>
  );
};