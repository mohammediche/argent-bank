import { createAction } from "@reduxjs/toolkit";
// useDispatch permet de déclancher les actions du reducer
// useSelector permet de faire appel au donnée du store

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
const editProfileSlice = createAction("data/edit", (data) => ({
  payload: {
    data,
  },
}));

export { getUserData, getToken, editProfileSlice };
