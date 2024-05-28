import { userReducer } from '@entities/user/';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    userInfo: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
