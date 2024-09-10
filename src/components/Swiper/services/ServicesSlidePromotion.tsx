'use client'

import {
  PriceButtonGreen,
  Box,
  Typography,
  styled,
  Colors,
  useAppSelector,
} from "@/lib/barrel";
import { SSlideContentInterface } from "@/lib/Interfces";
import Image from 'next/image'


const MSSliderPromotion = styled(Box,{
    name: 'MSSliderPromotion',
    slot: 'root',
})(({}) => ({
    
}));



export default function ServicesSlidePromotion(props: SSlideContentInterface) {
  const buttons = useAppSelector((state) => state.mainPage!.greenButtons)

  return (
    <MSSliderPromotion key={props.id}>
      <Image style={{position: 'absolute', right: '0', top: '0'}} src={'/assets/ico/promotion.svg'} width={135} height={138} alt='promotion logo'/>
      <div className="header">
        <div className="container">
          <Typography variant="servicesSliderText1">{props.type}</Typography>
        </div>
        <Typography variant="servicesSliderText1">{props.code}</Typography>
      </div>

      <Typography variant='title1' marginTop={'39px'}>{props.title}</Typography>
      <Typography variant='servicesSliderText2' marginTop={'2px'}>{props.description}</Typography>

      <div className={'s_btn_cont'}>
        <Typography  className={'s_btn_due_date'} variant="servicesSliderText1">{`Термін виконання: `}<span>{props.dueDate}</span><br/>+забір біоматеріалу</Typography>
        <PriceButtonGreen {...props} />
      </div>
    </MSSliderPromotion>
  );
}