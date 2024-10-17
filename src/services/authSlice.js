// features/authSlice.js
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  users: localStorage.getItem('users') || null,
  accessToken:  localStorage.getItem('accessToken') || null,
  refreshToken:  localStorage.getItem('refreshToken') || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      console.log("Application state value is ", action?.payload)
      const { accessToken, refreshToken, user } = action?.payload
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.users = user;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('users', JSON.stringify(user));
    },
    logout: (state) => {
      state.users = null;
      state.accessToken = null;
      state.refreshToken = null;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('users');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
