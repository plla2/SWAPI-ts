import { useQuery } from "@tanstack/react-query";
import { GetStarShips } from "../../apis/GetStarShips";
import { IStarship } from "../../type/Types";

const ShipsList = () => {
  const { data, isLoading, error } = useQuery(["starships"], GetStarShips);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>에러 페이지..</div>;

  return (
    <ul>
      {data ? (
        data.map((starship: IStarship, index: number) => {
          return (
            <li key={index}>
              <h3>{starship.name}</h3>
              <p>{starship.model}</p>
            </li>
          );
        })
      ) : (
        <div>데이터가 없숩니다..</div>
      )}
    </ul>
  );
};

export default ShipsList;
