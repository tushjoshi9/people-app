import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "../common/header";
import { act } from "react-dom/test-utils";

describe("when header is loaded", () => {
  beforeEach(() => {
    render(<Header />);
  });
  test("should display welcome message", () => {
    expect(screen.getByTestId("profile")).toBeInTheDocument();
  });
  test("should display change theme button", () => {
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  test("should change to dark theme", () => {
    act(() => {
      fireEvent.click(screen.getByRole("button"));
    });
    expect(screen.getByTestId("darktheme")).toBeInTheDocument();
  });
});