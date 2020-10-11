import React from "react";
import Pending from "./Pending";
import { render } from "@testing-library/react";

describe("test Pending", () => {
  it("snapshot test", () => {
    const { container } = render(<Pending></Pending>);
    expect(container).toMatchSnapshot();
  });
});
