import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("when app is loaded", () => {
  beforeEach(() => {
    render(<App />);
  });
  test("should display loader", () => {
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});