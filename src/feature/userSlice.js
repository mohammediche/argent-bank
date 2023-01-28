import { createReducer } from "@reduxjs/toolkit";
import { getUserData, getToken, editProfileSlice } from "./user.action"; // editProfileSlice

const initialState = {
  user: null,
  token: "",
  status: false,
};

export const userSlice = createReducer(initialState, (builder) => {
  builder
    .addCase(getUserData, (state, action) => {
      // action sont les données qu'on récupére du paramétre
      state.user = action.payload;
      state.status = true;
    })
    .addCase(getToken, (state, action) => {
      state.token = action.payload;
    })

    .addCase(editProfileSlice, (state, action) => {
      state.user.firstName = action.payload.data.firstName;
      state.user.lastName = action.payload.data.lastName;
      console.log("action.payload =>", action);
    });
});

export default userSlice;
