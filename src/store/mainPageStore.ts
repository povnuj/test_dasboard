import { GSQButtonsInterface } from '@/lib/Interfces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: GSQButtonsInterface  = {
    // delay: 100,
    // slides:[
    //   {id: "ssdzz1", name: 'Slide_1', img: '/assets/baners/apysu.png', url: '/conatcts'},
    //   {id: "ssdzz2", name: 'Slide_2', img: '/assets/baners/apysu.png', url: '/conatcts'},
    //   {id: "ssdzz3", name: 'Slide_3', img: '/assets/baners/apysu.png', url: '/conatcts'}
    // ],
    greenButtons: [
        {id: 'gsssw1', name: "Отримати результати", url: '/', img: '/assets/ico/results.svg'},
        {id: 'gsssw2', name: "Програма лояльності", url: '/', img: '/assets/ico/loyalty_card.svg'},
        {id: 'gsssw3', name: "Акції", url: '/actions', img: '/assets/ico/promotion_greenBtn.svg'},
        {id: 'gsssw4', name: "Виїзд на дім", url: '/', img: '/assets/ico/call_GB.svg'},
        {id: 'gsssw5', name: "Аналізи дітям", url: '/', img: '/assets/ico/child_GB.svg'},
    ]
};

const  mainPageSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {

    // setitems(state, action) {
    //   //state.list = action.payload;
    // },
    // getItems(state, action) {
    //   //action.navItems = state.nav;
    // },
  },
});

export const {} = mainPageSlice.actions;
// Описуйте дії
//export const {  } = navSlice.actions.getItems;
export default mainPageSlice.reducer;