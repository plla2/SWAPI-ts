import { Link } from "react-router-dom";
import { IStarship } from "../../type/Types";
import handleShipSelection from "../../util/handleShipSelection";

const ShipsList = ({ starships, changeStarship, changeId }) => {
  return (
    <ul className="list" aria-label="starships list">
      {starships ? (
        starships.map((starship: IStarship, index: number) => {
          return (
            <li key={index} className="list__item">
              <Link
                onClick={(e) =>
                  handleShipSelection(e, starships, changeStarship, changeId)
                }
                to={`/starships/${starship.name}`}
              >
                <h3>{starship.name}</h3>
                <p>{starship.model}</p>
              </Link>
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
