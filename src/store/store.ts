
import { configureStore } from '@reduxjs/toolkit'
import navReducer  from './navStore';
import mainPageReducer from './mainPageStore'
import slidersReducer from './slidersStore'

export const makeStore = () => {
  return configureStore({
    reducer: {
        navigation: navReducer,
        mainPage: mainPageReducer,
        sliders: slidersReducer
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

