import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { request as gitHubAPI } from "@octokit/request";

/**
 * API document:
 * list-users, https://docs.github.com/en/free-pro-team@latest/rest/reference/users#list-users
 *
 */

export const PER_PAGE = 20;

const getGitHubUsers = createAsyncThunk(
  "userList/getGitHubUsers",
  async (input, { getState }) => {
    const since = getState().list.pageIndex * PER_PAGE;

    const response = await gitHubAPI("GET /users", {
      per_page: PER_PAGE,
      since: since,
    });
    return response;
  }
);

const userListSlice = createSlice({
  name: "userList",
  initialState: {
    users: [],
    pageIndex: 0,
    isPending: true,
  },
  reducers: {},
  extraReducers: {
    [getGitHubUsers.pending]: (state) => {
      state.isPending = true;
    },
    [getGitHubUsers.fulfilled]: (state, action) => {
      state.users = action.payload.data;
      state.pageIndex++;
      state.isPending = false;
    },
    [getGitHubUsers.rejected]: (state, action) => {
      console.error(action.error);
    },
  },
});

export { getGitHubUsers };
export default userListSlice.reducer;
