import React from "react";
import { GetByRole, render } from "@testing-library/react";
import Header from "./index";

test("header is rendering ", () => {
  const heading = "Welcome to our company site";
  const header = render(<Header />);
  expect(header.getByText(heading)).toHaveTextContent(heading);
});
