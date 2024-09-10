"use client";
import { CContainer, ContainerGBtn, FooBar, MainArticlesContainer, MainBannerSwiper, NavBar, ServicesSliderContainer } from "@lib/barrel";

export default function IndexPage() {
  return (
    <>
    <NavBar />
    <CContainer>
      <MainBannerSwiper /> 
      <ContainerGBtn />
    </CContainer>
    <ServicesSliderContainer />
    <MainArticlesContainer />
    <FooBar />
  </>
  );
}
