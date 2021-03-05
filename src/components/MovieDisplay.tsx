import React from 'react';
import {View, Button, Image, Text, StyleSheet } from 'react-native';

type Moviestate = {
  title: string;
  id: number;
  movieImg: string;
  description: string;
  date: number;
  cast: string;
}
export default class MovieDisplay extends React.Component<Moviestate>{
    state: Moviestate = {
      title: "",
      id: 0,
      movieImg: "",
      description: "",
      date: 0,
      cast: "",
    }
  render(){
    return(
    <View>
      <Text>Movie DisplayIODJGOIDFJGOJDFJIOI Image</Text>
    </View>
    )
  }
}


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
  movieDispay: {
    // styles
  }
}); 