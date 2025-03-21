import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL =  `${import.meta.env.VITE_APP_URL}/api/auth`;

// Helper for auth header
const getAuthHeader = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
    withCredentials: true,
  },
});

// ✅ Async thunk for inviting a user
export const inviteUser = createAsyncThunk(
  'invite/inviteUser',
  async ({ email, organizationId, role }, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const token = state.auth.token; // Getting the auth token from auth slice

      const response = await axios.post(
        `${API_URL}/invite/`,
        { email, organizationId, role },
        getAuthHeader(token)
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { error: 'Something went wrong' });
    }
  }
);

const inviteSlice = createSlice({
  name: 'invite',
  initialState: {
    loading: false,
    successMessage: null,
    error: null,
  },
  reducers: {
    clearInviteState: (state) => {
      state.loading = false;
      state.successMessage = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(inviteUser.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
        state.error = null;
      })
      .addCase(inviteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(inviteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Something went wrong';
      });
  },
});

export const { clearInviteState } = inviteSlice.actions;
export default inviteSlice.reducer;
