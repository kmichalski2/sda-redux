import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// TODO 5: utwórz AuthState i authSlice
// AuthState powinien mieć pole userId
export interface AuthState {
  userId: string | null;
}

const initialState: AuthState = {
  userId: null,
};

export interface SignInPayload {
  login: string;
  password: string;
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<SignInPayload>) => {
      const { login, password } = action.payload;

      if (login === "admin" && password === "password") {
        state.userId = login;
      }
    },
    signOut: (state) => {
      state.userId = null;
    },
  },
});

export default authSlice.reducer;
