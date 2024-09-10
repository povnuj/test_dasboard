'use client'
import {
  TransperedGreenButton,
  Box,
  Typography,
  styled,
} from "@/lib/barrel";
import { ASlideContentInterface } from "@/lib/Interfces";
import Image from 'next/image';

const MASlide = styled(Box,{
    name: 'MASlide',
    slot: 'root',
})(({}) => ({
    
}));

export default function ASlide(props: ASlideContentInterface) {

  return (
    <MASlide key={props.id}>
      <Image className="primary_img" src={props.img} alt="Article img" width={380} height={242} />
      <Typography className="title" variant='h3'>{props.title}</Typography>
      <Typography className="description" variant='servicesSliderText2'>{props.description}</Typography>
      <TransperedGreenButton buttonProps={{name: 'детальніше'}} />
    </MASlide>
  );
}