import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import { User } from "@type/redux/slices/auth";
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
