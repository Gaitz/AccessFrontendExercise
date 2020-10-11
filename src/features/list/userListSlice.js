import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { request as gitHubAPI } from "@octokit/request";

/**
 * API document:
 * list-users, https://docs.github.com/en/free-pro-team@latest/rest/reference/users#list-users
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
    users: [
      {
        avatarUrl: null,
        login: null,
        siteAdmin: null,
        id: null,
      },
    ],
    pageIndex: 0,
    isPending: true,
  },
  reducers: {
    appendPageIndex(state, action) {
      state.pageIndex += action.payload;
      state.isPending = true;
    },
    goToPageIndex(state, action) {
      state.pageIndex = action.payload;
      state.isPending = true;
    },
  },
  extraReducers: {
    [getGitHubUsers.pending]: (state) => {
      state.isPending = true;
    },
    [getGitHubUsers.fulfilled]: (state, action) => {
      state.users = action.payload.data.map((aUser) => {
        const { avatar_url, login, site_admin, id } = aUser;
        return { avatarUrl: avatar_url, login, siteAdmin: site_admin, id };
      });
      state.isPending = false;
    },
    [getGitHubUsers.rejected]: (state, action) => {
      console.error(action);
      state.isPending = false;
    },
  },
});

export { getGitHubUsers };
export const { appendPageIndex, goToPageIndex } = userListSlice.actions;
export default userListSlice.reducer;
