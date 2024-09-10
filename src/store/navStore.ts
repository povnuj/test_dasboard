import { FooterInterface, NavigationInterface } from "@/lib/Interfces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavInterface{
  nav: NavigationInterface;
  footer: FooterInterface;
};

const initialState: NavInterface = {
  nav:{
    menu: [
      { name: "Про лабораторію", url: "/pro-laboratoriyu" },
      { name: "Аналізи та послуги", url: "/analizy-ta-poslugy" },
      { name: "Акції", url: "/actions" },
      { name: "Співпраця", url: "/Cooperation" },
      { name: "Контакти", url: "/kontakty" },
    ],
    contacts: {
      location: "Чорновола, 97",
      locationUrl: "https://maps.app.goo.gl/5fSx6WqqnQCRJqVH9",
      phone: "+380 67 200 5457",
    },
    buttons: {
      name: "Кабінет",
      url: "/login",
      color: "",
      img: "/assets/ico/Login.svg",
    },
  },
  footer:{
    about: {
      title: "Про лабораторію",
      list: [
        {
          id: "1c",
          name: "Хто ми?",
          url: "/",
        },
        {
          id: "2c",
          name: "Сертифікати якості",
          url: "/",
        },
        {
          id: "3c",
          name: "Партнери",
          url: "/",
        },
        {
          id: "4c",
          name: "Кар’єра в ДІАМЕБ",
          url: "/",
        },
        {
          id: "5c",
          name: "Програма лояльності",
          url: "/",
        },
      ],
    },
    patient: {
      title: "Пацієнту",
      list: [
        {
          id: "1d",
          name: "Аналізи",
          url: "/",
        },
        {
          id: "2d",
          name: "Послуги",
          url: "/",
        },
        {
          id: "3d",
          name: "Часті запитання/FAQ",
          url: "/",
        },
        {
          id: "4d",
          name: "Підготовка до здачі аналізів",
          url: "/",
        },
        {
          id: "5ds",
          name: "Програма лояльності",
          url: "/",
        },
        {
          id: "6dss",
          name: "Новини",
          url: "/",
        },
        {
          id: "7dss",
          name: "Оцініть нашу роботу",
          url: "/",
        },
      ],
    },
    сooperation: {
      title: "Співпраця",
      list: [
        {
          id: "1dа",
          name: "Партнерська програма",
          url: "/",
        },
        {
          id: "2dі",
          name: "Лікарям",
          url: "/",
        },
        {
          id: "3dі",
          name: "Підприємствам",
          url: "/",
        },
      ],
    },
    contscts: {
      phones: {
        name: "Контакти:",
        tel1: "380732005457",
        tel2: "380732005457",
        tel3: "380732005457",
      },
      social: {
        name: "Стежте за нами:",
        social_list: [
          {
            img: "/assets/ico/Instagram.svg",
            url: "/",
          },
          {
            img: "/assets/ico/Facebook F.svg",
            url: "/",
          },
          {
            img: "/assets/ico/Periscope.svg",
            url: "/",
          },
          {
            img: "/assets/ico/Viber.svg",
            url: "/",
          },
          {
            img: "/assets/ico/Telegram App.svg",
            url: "/",
          },
        ],
      },
    },
  }
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setitems(state, action) {
      //state.list = action.payload;
    },
    getItems(state, action) {
      //action.navItems = state.nav;
    },
  },
});

//export const { actions: action, reducer: yourReducer } = navSlice;
// Описуйте дії
//export const {  } = navSlice.actions.getItems;
export default navSlice.reducer;
