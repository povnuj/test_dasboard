'use client'
import {
  PriceButtonBlack,
  Box,
  Typography,
  styled,
  useAppSelector,
} from "@/lib/barrel";
import { SSlideContentInterface } from "@/lib/Interfces";

const MSSlide = styled(Box,{
    name: 'MSSlide',
    slot: 'root',
})(({}) => ({
    
}));

interface ContainerSSliderProps {
  container: {
      type: string;
      code: string;
      title: string;
      description: string;
      dueDate: string;
      price: number;
      url: string;
  }
}

export default function ServicesSlide(props: SSlideContentInterface) {
  const buttons = useAppSelector((state) => state.mainPage!.greenButtons)

  return (
    <MSSlide key={props.id}>
      <div className="header">
        <div className="container">
          <Typography variant="servicesSliderText1">{props.type}</Typography>
        </div>
        <Typography variant="servicesSliderText1">{props.code}</Typography>
      </div>

      <Typography variant='title1' marginTop={'17px'}>{props.title}</Typography>
      <Typography variant='servicesSliderText2' marginTop={'2px'}>{props.description}</Typography>

      <div className={'s_btn_cont'}>
        <Typography className={'s_btn_due_date'} variant="servicesSliderText1">{`Термін виконання: `}<span>{props.dueDate}</span><br/>+забір біоматеріалу</Typography>
        <PriceButtonBlack buttonProps = {{ price: props.price, url: props.url}}/>
      </div>
    </MSSlide>
  );
}