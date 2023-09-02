import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import StarShip from "./pages/StarShip";
import Actors from "./pages/Actors";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/starships" element={<StarShip />} />
          <Route path="/actors" element={<Actors />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
