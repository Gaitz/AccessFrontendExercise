import { render } from "@testing-library/react";
import React from "react";
import PageTitle from "./PageTitle";

describe("PageTitle component test", () => {
  it("snapshot test", () => {
    const { container } = render(
      <PageTitle>
        Test Title <em>sub element</em>
      </PageTitle>
    );
    expect(container).toMatchSnapshot();
  });
});
