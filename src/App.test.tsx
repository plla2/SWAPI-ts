import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import StarShip from "./pages/StarShip";
import Home from "./pages/Home";
import Actors from "./pages/Actors";

test("첫화면 렌더링", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MemoryRouter>
  );
  const homeView = screen.getByText(/안녕 나는 홈페이지야/i);
  expect(homeView).toBeInTheDocument();
});

test("starships 경로 설정", () => {
  // 초기 경로를 "/starships"로 설정하여 StarShip 컴포넌트가 렌더링되도록 합니다.
  render(
    <MemoryRouter initialEntries={["/starships"]}>
      <Routes>
        <Route path="/starships" element={<StarShip />} />
      </Routes>
    </MemoryRouter>
  );
  // "starships" 텍스트를 가진 엘리먼트를 클릭하여 "/starships"로 이동합니다.
  userEvent.click(screen.getByText(/starships/i));

  // "/starships" 경로로 이동한 후 "starships list" label을 검증합니다.
  expect(
    screen.getByRole("list", { name: /starships list/i })
  ).toBeInTheDocument();
});

test("actors 경로 설정", () => {
  // 초기 경로를 "/actors"로 설정하여 Actors 컴포넌트가 렌더링되도록 합니다.
  render(
    <MemoryRouter initialEntries={["/actors"]}>
      <Routes>
        <Route path="/actors" element={<Actors />} />
      </Routes>
    </MemoryRouter>
  );
  // "actors" 텍스트를 가진 엘리먼트를 클릭하여 "/actors"로 이동합니다.
  userEvent.click(screen.getByText(/actors/i));

  // "/actors" 경로로 이동한 후 "actors list" label을 검증합니다.
  expect(
    screen.getByRole("list", { name: /actors list/i })
  ).toBeInTheDocument();
});
