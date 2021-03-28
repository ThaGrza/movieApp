import React, { useState, useEffect } from 'react';
import {View, Image, Text, StyleSheet } from 'react-native';

// ADD TO IMAGE SOURCE + IMG STATE FOR POSTER
const movieImg: string = "https://image.tmdb.org/t/p/w500/"

const MovieDisplay = (movie: object) => {
  const [title, setTitle] = useState();
  const [movieImg, setMovieImg] = useState();
  const [overview, setOverview] = useState();
  const [releaseDate, setReleaseDate] = useState();


  useEffect(() => {
    setTitle(movie.original_title);
    console.log(title);
  });

 
  return(
    <View style = {styles.movieImage} >
      <Image style = {styles.movieImage} source={{uri: movieImg }} />
      <Text style = {styles.movieInfo} >{title}</Text>
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
