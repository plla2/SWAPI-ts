import { render, screen } from "@testing-library/react";
import Header from "./Header";
import logo from "../../assets/logo.png";

test("로고", () => {
  render(<Header />);
  const headerLogo = screen.getByAltText("Star Wars") as HTMLImageElement;
  expect(headerLogo.src).toContain(logo);
});

test("로그인, 회원가입", () => {
  render(<Header />);
  const headerLogin = screen.getByRole("button", { name: /log in/i });
  expect(headerLogin).toBeInTheDocument();
  const headerSignup = screen.getByRole("button", { name: /sign up/i });
  expect(headerSignup).toBeInTheDocument();
});
