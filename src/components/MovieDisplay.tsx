import React, { useState, useEffect } from 'react';
import {View, Image, Text, StyleSheet } from 'react-native';
import GenreSelector from './GenreSelector';
import Axios from 'axios';
import { API_KEY } from '@env';

const baseImageUrl: any = "https://image.tmdb.org/t/p/w500/"
const baseUrl: string = "https://api.themoviedb.org/3/discover/movie?api_key=";
const genreUrl: string = "&with_genres=";




const MovieDisplay = (movie: object) => {
  const [title, setTitle] = useState();
  const [movieImg, setMovieImg] = useState();
  const [overview, setOverview] = useState();
  const [releaseDate, setReleaseDate] = useState();

  const truncate = (str: string , n: number) => {
    return str?.length > n ? str.substr(0, n -1) + '...' : str;
  } 

  const movieJeeves = (movieId: number) => {
    let query: any = baseUrl + API_KEY + genreUrl + movieId;
    let movie = {};
    Axios.get(query)
      .then(res => {
        movie = res.data.results[Math.floor(Math.random() * res.data.results.length)];
        setTitle(movie.original_title);
        setMovieImg(baseImageUrl + movie.poster_path);
        setOverview(movie.overview);
        setReleaseDate(movie.release_date);
      })
      .catch(err => {
        console.log(err);
      }) 
  }


  return(
    <View style = {styles.movieImage} >
      <Image style = {styles.movieImage} source={{uri: movieImg }} />
      <Text style = {styles.movieInfo} >{title}</Text>
      <Text style = {styles.movieInfo} >{releaseDate}</Text>
      <Text style = {styles.movieInfo} >{truncate(overview, 150)}</Text>
      <GenreSelector onPress={(value: number) => movieJeeves(value)} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    marginLeft: "auto",
    marginRight: "auto"
  },
  movieInfo: {

    fontSize: 18,
  },
  movieImage: {
    width: 400,
    height: 400,
  }
}); 

export default MovieDisplay;
