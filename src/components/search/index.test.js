import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Search } from "./index";

describe("Select testing", () => {
  it("should call onChange with correct values", async () => {
    render(<Search />);
    const value = "dogs";
    const select = screen.getByRole("combobox");
    fireEvent.select(select, {
      target: { value },
    });
    expect(select).toHaveProperty("value", value);
  });
});
