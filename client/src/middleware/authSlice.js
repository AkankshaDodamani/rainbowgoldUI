import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Initialize state from localStorage if it exists
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
  token: localStorage.getItem("accessToken") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
  isAuthenticated: !!localStorage.getItem("accessToken"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken, refreshToken } = action.payload;
      state.user = user;
      state.token = accessToken;
      state.isAuthenticated = true;
      state.refreshToken = refreshToken; // Make sure to save this in state too
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      if (refreshToken) localStorage.setItem("refreshToken", refreshToken);
    },
    // ==========================================
    // ADDED THIS: Silently updates the access token in Redux and LocalStorage
    // ==========================================
    updateAccessToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("accessToken", action.payload);
    },
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      state.refreshToken = null; // Added this to clear refresh token state
      state.isAuthenticated = false;
      
      // Clear localStorage on logout
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
    },
  },
});

// ADDED 'updateAccessToken' to the exports here 👇
export const { setCredentials, updateAccessToken, logoutUser } = authSlice.actions;
export default authSlice.reducer;