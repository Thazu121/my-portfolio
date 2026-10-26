import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../redux/features/themeSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
})