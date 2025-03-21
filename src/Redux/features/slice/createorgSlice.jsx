import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL =  `${import.meta.env.VITE_APP_URL}/api/auth`;

const getAuthHeader = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
    withCredentials: true,
  },
});

// Async thunk to create an organization
export const createOrganization = createAsyncThunk(
  'org/createOrganization',
  async (companyName, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const token = state.auth.token; // get token from auth slice

      const response = await axios.post(
        `${API_URL}/org/`,
        { name: companyName },
        getAuthHeader(token)
      );
      console.log("sending data",response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { error: 'Something went wrong' });
    }
  }
);

const orgSlice = createSlice({
  name: 'org',
  initialState: {
    organizations: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrganization.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrganization.fulfilled, (state, action) => {
        state.loading = false;
        // Add the newly created org to organizations list
        state.organizations.push(action.payload);
      })
      .addCase(createOrganization.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error || 'Something went wrong';
      });
  },
});

export default orgSlice.reducer;
