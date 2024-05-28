// import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@shared/lib/store/redux-types';

import { IUserState } from './types';

const initialState: IUserState = {
  name: 'Petr',
  email: 'Petr@ya.ru',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const selectUserName = (state: RootState) => state.userInfo.name;
export const selectUserEmail = (state: RootState) => state.userInfo.email;

export default userSlice.reducer;
