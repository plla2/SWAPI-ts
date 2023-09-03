import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import StarShip from "./pages/StarShip";
import Home from "./pages/Home/Home";
import Actors from "./pages/Actors";
import React from "react";

const renderWithRouter = (initialPath: string, component: React.ReactNode) => {
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route path={initialPath} element={component} />
      </Routes>
    </MemoryRouter>
  );
};

const navigateToPathAndCheckLabel = (path: string, label: string) => {
  renderWithRouter(
    path,
    path === "/" ? <Home /> : path === "/starships" ? <StarShip /> : <Actors />
  );
  userEvent.click(screen.getByText(label, { exact: false }));
  expect(
    screen.getByRole("list", { name: `${label} list` })
  ).toBeInTheDocument();
};

describe("페이지 렌더링 테스트", () => {
  test("첫화면 렌더링", () => {
    renderWithRouter("/", <Home />);
    expect(screen.getByText(/안녕 나는 홈페이지야/i)).toBeInTheDocument();
  });

  test("starships 경로 설정", () => {
    navigateToPathAndCheckLabel("/starships", "starships");
  });

  test("actors 경로 설정", () => {
    navigateToPathAndCheckLabel("/actors", "actors");
  });
});
