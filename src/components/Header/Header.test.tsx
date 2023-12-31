import { render, screen } from "@testing-library/react";
import Header from "./Header";
import logo from "../../assets/logo.png";

describe("헤더 컴포넌트 테스트", () => {
  test("로고", () => {
    render(<Header />);
    const headerLogo = screen.getByAltText("Star Wars") as HTMLImageElement;
    expect(headerLogo.src).toContain(logo);
  });
});
