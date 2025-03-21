import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL =  `${import.meta.env.VITE_APP_URL}/api/auth`;

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
        `${API_URL}/org/`,
        getAuthHeader(token)
      );
      console.log("response data",response.data);
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
    selectedOrganizationId: null,
    loading: false,
    error: null,
  },
  reducers: {
    setSelectedOrganization: (state, action) => {
      state.selectedOrganizationId = action.payload;
    },
  },
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
export const { setSelectedOrganization } = orgSlice.actions;
export default orgSlice.reducer;
