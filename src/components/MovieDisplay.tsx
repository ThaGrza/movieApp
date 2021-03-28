import React, { useState, useEffect } from 'react';
import {View, Image, Text, StyleSheet } from 'react-native';
import GenreSelector from './GenreSelector';

// ADD TO IMAGE SOURCE + IMG STATE FOR POSTER
const movieImg: string = "https://image.tmdb.org/t/p/w500/"

const MovieDisplay = (movie: object) => {
  const [movieId, setMovieId] = useState();
  const [title, setTitle] = useState();
  const [movieImg, setMovieImg] = useState();
  const [overview, setOverview] = useState();
  const [releaseDate, setReleaseDate] = useState();

  return(
    <View style = {styles.movieImage} >
      <Image style = {styles.movieImage} source={{uri: movieImg }} />
      <Text style = {styles.movieInfo} >{title}</Text>
      <GenreSelector onPress={value => setMovieId(value)} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    marginLeft: "auto",
    marginRight: "auto"
  },
  button: {
    width: 100,
    backgroundColor: "red",
    alignContent: "center",
    marginTop: 100,
    borderRadius: 20,
  },
  movieInfo: {
    // css stuff
  },
  movieImage: {
    width: 400,
    height: 300,
  }
}); 

export default MovieDisplay;
