"use client";
import {
  SwitcherContainer,
  ArticlesSwiper,
  CContainer,
  Box,
  styled,
  useAppSelector,
  useAppDispatch,
} from "@/lib/barrel";

import { articleSlidesFetch } from "@/lib/fetch";
import { articleBtn, setArticlesItems} from "@/store/slidersStore";

const MASlidesContainer = styled(Box, {
  name: "MASlidesContainer",
  slot: "root",
})(({}) => ({}));

export default function ArticlesSliderContainer() {
  const dispatch = useAppDispatch();

  const changeHandler = () => {
    dispatch(articleBtn());
  };

  //load services slides
  // let test = useAppSelector((state) => state.sliders.articles.slides);
  // if (test.length === 0) {
  //   const data = articleSlidesFetch();
  //   if (data.slides.length > 0 && Object.keys(data.buttons).length > 0) dispatch(setArticlesItems(data));
  //   else return null;
  // }
  //
  dispatch(setArticlesItems(articleSlidesFetch()));
  const slides = useAppSelector((state) => state.sliders.articles);

  return (
    <MASlidesContainer>
      <CContainer>
        <SwitcherContainer isClick={changeHandler} {...slides.buttons} />
        <ArticlesSwiper {...slides}/>
      </CContainer>
    </MASlidesContainer>
  );
}
