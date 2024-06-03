import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status : false,
  userData : null
}

const authSlice = createSlice({
  name : "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },          //state me jo value update karni hai wo initial ke baad aati hai and action se payload milta hai

    logout: (state, action) => {
      state.status = false;
      state.userData = null;
    }
  }
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;