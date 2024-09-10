import {
  ASlideInterface,
  BSlideInterface,
  SSlideInterface,
} from "@/lib/Interfces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SlidersStoreInterface {
  baners: BSlideInterface;
  services: SSlideInterface;
  articles: ASlideInterface;
}

const initialState: SlidersStoreInterface = {
  baners: {
    delay: 4500,
    slides:[
      {id: "ssdzz1", name: 'Slide_1', img: '/assets/baners/apysu.png', url: '/conatcts'},
      {id: "ssdzz2", name: 'Slide_2', img: '/assets/baners/apysu.png', url: '/conatcts'},
      {id: "ssdzz3", name: 'Slide_3', img: '/assets/baners/apysu.png', url: '/conatcts'}
    ],
  },
  services: {
    slides: [
      {
        id:'1a',
        type: 'Пакетне дослідженя',
        code: 'Код дослідження №964',
        title: 'Краса та здоров\'я волосся',
        description: '(Загальний аналіз крові (автоматизований з повною ручною лейкоформулою + ШОЕ); Тиреотропний гормон (ТТГ); Трийодтиронін вільний (Т3В); Тироксин вільний (Т4В); 25-ОН вітамін D загальний; Тестостеронзагальний (ТеЗ); Феритин; Цинк)',
        price: 1697,
        oldPrice: 1897,
        promotion: true,
        dueDate: 'сьогодні',
        url: '/'
      },
      {
        id:'2a',
        type: 'Пакетне дослідженя',
        code: 'Код дослідження №964',
        title: 'Краса та здоров\'я волосся23',
        description: '(Загальний аналіз крові (автоматизований з повною ручною лейкоформулою + ШОЕ); Тиреотропний гормон (ТТГ); Трийодтиронін вільний (Т3В); Тироксин вільний (Т4В); 25-ОН вітамін D загальний; Тестостеронзагальний (ТеЗ); Феритин; Цинк)',
        price: 1697,
        oldPrice: 1894,
        promotion: false,
        dueDate: 'сьогодні',
        url: '/'
      },
      {
        id:'3a',
        type: 'Пакетне дослідженя',
        code: 'Код дослідження №964',
        title: 'Краса та здоров\'я волосся Краса та здоров\'я волосся4',
        description: '(Загальний аналіз крові Загальний аналіз крові Загальний аналіз крові (автоматизований з повною ручною лейкоформулою + ШОЕ); Тиреотропний гормон (ТТГ); Трийодтиронін вільний (Т3В); Тироксин вільний (Т4В); 25-ОН вітамін D загальний; Тестостеронзагальний (ТеЗ); Феритин; Цинк)',
        price: 1697,
        oldPrice: 1894,
        promotion: false,
        dueDate: 'сьогодні',
        url: '/'
      },
      {
        id:'4a',
        type: 'Пакетне дослідженя',
        code: 'Код дослідження №964',
        title: 'Краса та здоров\'я волосся2',
        description: '(Загальний аналіз крові (автоматизований з повною ручною лейкоформулою + ШОЕ); Тиреотропний гормон (ТТГ); Трийодтиронін вільний (Т3В); Тироксин вільний (Т4В); 25-ОН вітамін D загальний; Тестостеронзагальний (ТеЗ); Феритин; Цинк)',
        price: 1697,
        oldPrice: 1894,
        promotion: false,
        dueDate: 'сьогодні',
        url: '/'
      },
      {
        id:'5a',
        type: 'Пакетне дослідженя',
        code: 'Код дослідження №964',
        title: 'Краса та здоров\'я волосся1',
        description: '(Загальний аналіз крові (автоматизований з повною ручною лейкоформулою + ШОЕ); Тиреотропний гормон (ТТГ); Трийодтиронін вільний (Т3В); Тироксин вільний (Т4В); 25-ОН вітамін D загальний; Тестостеронзагальний (ТеЗ); Феритин; Цинк)',
        price: 1697,
        oldPrice: 1897,
        promotion: true,
        dueDate: 'сьогодні',
        url: '/'
      },
      {
        id:'6a',
        type: 'Пакетне дослідженя',
        code: 'Код дослідження №964',
        title: 'Краса та здоров\'я волосся3',
        description: '(Загальний аналіз крові (автоматизований з повною ручною лейкоформулою + ШОЕ); Тиреотропний гормон (ТТГ); Трийодтиронін вільний (Т3В); Тироксин вільний (Т4В); 25-ОН вітамін D загальний; Тестостеронзагальний (ТеЗ); Феритин; Цинк)',
        price: 1697,
        oldPrice: 1894,
        promotion: true,
        dueDate: 'сьогодні',
        url: '/'
      },
      {
        id:'7a',
        type: 'Пакетне дослідженя',
        code: 'Код дослідження №964',
        title: 'Краса та здоров\'я волосся Краса та здоров\'я волосся ',
        description: '(Загальний аналіз крові Загальний аналіз крові Загальний аналіз крові (автоматизований з повною ручною лейкоформулою + ШОЕ); Тиреотропний гормон (ТТГ); Трийодтиронін вільний (Т3В); Тироксин вільний (Т4В); 25-ОН вітамін D загальний; Тестостеронзагальний (ТеЗ); Феритин; Цинк)',
        price: 1697,
        oldPrice: 1894,
        promotion: true,
        dueDate: 'сьогодні',
        url: '/'
      },
   ],
    buttons: {
      btn1: {name: 'Популярні', active: true},
      btn2: {name: 'Акції', active: false},
    },
  },
  articles: {
    buttons: {
      btn1: {name: 'Новини', active: true},
      btn2: {name: 'Нові', active: false},
    },
    slides: [
      {
       id: '1b',
       img: '/assets/news/news_pic1.png',
       isNew: false,
       url: '/',
       title: 'ЩО ТАКЕ ЗАГАЛЬНОКЛІНІЧНІ ДОСЛІДЖЕННЯ?',
       description: 'Загальноклінічні дослідження в сучасній медицині не лише використовуються для діагностики, але й є ключовим елементом стратегії збереження та поліпшення здоров\'я. Їх важливість особливо проявляється напередодні або ранньому діагностуванні захворювань і проведенні профілактичних заходів.',
      },
      {
       id: '2b',
       img: '/assets/news/news_pic1.png',
       isNew: false,
       url: '/',
       title: 'ВІДХИЛЕННЯ РЕФЕРЕНТНИХ ЗНАЧЕНЬ ТТГ. ПРО ЩО СИГНАЛІЗУЄ?',
       description: 'Не дарма щитоподібну залозу називають щитом людського організму (в перекладі з давньогрецької сама його назва означає «щит» – thyreos): вона контролює діяльність практично всіх органів і систем за допомогою вироблених нею йодовмісних гормонів.',
      },
      {
       id: '3b',
       img: '/assets/news/news_pic1.png',
       isNew: false,
       url: '/',
       title: 'РОТАВІРУС. ЩО ЦЕ ТАКЕ І ЯК ПРОЯВЛЯЄТЬСЯ?',
       description: 'Погода нас тішить, тому відпочинок на річці у самому розпалі. Особливо це приносити радість дітям, які можуть насолоджуватися купанням. Але водночас кількість випадків інфікування ротавірусною інфекцією зростає. Ротавірус або ротавірусна інфекція – це інфекційне захворювання, що вражає слизові оболонки ротоглотки й тонкого кишківника.',
      },
      {
       id: '4b',
       img: '/assets/news/news_pic1.png',
       isNew: true,
       url: '/',
       title: 'РОТАВІРУС. ЩО ЦЕ ТАКЕ І ЯК ПРОЯВЛЯЄТЬСЯ?',
       description: 'Погода нас тішить, тому відпочинок на річці у самому розпалі. Особливо це приносити радість дітям, які можуть насолоджуватися купанням. Але водночас кількість випадків інфікування ротавірусною інфекцією зростає. Ротавірус або ротавірусна інфекція – це інфекційне захворювання, що вражає слизові оболонки ротоглотки й тонкого кишківника.',
      },
      {
       id: '3bw',
       img: '/assets/news/news_pic1.png',
       isNew: false,
       url: '/',
       title: 'РОТАВІРУС. ЩО ЦЕ ТАКЕ І ЯК ПРОЯВЛЯЄТЬСЯ?',
       description: 'Погода нас тішить, тому відпочинок на річці у самому розпалі. Особливо це приносити радість дітям, які можуть насолоджуватися купанням. Але водночас кількість випадків інфікування ротавірусною інфекцією зростає. Ротавірус або ротавірусна інфекція – це інфекційне захворювання, що вражає слизові оболонки ротоглотки й тонкого кишківника.',
      },
      {
       id: '4bw',
       img: '/assets/news/news_pic1.png',
       isNew: true,
       url: '/',
       title: 'РОТАВІРУС. ЩО ЦЕ ТАКЕ І ЯК ПРОЯВЛЯЄТЬСЯ?',
       description: 'Погода нас тішить, тому відпочинок на річці у самому розпалі. Особливо це приносити радість дітям, які можуть насолоджуватися купанням. Але водночас кількість випадків інфікування ротавірусною інфекцією зростає. Ротавірус або ротавірусна інфекція – це інфекційне захворювання, що вражає слизові оболонки ротоглотки й тонкого кишківника.',
      },
    ],
  },
};

const slidersSlice = createSlice({
  name: "sliders",
  initialState,
  reducers: {
    setBanersItems(state, action: PayloadAction<BSlideInterface>) {
      state.baners.slides = action.payload.slides;
      state.baners.delay = action.payload.delay;
    },
    setServicesItems(state, action: PayloadAction<SSlideInterface>) {
      state.services.slides = action.payload.slides;
      state.services.buttons = action.payload.buttons;
    },
    serviceBtn: (state) => {
      state.services.buttons.btn1!.active = !state.services.buttons.btn1!.active;
      state.services.buttons.btn2!.active = !state.services.buttons.btn2!.active;
    },
    setArticlesItems(state, action: PayloadAction<ASlideInterface>) {
      state.articles.slides = action.payload.slides;
      state.articles.buttons = action.payload.buttons;
    },
    articleBtn: (state) => {
      state.articles.buttons.btn1!.active = !state.articles.buttons.btn1!.active;
      state.articles.buttons.btn2!.active = !state.articles.buttons.btn2!.active;
    },
  },
});

export const {
  setBanersItems,
  setServicesItems,
  setArticlesItems,
  serviceBtn,
  articleBtn,
} = slidersSlice.actions;
export default slidersSlice.reducer;
