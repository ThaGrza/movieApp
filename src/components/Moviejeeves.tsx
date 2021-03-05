import React, {useEffect} from 'react';
import { View } from 'react-native';
import Axios from 'axios';
import MovieDisplay from './MovieDisplay';
// import { API_KEY } from '@env';

const baseUrl: string = "https://api.themoviedb.org/3/discover/movie?api_key=";
const genreUrl: string = "&with_genres="
// similar movie function

const MovieJeeves = (id: number) => {
  let query: any = baseUrl + apiKey + genreUrl + id;
  Axios.get(query)
    .then(res => {
      console.log(res);
      let movie: any = res[Math.floor(Math.random() * res.length)];
      console.log(movie);
      MovieDisplay.setState({title: movie.title})
      MovieDisplay.setState({id: movie.id})
      MovieDisplay.setState({movieImg: movie.poster_path})
      MovieDisplay.setState({description: movie.overview})
      MovieDisplay.setState({date: movie.release_date})
    })
    .catch(err => {
      console.log(err);
    });
  return(
    <View/>
  )
}
export default MovieJeeves;