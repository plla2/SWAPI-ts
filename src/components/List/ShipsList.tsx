import { Link } from "react-router-dom";
import { IStarship } from "../../type/Types";

interface props {
  list: IStarship[];
  page: string;
}

const ShipsList = ({ list, page }: props) => {
  return (
    <ul className="list" aria-label="starships list">
      {list &&
        page === "starships" &&
        list.map((item, index) => {
          return (
            <Link key={index} to={`/starships/${item.url.match(/[0-9]+/)}`}>
              <li>
                <h3>{item.name}</h3>
                <p>{item.model}</p>
              </li>
            </Link>
          );
        })}
    </ul>
  );
};

export default ShipsList;
