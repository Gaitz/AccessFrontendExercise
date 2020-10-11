import React from "react";
import Navigator from "./Navigator";
import { getByText, render, fireEvent } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => {
    return {
      push: mockHistoryPush,
    };
  },
}));

describe("test Navigator", () => {
  it("snapshot test", () => {
    const { container } = render(
      <Router>
        <Navigator></Navigator>
      </Router>
    );
    expect(container).toMatchSnapshot();
  });

  it("go back link to /", () => {
    const { getByText } = render(
      <Router>
        <Navigator></Navigator>
      </Router>
    );
    expect(getByText("Back to List")).toHaveAttribute("href", "/");
  });

  it("search user with history push", () => {
    const { getByLabelText, getByTestId } = render(
      <Router>
        <Navigator></Navigator>
      </Router>
    );

    const QUERY_TEXT = "gaitz";

    const searchInput = getByLabelText("Search user by account:");

    fireEvent.change(searchInput, {
      target: { value: QUERY_TEXT },
    });

    const searchFrom = getByTestId("searchForm");
    expect(searchFrom).toHaveFormValues({
      userName: QUERY_TEXT,
    });

    fireEvent.submit(searchFrom);

    expect(mockHistoryPush).toHaveBeenCalledWith(`/${QUERY_TEXT}`);
  });
});
