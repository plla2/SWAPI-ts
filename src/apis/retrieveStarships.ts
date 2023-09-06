import getData from "../util/getData";

const BASE_URL = import.meta.env.VITE_STARSHIPS_URL;

const retrieveStarships = async () => await getData(BASE_URL);

export default retrieveStarships;
