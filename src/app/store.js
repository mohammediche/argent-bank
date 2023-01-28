import { createStore } from "@reduxjs/toolkit";
import userSlice from "../feature/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userSlice);

const store = createStore(persistedReducer);
const persistor = persistStore(store);
export { store, persistor };

// export const store = configureStore({
//   reducer: {
//     data: userSlice,
//   },
// });

/* permet de visualiser les states */
// store.subscribe(() => {
//   console.log("recup state store => ", store.getState());
// });
