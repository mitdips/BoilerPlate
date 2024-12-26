import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface AuthState {
  token: string | null;
  user: any | null;
  showOnBoarding: boolean;
}

const initialState: AuthState = {
  token: null,
  user: null,
  showOnBoarding: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    userData: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
    setShowOnBoarding: (state, action) => {
      state.showOnBoarding = action.payload;
    },
  },
});

export const { logout, setShowOnBoarding, userData, userToken } =
  authSlice.actions;

export default authSlice.reducer;
