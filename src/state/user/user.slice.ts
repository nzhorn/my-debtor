import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Status, User } from 'models';
import { client } from 'api/client';

interface UserState {
  user: User | null;
  status: Status,
  error: string | null
}

const initialState: UserState = {
  user: null,
  status: Status.Idle,
  error: null
};

export const loadUser = createAsyncThunk(
  'user/load',
  async () => {
    const response = await client.get('/api/current-user')
    return response.user as User
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = Status.Succeeded;
      })
  },
});

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
