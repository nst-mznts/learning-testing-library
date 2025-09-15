import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUserData } from '../utils/fetchUserData';

export const loadUser = createAsyncThunk('user/loadUser', async (userId: number) => {
  const data = await fetchUserData(userId);
  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: { user: null, status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadUser.pending, (state) => { state.status = 'loading'; })
      .addCase(loadUser.fulfilled, (state, action) => { state.status = 'succeeded'; state.user = action.payload; })
      .addCase(loadUser.rejected, (state) => { state.status = 'failed'; });
  },
});

export default userSlice.reducer;
