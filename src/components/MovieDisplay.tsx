import React, { useState, useEffect } from 'react';
import {View, Image, Text, StyleSheet, Button } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import GenreSelector from './GenreSelector';
import Axios from 'axios';
import { API_KEY } from '@env';

const baseImageUrl: any = "https://image.tmdb.org/t/p/w500/"
const baseUrl: string = "https://api.themoviedb.org/3/discover/movie/?api_key=";
// /movie/{movie_id}/watch/providers
const genreUrl: string = "&with_genres=";
// const providerUrl: string = "&with_watch_providers=";
const baseReleaseDate: any = "Release Date: ";
const providerUrl: string = "/watch/providers?api_key=5f9630b664fee3f1c639e0ae94090867&language=en-us"

const MovieDisplay = (movie: object) => {
  const [genreId, setGenreId] = useState();
  const [genreTitle, setGenreTitle] = useState();
  const [title, setTitle] = useState();
  // const [provider = [], setProvider] = useState();
  const [movieImg, setMovieImg] = useState();
  const [overview, setOverview] = useState();
  const [releaseDate, setReleaseDate] = useState();


  // const getProviders = (id: number) => {
  //   var provider: any = [];
  //   let providerId: number = id;
  //   let query: any = "https://api.themoviedb.org/3/movie/" + providerId + providerUrl;
  //   console.log(query);
  //   Axios.get(query)
  //     .then(res => {
  //       let providerArray = res.data.results.US.rent
  //       providerArray.forEach(function (arrayItem: any){
  //         console.log(arrayItem.provider_name)
  //      })
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }
  
  const setGenre = (value: any) => {
    setGenreId(value.id);
    setGenreTitle(value.name);
  }

  const movieJeeves = () => {
    let pageNumber: number = Math.floor(Math.random() * 100);
    let query: any = baseUrl + API_KEY + genreUrl + genreId + "&page=" + pageNumber;
    let movie: any = {};
    console.log("PAGE NUMBER: ", pageNumber);
    Axios.get(query)
      .then(res => {
        movie = res.data.results[Math.floor(Math.random() * res.data.results.length)];
        console.log("MOVIE: ", movie);
        // getProviders(movie.id);
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
  
  const formatRelease = (releaseDate: any) => {
    let date = releaseDate.split("-");
    setReleaseDate(baseReleaseDate + date[0]);
  }

  return(
    <View style = {styles.container} >
      <GestureRecognizer onSwipeLeft={(movieJeeves)}>
      <Text style = {styles.movieGenreTitle}>{genreTitle}</Text>
      <Image style = {styles.movieImage} source={{uri: movieImg }} />
      <View style = {styles.titleContainer }>
        <Text style = {styles.movieTitle} >{title}</Text>
        <Text style = {styles.releaseDate} >{releaseDate}</Text>
      </View>
      <View style = {styles.overviewContainer }>
        <Text style = {styles.overview} >{truncate(overview, 230)}</Text>
      </View>
      </GestureRecognizer>
      <GenreSelector onPress={(value: object) => {setGenre(value)}} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    backgroundColor: "rgb(247, 247, 255)"
    // backgroundColor: "red",


  },
  titleContainer: {
    height: 60,
  },
  movieTitle: {
    color: 'rgb(48, 51, 46)',
    paddingTop: 5,
    fontSize: 30,
    fontWeight: "900",
    textAlign: "center",
  },
  releaseDate: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
  movieGenreTitle: {
    fontWeight: "bold",
    fontSize: 36,
    color: 'rgb(60, 132, 180)',
    textAlign: "center"
  },
  overviewContainer: {
    height: 270,
    marginTop: 20,
    marginRight: 5,
    marginLeft: 5,
  },
  overview: {
    fontSize: 18,
    lineHeight: 25,
    fontWeight: "600",
  },
  movieImage: {
    alignSelf: 'center',
    width: 400,
    height: 400,
  },
}); 

export default MovieDisplay;
