import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("모달 버튼 테스트", () => {
  test("로그인 모달", () => {
    const handleOpenLogin = jest.fn();
    render(<Button open={handleOpenLogin} text="log in" />);
    const loginButton = screen.getByText(/log in/i);
    fireEvent.click(loginButton);
    expect(handleOpenLogin).toHaveBeenCalledTimes(1);
  });
  test("회원가입 모달", () => {
    const handleOpenSignup = jest.fn();
    render(<Button open={handleOpenSignup} text="sign up" />);
    const signupButton = screen.getByText(/sign up/i);
    fireEvent.click(signupButton);
    expect(handleOpenSignup).toHaveBeenCalledTimes(1);
  });
});
