"use client";
import {
  ServicesSlide,
  ServicesSlidePromotion,
  Box,
  Swiper,
  SwiperSlide,
} from "@/lib/barrel";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import css from "./ServicesSwiper.module.css";
import "swiper/css/free-mode";
import Image from "next/image";
import { useRef } from "react";
import { useTheme } from "@mui/material/styles";
import { SSlideInterface } from "@/lib/Interfces";

export default function ServicesSwiper(props: SSlideInterface) {
  const swiperRef = useRef<any | null>(null);
  const theme = useTheme();
  const isPopular = props.buttons.btn1?.active;
  const allSlides = props.slides;
  const promotoionSlides = props.slides.filter((slide) => slide.promotion);
  const slides = isPopular ? allSlides : promotoionSlides;

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
      spaceBetween: 5,
    },
    [theme.breakpoints.values.xs]: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    500: {
      slidesPerView: 1.1,
      spaceBetween: 20,
    },
    740: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    [theme.breakpoints.values.sm]: {
      slidesPerView: 1.5,
      spaceBetween: 26,
    },
    [theme.breakpoints.values.md]: {
      slidesPerView: 2,
      spaceBetween: 26,
    },
    [theme.breakpoints.values.lg]: {
      slidesPerView: 2.5,
      spaceBetween: 26,
    },
    [theme.breakpoints.values.xl]: {
      slidesPerView: 3,
      spaceBetween: 26,
    },
  };

  return (
    <Box position={"relative"}>
      <Swiper
        className={css.main_services_swiper}
        spaceBetween={26}
        slidesPerView={3}
        // centeredSlides={true}
        ref={swiperRef}
        loop={true}
        observer={true}
        navigation={{
          nextEl: ".services_swiper-button-next",
          prevEl: ".services_swiper-button-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={breakpoints}
      >
        {slides.map((slide) => (
          <SwiperSlide className={css.slide} key={slide.id}>
            {slide.promotion ? (
              <ServicesSlidePromotion {...slide} />
            ) : (
              <ServicesSlide {...slide} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={css["services_swiper-button-prev"]} onClick={handlePrev}>
        <Image
          src="/assets/ico/left_arrow.svg"
          alt="arrow"
          width={27}
          height={23}
        />
      </div>
      <div className={css["services_swiper-button-next"]} onClick={handleNext}>
        <Image
          src="/assets/ico/right_arrow.svg"
          alt="arrow"
          width={27}
          height={23}
        />
      </div>
    </Box>
  );
}
