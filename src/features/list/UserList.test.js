import React from "react";
import { Provider } from "react-redux";
import store from "../../app/store";
import { render } from "@testing-library/react";
import UserList from "./UserList";

test("snapshot UserList", () => {
  const { container } = render(
    <Provider store={store}>
      <UserList></UserList>
    </Provider>
  );
  expect(container).toMatchSnapshot();
});
