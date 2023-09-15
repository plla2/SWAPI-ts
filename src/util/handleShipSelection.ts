import { IStarship } from "../type/Types";

const handleShipSelection = ({ e, starships, changeStarship, changeId }) => {
  console.log(starships);
  if (e.target.classList.contains("list_item"))
    const filterStarship = starships.filter(
      (item) => item.name === e.target.firstChild.textContent
    );
  changeStarship(...filterStarship);
  const id = filterStarship[0].url.match(/[0-9]+/);
  changeId(id[0]);
};

export default handleShipSelection;
