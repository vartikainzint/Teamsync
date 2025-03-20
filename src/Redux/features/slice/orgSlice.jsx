import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/dev/api';

const getAuthHeader = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
    withCredentials: true,
  },
});

// Async thunk to fetch organizations with auth
export const fetchOrganizations = createAsyncThunk(
  'org/fetchOrganizations',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const token = state.auth.token;  // Access token from auth slice
      const response = await axios.get(
        `${BASE_URL}/org/`,
        getAuthHeader(token)
      );
      console.log("response data",response.data);
      console.log("response data data",response.data.data);
      console.log("response data data data",response.data.data.data);
      return response.data.data;
      
    } catch (error) {
      return rejectWithValue(error.response?.data || { error: 'Something went wrong' });
    }
  }
);

const orgSlice = createSlice({
  name: 'org',
  initialState: {
    organizations: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrganizations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrganizations.fulfilled, (state, action) => {
        state.loading = false;
        console.log("action payload",action.payload);
        state.organizations = action.payload;
      })
      .addCase(fetchOrganizations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error || 'Something went wrong';
      });
  },
});

export default orgSlice.reducer;
