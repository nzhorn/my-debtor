import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Status, User } from 'models';
import axios from 'axios';

interface UserState {
  user: User | null;
  status: Status;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  status: Status.Idle,
  error: null,
};

export const loadUser = createAsyncThunk('user/load', async () => {
  const response = await axios.get<{ user: User }>('/api/current-user');
  return response.data.user as User;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = Status.Succeeded;
    });
  },
});

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
