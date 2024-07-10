import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean | null;
  error: string | null;
}

const initialState: AuthState = {
  isLoggedIn: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(
      state,
      action: PayloadAction<{ username: string; password: string }>
    ) {
      if (
        action.payload.username === "user" &&
        action.payload.password === "password"
      ) {
        state.isLoggedIn = true;
        state.error = null;
      } else {
        state.isLoggedIn = false;
        state.error = "Invalid username or password";
      }
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    persistLogin(state, action) {
      console.log({ first: action });
      state.isLoggedIn = action.payload.userLoggedIn;
    },
  },
});

export const { login, logout, persistLogin } = authSlice.actions;

export default authSlice.reducer;
