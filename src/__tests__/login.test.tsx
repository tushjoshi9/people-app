import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Login from "../components/login";
import { act } from "react-dom/test-utils";

jest.mock('../common/storage', () => ({
  useStorage: () => ({ apiStore: "", setAPIStore: jest.fn() })
}));

describe("when header is loaded", () => {
  beforeEach(() => {
    render(<Login />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  test("should display login form", () => {
    expect(screen.getByTestId("loginform")).toBeInTheDocument();
  });
  test("should change username", () => {
    let input = screen.getByTestId("username") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "foo" } });
    expect(input.value).toBe("foo");
  });
  test("should change password", () => {
    let input = screen.getByTestId("password") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "bar" } });
    expect(input.value).toBe("bar");
  });
  test("should show incorrect login", () => {
    let username = screen.getByTestId("username") as HTMLInputElement;
    let password = screen.getByTestId("password") as HTMLInputElement;
    fireEvent.change(username, { target: { value: "fooo" } });
    fireEvent.change(password, { target: { value: "barr" } });
    act(() => {
      fireEvent.click(screen.getByTestId("loginsubmit"));
    });
    expect(screen.getByText("Incorrect username/password")).toBeInTheDocument();
  });
  test("should login successfully", () => {
    let username = screen.getByTestId("username") as HTMLInputElement;
    let password = screen.getByTestId("password") as HTMLInputElement;
    fireEvent.change(username, { target: { value: "foo" } });
    fireEvent.change(password, { target: { value: "bar" } });
    act(() => {
      fireEvent.click(screen.getByTestId("loginsubmit"));
    });
    expect(screen.getByText("Logged in successfully")).toBeInTheDocument();
  });
});