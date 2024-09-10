//material ui
export { Box, Button, Menu, MenuItem, Container, Typography, styled } from "@mui/material";

//color palette
export { Colors } from "@/theme/colors";

//redux hooks
export {useAppSelector, useAppDispatch } from '@/store/hooks'

//components 
export {default as MainBannerSwiper} from "@/components/Swiper/banners/MainBannerSwiper";
//containers components
export {default as CContainer} from "@/components/Conatiners/CContainer";
//navigation components
export {default as NavMenu} from "@/components/Nav/NavMenu";
export {default as BrandSection} from "@/components/Nav/BrandSection";
export {default as NavSearch} from "@/components/Nav/NavSearch";
export {default as NavMobileMenu} from "@/components/Nav/NavMobileMenu";
export {default as NavButton} from "@/components/Nav/NavButton";
export {default as NavBar} from "@/components/Nav/NavBar";
export {default as FooBar} from "@/components/Footer/FooBar";




//buttons components
export {default as PhoneButton} from "@/components/Buttons/PhoneButton";
export {default as ButtonStartImg} from "@/components/Buttons/ButtonStartImg";
export {default as CartButton} from "@/components/Buttons/CartButton";
export {default as ContainerGBtn} from "@/components/Conatiners/GBtnContainer";
export {default as SwitcherContainer} from "@/components/Buttons/Switchers/SwitcherContainer";
export {default as TransperedGreenButton} from "@/components/Buttons/TransperedGreenButton";
//sliders components
export {default as ServicesSliderContainer} from "@/components/Swiper/services/ServicesSliderContainer";
export {default as ServicesSwiper} from "@/components/Swiper/services/ServicesSwiper";
export {default as ServicesSlide} from '@/components/Swiper/services/ServicesSlide';
export {default as ServicesSlidePromotion} from '@/components/Swiper/services/ServicesSlidePromotion';
export {default as PriceButtonBlack} from "@/components/Buttons/PriceButtonBlack";
export {default as PriceButtonGreen} from "@/components/Buttons/PriceButtonGreen";
export {default as ArticlesSliderContainer} from "@/components/Swiper/articles/ArticlesSliderContainer";
export {default as ArticlesSwiper} from "@/components/Swiper/articles/ArticlesSwiper";
export {default as ASlide} from '@/components/Swiper/articles/ASlide';
export {default as MainArticlesContainer} from '@/components/Swiper/articles/ArticlesSliderContainer';




//swiper
export { Swiper, SwiperSlide } from 'swiper/react';