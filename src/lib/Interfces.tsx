import { Breakpoint } from "@mui/material";
import { MainButtonTypes } from "./Types";


export interface FooterInterface{
  about:{
    title: string;
    list: {
      id: string;
      name: string;
      url: string;
    }[];
  };
  patient:{
    title: string;
    list: {
      id: string;
      name: string;
      url: string;
    }[];
  };
  сooperation:{
    title: string;
    list: {
      id: string;
      name: string;
      url: string;
    }[];
  };
  contscts:{
    phones: {
      name: string;
      tel1: string;
      tel2: string;
      tel3: string;
    };
    social: {
      name: string;
      social_list: {
          img: string; 
          url: string;
        }[];
    };
  };  
};

export interface NavigationInterface {
  menu?:{
    name: string;
    url: string;
  }[];
  contacts?:{
    location: string;
    locationUrl: string; 
    phone: string;
  };
  buttons?:{
    name: string;
    url: string; 
    color: string;
    img: string;
  };
};

export interface ASlideContentInterface {
    id: string;
    img: string;
    title: string;
    description: string;
    isNew: boolean;
    url: string;
};

export interface SSlideContentInterface {
    id: string;
    type: string;
    code: string;
    title: string;
    description: string;
    price: number;
    oldPrice: number;
    promotion: boolean;
    dueDate: string;
    url: string;
};


export interface SwitcherInterface{
  btn1?: {name: string; active: boolean};
  btn2?: {name: string; active: boolean};
  isClick?(): void;
}


export interface ASlideInterface{
  buttons: SwitcherInterface;
  slides: ASlideContentInterface[];
};

export interface SSlideInterface{
  buttons: SwitcherInterface;
  slides: SSlideContentInterface[];
};

export interface BSlideContentInterface {
  id: string;
  name: string;
  img: string;
  url: string;
};

export interface BSlideInterface{
  delay?: number;
  slides: BSlideContentInterface[],
};

export interface GSQButtonsInterface{
  greenButtons: {
    id: string;
    name: string;
    img: string;
    url: string;
  }[];
};

export interface UiStateInterface {
    breakpoints: Breakpoint,
    mainPage: {
      bannerSection: {
        slides:{
          name: string
          img: string,
          url: string
        }[],
        greenButtons: {
          name: string,
          img: string,
          url: string
        }[]
      },

    },
    setState?: (type: string, newState: any ) => void;
};

export interface ActionInterface {
    type: string;
    newState: any;
};


export interface PropsProviderInterface {
    children: React.ReactNode;
};