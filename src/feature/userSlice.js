import { createReducer } from "@reduxjs/toolkit";
import { getUserData, getToken } from "./user.action"; // editProfileSlice

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
// export const { getUserData, addUser, editUserData, getToken } = userSlice.actions;
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
    });

  // .addCase(editProfileSlice, (state, action) => {
  //   state.user.firstName = action.payload.firstName;
  //   state.user.lastName = action.payload.lastName;
  // });
});

export default userSlice;
