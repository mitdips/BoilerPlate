import { User } from "@/lib/type/redux/slices/auth";
import { createSlice } from "@reduxjs/toolkit";
export interface AuthState {
  user: User;
}

const initialState: AuthState = {
  user: {
    name: "",
    email: "",
    token: "",
    countryCodeAlpha: "",
    mobile: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    
    logout: (state) => {
      state.user = initialState.user;
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
