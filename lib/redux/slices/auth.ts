import { createSlice } from "@reduxjs/toolkit";
export interface AuthState {
  token: null;
  userInfo: object;
  showOnBoarding: boolean;
}

const initialState: AuthState = {
  token: null,
  userInfo: {},
  showOnBoarding: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userData: (state, action) => {
      state.userInfo = action.payload;
    },
    userToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.userInfo = initialState.userInfo;
      state.token = initialState.token;
    },
    setShowOnBoarding: (state, action) => {
      state.showOnBoarding = action.payload;
    },
  },
});

export const { logout, setShowOnBoarding, userData, userToken } =
  authSlice.actions;

export default authSlice.reducer;
