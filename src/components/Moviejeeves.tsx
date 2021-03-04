import React, {useEffect} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from './axios';

// similar movie function

const MovieJeeves = (id: number) => {
  useEffect(() => {
    const request = axios.get(id)
  })
  // use math.random to get random movie from list.
  // set display state with random movie.
  return(
    <View/>
  )
}
export default MovieJeeves;
