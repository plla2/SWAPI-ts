import axios from "axios";

export const GetStarShips = async () => {
  const res = await axios.get(`${import.meta.env.VITE_BASE_URL}starships/`);
  return res.data.results;
};
