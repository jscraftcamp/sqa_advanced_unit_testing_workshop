import "@testing-library/jest-dom/extend-expect";
import { render, screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import React from "react";
import { Clicker } from "./Clicker";

it("renders title when clicked", async () => {
  const { debug } = render(<Clicker />); // this is wrapped in act()

  userEvent.click(screen.getByRole("button"));

  // await act(() => userEvent.click(screen.getByRole("button")));

  // screen.debug(screen.getByRole("button"));
  // debug();
  // screen.logTestingPlaygroundURL();

  // expect(screen.getByRole("headline")).toHaveTextContent("Clicked");
  // expect(await screen.findByText("Clicked")).toBeInTheDocument();

  await waitFor(() => expect(screen.getByText("Clicked")).toBeInTheDocument());
});
