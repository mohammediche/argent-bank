import { createReducer } from "@reduxjs/toolkit";
import { getUserData, getToken, editProfileSlice, signOut } from "./user.action"; // editProfileSlice

const user = {
  firstName: "",
  lastName: "",
  email: "",
};
const initialState = {
  user: user,
  token: "",
  status: false,
};

export const userSlice = createReducer(initialState, (builder) => {
  builder
    .addCase(getUserData, (state, action) => {
      // action sont les données qu'on récupére du paramétre
      state.user = action.payload.user;
      state.status = true;
    })
    .addCase(getToken, (state, action) => {
      console.log("token", action);
      state.token = action.payload;
    })

    .addCase(editProfileSlice, (state, action) => {
      state.user = action.payload.data;
    })
    .addCase(signOut, (state, action) => {
      state.status = false;
    });
});

export default userSlice;
