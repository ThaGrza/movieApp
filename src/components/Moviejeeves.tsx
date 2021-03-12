import React, {useEffect} from 'react';
import { View } from 'react-native';
import Axios from 'axios';
import MovieDisplay from './MovieDisplay';
// import { API_KEY } from '@env';


// DELETE BEFORE COMMITING
// DELETE BEFORE COMMITING
// DELETE BEFORE COMMITING
// DELETE BEFORE COMMITING
// DELETE BEFORE COMMITING
const apiKey = "5f9630b664fee3f1c639e0ae94090867";
// DELETE BEFORE COMMITING
// DELETE BEFORE COMMITING
// DELETE BEFORE COMMITING
// DELETE BEFORE COMMITING
// DELETE BEFORE COMMITING

const baseUrl: string = "https://api.themoviedb.org/3/discover/movie?api_key=";
const genreUrl: string = "&with_genres="
// similar movie function
const MovieJeeves = (id: number) => {
  let query: any = baseUrl + apiKey + genreUrl + id;
  Axios.get(query)
    .then(res => {
      let movie = res.data.results[Math.floor(Math.random() * res.data.results.length)];
      MovieDisplay.movieSetter(movie);
    })
    .catch(err => {
      console.log(err);
    });
  return(
    <View/>
  )
}
export default MovieJeeves;