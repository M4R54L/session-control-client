import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  token: '',
  isAdmin: false,
  error: '',
  username: '',
};

const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    loginError(state, action) {
      state.error = action.payload.errors;
      state.token = '';
      state.isLoggedIn = false;
      state.isAdmin = false;
      state.username = '';
    },
    login(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.isAdmin = action.payload.isAdmin;
      state.error = '';
      state.username = action.payload.username;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = '';
      state.username = '';
      state.username = '';
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
