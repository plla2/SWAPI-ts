// Imports
import { render, screen, fireEvent } from "@testing-library/react";

// To Test
import App from "./App";

// Tests
test("Renders main page correctly", async () => {
  // Setup
  render(<App />);
  const buttonCount = await screen.findByRole("button");
  const codeCount = await screen.queryByText(/The count is now:/);

  // Pre Expecations
  expect(buttonCount.innerHTML).toBe("count is 0");
  // Instead of:
  expect(codeCount).toBeNull();

  // Init
  fireEvent.click(buttonCount);
  fireEvent.click(buttonCount);

  // Post Expectations
  expect(buttonCount.innerHTML).toBe("count is 2");
  expect(await screen.queryByText(/The count is now:/)).toBeInTheDocument();
});
test("Example test", () => {
  // 테스트 코드 작성
  expect(2 + 2).toBe(4);
});
