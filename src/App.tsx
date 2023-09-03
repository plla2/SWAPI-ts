import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import StarShip from "./pages/StarShip";
import Actors from "./pages/Actors";
import { useEffect, useState } from "react";
import Details from "./components/Details/Details";

function App() {
  const [starshipId, setStarShipId] = useState();
  const [selectedStarship, setSelectedStarship] = useState();

  useEffect(() => {
    sessionStorage.setItem("starship", JSON.stringify(selectedStarship));
    sessionStorage.setItem("id", JSON.stringify(starshipId));
  }, [selectedStarship, starshipId]);
  console.log(starshipId);

  return (
    <BrowserRouter>
      <>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/starships"
            element={
              <StarShip
                changeStarship={setSelectedStarship}
                changeId={setStarShipId}
              />
            }
          />
          <Route
            path="/starships/:id"
            element={<Details info={selectedStarship} id={starshipId} />}
          />
          <Route path="/actors" element={<Actors />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
