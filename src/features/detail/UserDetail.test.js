import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../app/store";
import React from "react";
import UserDetail from "./UserDetail";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn().mockReturnValue("gaitz"),
}));

describe("UserDetail component test", () => {
  it("snapshot test", () => {
    const { container } = render(
      <Provider store={store}>
        <UserDetail></UserDetail>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
