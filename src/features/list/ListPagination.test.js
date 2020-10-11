import React from "react";
import { Provider } from "react-redux";
import store from "../../app/store";
import {
  fireEvent,
  getByText,
  queryByText,
  render,
} from "@testing-library/react";
import ListPagination from "./ListPagination";

describe("ListPagination component test", () => {
  test("snapshot ListPagination", () => {
    const { container } = render(
      <Provider store={store}>
        <ListPagination></ListPagination>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  test("Get Next Page", () => {
    const { container, getByText } = render(
      <Provider store={store}>
        <ListPagination></ListPagination>
      </Provider>
    );
    const nextPageButton = getByText("Get Next Page");
    fireEvent.click(nextPageButton);
    expect(container).toMatchSnapshot();
  });

  describe("page index link", () => {
    let container, getByText, queryByText;

    beforeEach(() => {
      ({ container, getByText, queryByText } = render(
        <Provider store={store}>
          <ListPagination></ListPagination>
        </Provider>
      ));
    });

    test("by click disabled link", () => {
      const initialPageIndex = getByText("0");
      fireEvent.click(initialPageIndex);
      expect(container).toMatchSnapshot();
    });

    test("by click active link", () => {
      const nextPageButton = getByText("Get Next Page");

      fireEvent.click(nextPageButton);
      fireEvent.click(nextPageButton);
      const secondPageIndex = queryByText("1");
      fireEvent.click(secondPageIndex);

      expect(container).toMatchSnapshot();
    });
  });
});
