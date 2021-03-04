import axios from "axios";

// PLACEHOLDER CHANGE
const APIKEY: number = 100;

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/discover/movie?api_key=" + APIKEY + "&with_genres="
});

export default instance;