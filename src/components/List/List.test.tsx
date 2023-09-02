import { render, screen } from "@testing-library/react";
import ShipsList from "./ShipsList";

test("리스트 렌더링 테스트", async () => {
  render(<ShipsList />);
  const list = await screen.findByRole("list", { name: /starships list/i });
  console.log(list);
});
