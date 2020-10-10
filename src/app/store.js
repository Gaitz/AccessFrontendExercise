import { configureStore } from "@reduxjs/toolkit";
import userListSlice from "../features/list/userListSlice";

const store = configureStore({
  reducer: { list: userListSlice },
});

export default store;
