import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "redux/slices/UserSlice";
export const rootReducer = combineReducers({
  user: userReducer,
});

const store = configureStore({ reducer: { rootReducer } });

export type RootState = ReturnType<typeof store.getState>;

export const AppDispatch = typeof store.dispatch;

export default store;
