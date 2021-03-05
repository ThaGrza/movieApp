import React, {useEffect} from 'react';
import { View } from 'react-native';
import Axios from 'axios';

// import { API_KEY } from '@env';


const baseUrl: string = "https://api.themoviedb.org/3/discover/movie?api_key=";
const genreUrl: string = "&with_genres="
// similar movie function

const MovieJeeves = (id: number) => {
  let query: any = baseUrl + apiKey + genreUrl + id;
  let movie
  Axios.get(query)
    .then(res => {

      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
  // use math.random to get random movie from list.
  // set display state with random movie.
  return(
    <View/>
  )
}
export default MovieJeeves;