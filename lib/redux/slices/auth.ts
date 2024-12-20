import { User } from "@/lib/type/redux/slices/auth";
import { createSlice } from "@reduxjs/toolkit";
export interface AuthState {
  user: User;
  showOnBoarding: boolean;
}

const initialState: AuthState = {
  user: {
    name: "",
    email: "",
    token: "",
    countryCodeAlpha: "",
    mobile: "",
  },
  showOnBoarding: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = initialState.user;
    },
    setShowOnBoarding: (state, action) => {
      state.showOnBoarding = action.payload;
    },
  },
});

export const { logout, setShowOnBoarding } = authSlice.actions;

export default authSlice.reducer;
