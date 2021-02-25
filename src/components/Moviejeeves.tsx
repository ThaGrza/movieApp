import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


type MovieState = {
  image: string;
  title: string;
  description: string;
  id: number;
};
// similar movie function

const MovieJeeves = (id: number) => {
  alert("You clicked genre with " + id + " id.");
  // call api with id.
  // use math.random to get random movie from list.
  // set display state with random movie.
  return(
    <View/>
  )
}
export default MovieJeeves;
