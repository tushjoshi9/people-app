import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer } from "../common/footer";

describe("when header is loaded", () => {
  beforeEach(() => {
    render(<Footer />);
  });
  test("should footer message", () => {
    expect(screen.getByText("Thank you for visiting!")).toBeInTheDocument();
  });
});