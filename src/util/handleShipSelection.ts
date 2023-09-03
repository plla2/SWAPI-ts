import { IStarship } from "../type/Types";

// interface props {
//   e: React.MouseEvent<HTMLLIElement, MouseEvent>;
//   starships: IStarship[];
//   changeStarship: React.Dispatch<React.SetStateAction<IStarship | null>>;
//   changeId: React.Dispatch<React.SetStateAction<undefined>>;
// }
const handleShipSelection = ({ e, starships, changeStarship, changeId }) => {
  console.log(starships);
  const filterStarship = starships.filter(
    (item) => item.name === e.target.firstChild.textContent
  );
  changeStarship(...filterStarship);
  const id = filterStarship[0].url.match(/[0-9]+/);
  changeId(id[0]);
};

export default handleShipSelection;
