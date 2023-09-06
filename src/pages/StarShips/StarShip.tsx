import ShipsList from "../../components/List/ShipsList";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import retrieveStarships from "../../apis/retrieveStarships";
import getData from "../../util/getData";
import Button from "../../components/Button/Button";
import { IStarship } from "../../type/Types";

const StarShip = () => {
  const [starshipList, setStarShipList] = useState<IStarship[]>([]);
  const [page, setPage] = useState("");
  const sourceRef = useRef(axios.CancelToken.source());

  useEffect(() => {
    const source = sourceRef.current;
    const getStarships = async () => {
      const res = await retrieveStarships();
      setStarShipList(res.results);
      setPage(res.next);
    };
    getStarships();

    return () => {
      if (source)
        source.cancel("페이지를 불러오지 못했습니다. 재시도 해주세요.");
      setStarShipList([]);
      setPage("");
    };
  }, []);

  const handleAddList = async () => {
    if (page) {
      const res = await getData(page);
      setStarShipList([...starshipList, ...res.results]);
      setPage(res.next);
    }
  };
  const handleScrollTop = () => window.scrollTo(0, 0);

  console.log("starshipList", starshipList);
  console.log("page", page);

  return (
    <>
      {starshipList ? (
        <>
          <ShipsList list={starshipList} page={"starships"} />
          {starshipList.length < 36 ? (
            <Button
              open={handleAddList}
              text={"VIEW MORE"}
              name={"view__button"}
            />
          ) : (
            <Button
              open={handleScrollTop}
              text={"BACK TO TOP"}
              name={"view__button"}
            />
          )}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default StarShip;
