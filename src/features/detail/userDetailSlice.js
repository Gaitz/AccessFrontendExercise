import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { request as gitHubAPI } from "@octokit/request";

const userDetailSlice = createSlice({
  name: "userDetail",
  initialState: {
    avatarUrl: null,
    name: null,
    bio: null,
    login: null,
    siteAdmin: null,
    location: null,
    blog: null,
  },
});

export default userDetailSlice.reducer;
