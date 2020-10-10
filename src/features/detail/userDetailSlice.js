import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { request as gitHubAPI } from "@octokit/request";

const getUser = createAsyncThunk("userDetail/getUser", async (userName) => {
  const response = await gitHubAPI("GET /users/{username}", {
    username: userName,
  });
  return response;
});

const userDetailSlice = createSlice({
  name: "userDetail",
  initialState: {
    userInfo: {
      avatarUrl: null,
      name: null,
      bio: null,
      login: null,
      siteAdmin: null,
      location: null,
      blog: null,
    },
    isPending: false,
  },
  reducers: {},
  extraReducers: {
    [getUser.pending]: (state) => {
      state.isPending = true;
    },
    [getUser.fulfilled]: (state, action) => {
      const {
        avatar_url,
        name,
        bio,
        login,
        site_admin,
        location,
        blog,
      } = action.payload.data;

      state.userInfo = {
        avatarUrl: avatar_url,
        name: name,
        bio: bio,
        login: login,
        siteAdmin: site_admin === true ? "true" : "false",
        location: location,
        blog: blog,
      };
      state.isPending = false;
    },
    [getUser.rejected]: (state, action) => {
      state.isPending = false;
    },
  },
});

export { getUser };
export default userDetailSlice.reducer;
