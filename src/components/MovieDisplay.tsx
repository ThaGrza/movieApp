import React, { useState, useEffect } from 'react';
import {View, Image, Text, StyleSheet } from 'react-native';
import GenreSelector from './GenreSelector';
import Axios from 'axios';
import { API_KEY } from '@env';

const baseImageUrl: any = "https://image.tmdb.org/t/p/w500/"
const baseUrl: string = "https://api.themoviedb.org/3/discover/movie/?api_key=";
// /movie/{movie_id}/watch/providers
const genreUrl: string = "&with_genres=";
// const providerUrl: string = "&with_watch_providers=";
const baseReleaseDate: string = "Release Date: ";
const providerUrl: string = "/watch/providers?api_key=5f9630b664fee3f1c639e0ae94090867&language=en-us"

const MovieDisplay = (movie: object) => {
  const [genreId, setGenreId] = useState();
  const [title, setTitle] = useState();
  const [movieImg, setMovieImg] = useState();
  const [overview, setOverview] = useState();
  const [releaseDate, setReleaseDate] = useState();


  const getProviders = (id: number) => {
    let providerId: number = id;
    let query: any = "https://api.themoviedb.org/3/movie/" + providerId + providerUrl;
    console.log(query);
    Axios.get(query)
      .then(res => {
        console.log(res.data.results.US.rent)
      })
      .catch(err => {
        console.log(err);
      })
  }

  const movieJeeves = (id: number) => {
    let pageNumber: number = Math.floor(Math.random() * 100);
    let query: any = baseUrl + API_KEY + genreUrl + id + "&page=" + pageNumber;
    let movie: any = {};
    console.log("PAGE NUMBER: ", pageNumber);
    Axios.get(query)
      .then(res => {
        // console.log(res);
        movie = res.data.results[Math.floor(Math.random() * res.data.results.length)];
        console.log("MOVIE: ", movie);
        getProviders(movie.id);
        // setGenreId(movie.id);
        setTitle(movie.original_title);
        setMovieImg(baseImageUrl + movie.poster_path);
        setOverview(movie.overview);
        formatRelease(movie.release_date);
      })
      .catch(err => {
        console.log(err);
      }) 
  }

  const truncate = (str: any , n: number) => {
    return str?.length > n ? str.substr(0, n -1) + ' ...' : str;
  } 
  
  const formatRelease = (releaseDate: string) => {
    let date = releaseDate.split("-");
    setReleaseDate(baseReleaseDate + date[0]);
  }

  return(
    <View style = {styles.container} >
      <Image style = {styles.movieImage} source={{uri: movieImg }} />
      <Text style = {styles.movieTitle} >{title}</Text>
      <Text style = {styles.releaseDate} >{releaseDate}</Text>
      <Text style = {styles.overview} >{truncate(overview, 300)}</Text>
      <GenreSelector onPress={(value: number) => movieJeeves(value)} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
  },
  releaseDate: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
  movieTitle: {
    color: '#1c1f1f',
    height: 40,
    paddingTop: 5,
    fontSize: 26,
    fontWeight: "900",
    textAlign: "center",
  },
  overview: {
    height: 250,
    fontSize: 18,
    fontWeight: "500",
    marginTop: 20,
    marginRight: 5,
    marginLeft: 5,
  },
  movieImage: {
    marginLeft: "1.5%",
    marginRight: "1.5%",
    width: 400,
    height: 400,
  },
}); 

export default MovieDisplay;
