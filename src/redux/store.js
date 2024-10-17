import { configureStore } from '@reduxjs/toolkit'

import { ermcApi } from '../services/ermcApi'
import authReducer from '../services/authSlice';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [ermcApi.reducerPath]: ermcApi.reducer,
    auth: authReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ermcApi.middleware),
})
