import { configureStore } from "@reduxjs/toolkit";
import userListSlice from "../features/list/userListSlice";
import userDetailSlice from "../features/detail/userDetailSlice";

const store = configureStore({
  reducer: { list: userListSlice, detail: userDetailSlice },
});

export default store;
