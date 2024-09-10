"use client";
import {
  CContainer,
  SwitcherContainer,
  ServicesSwiper,
  Box,
  styled,
  useAppSelector,
  useAppDispatch,
} from "@/lib/barrel";
import { serviceSlidesFetch } from "@/lib/fetch";
import { setServicesItems, serviceBtn } from "@/store/slidersStore";

const MSSlidesContainer = styled(Box, {
  name: "MSSlidesContainer",
  slot: "root",
})(({}) => ({}));

export default function MainServicesContainer() {
  const dispatch = useAppDispatch();
  
  const changeHandler = () => {
    dispatch(serviceBtn());
  };

  //load services slides
  // if (useAppSelector((state) => state.sliders.services.slides).length === 0){
  //   const data = serviceSlidesFetch();
    
  //   if (data.slides.length > 0 && Object.keys(data.buttons).length > 0) dispatch(setServicesItems(data));
  //   else return null;
  // }
  // //
  dispatch(setServicesItems(serviceSlidesFetch()))
  const slides = useAppSelector((state) => state.sliders.services);


  return (
    <MSSlidesContainer>
      <CContainer>
        <SwitcherContainer isClick={changeHandler} {...slides.buttons} />
        <ServicesSwiper {...slides}/>
      </CContainer>
    </MSSlidesContainer>
  );
}
