import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../feature/userSlice";

export const store = configureStore({
  reducer: {
    data: userSlice,
  },
});

/* permet de visualiser les states */
// store.subscribe(() => {
//   console.log("recup state store => ", store.getState());
// });
