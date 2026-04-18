import React from "react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import { render } from "@testing-library/react";

test("should render", () => {
  const { getByText } = render(<h1>Foo</h1>);
  expect(getByText("Foo")).toBeInTheDocument();
});
