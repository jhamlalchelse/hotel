import { configureStore } from '@reduxjs/toolkit'
import hotelReducer from './reducers/formReducer'

export const store = configureStore({
  reducer: {
    hotel: hotelReducer,
  },
})