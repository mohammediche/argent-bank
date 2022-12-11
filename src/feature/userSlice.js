import { createReducer } from "@reduxjs/toolkit";
import { getUserData, getToken } from "./user.action";

// export const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     user: null,
//     token: "",
//   },
//   reducers: {
//     getUserData: (state, action) => {
//       // action sont les données qu'on récupére du paramétre
//       state.user = action.payload;
//     },
//     addUser: (state, action) => {
//       state.user.push(action.payload);
//     },
//     editUserData: (state, action) => {
//       console.log(action.payload);
//       state.user = action.payload;
//     },
//     getToken: (state, action) => {
//       state.token = action.payload;
//     },
//     // récup le token
//   },
// });
const initialState = {
  user: null,
  token: "",
};

export const userSlice = createReducer(initialState, (builder) => {
  builder
    .addCase(getUserData, (state, action) => {
      // action sont les données qu'on récupére du paramétre
      state.user = action.payload;
      console.log("on function getUserData: ", state.user);
    })
    .addCase(getToken, (state, action) => {
      state.token = action.payload;
      console.log("on function getToken: ", state.token.token);
    });
});
// export const { getUserData, addUser, editUserData, getToken } = userSlice.actions;

export default userSlice;
