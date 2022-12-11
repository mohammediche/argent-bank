import { createAction } from "@reduxjs/toolkit";

const getUserData = createAction("data/user", (user) => ({
  payload: {
    user,
  },
}));

const getToken = createAction("data/token", (token) => ({
  payload: {
    token,
  },
}));
// const getToken = createAction("data/token", (token) => {
//   return {
//     payload: {
//       token,
//     },
//   };
// });

export { getUserData, getToken };
