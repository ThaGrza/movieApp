import React, {useEffect} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Axios from 'axios';
import apiKey from 'react-native-dotenv';

const baseUrl: string = "https://api.themoviedb.org/3/movie/discover/movie?api_key=";
// similar movie function

const MovieJeeves = (id: number) => {
  let query: any = baseUrl + apiKey + id;
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