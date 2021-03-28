import React from 'react';
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
const genreUrl: string = "&with_genres=";
const MovieJeeves = (id: number) => {
  let query: any = baseUrl + apiKey + genreUrl + id;
  let movie = {};
  Axios.get(query)
    .then(res => {
      movie = res.data.results[Math.floor(Math.random() * res.data.results.length)];
      MovieDisplay(movie);
    })
    .catch(err => {
      console.log(err);
    });
  MovieDisplay(movie);


  return(
    <View/>
  )
}
export default MovieJeeves;

