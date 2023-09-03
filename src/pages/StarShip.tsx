import ShipsList from "../components/List/ShipsList";
import { useQuery } from "@tanstack/react-query";
import { GetStarShips } from "../apis/GetStarShips";

const StarShip = ({ changeStarship, changeId }) => {
  const { data, isLoading, error } = useQuery(["starships"], GetStarShips);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>에러 페이지..</div>;

  return (
    <ShipsList
      starships={data}
      changeStarship={changeStarship}
      changeId={changeId}
    />
  );
};

export default StarShip;
