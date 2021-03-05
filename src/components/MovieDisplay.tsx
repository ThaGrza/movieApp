import React from 'react';
import {View, Button, Image, Text, StyleSheet } from 'react-native';

type Moviestate = {
  title: string;
  id: number;
  movieImg: string;
  description: string;
  date: number;
}
export default class MovieDisplay extends React.Component<Moviestate>{
    state: Moviestate = {
      title: "",
      id: 0,
      movieImg: "",
      description: "",
      date: 0
    }
  render(){
    return(
    <View style = {styles.movieImage} >
      <Image style = {styles.movieImage} source={{uri: "https://scitechdaily.com/images/Great-White-Shark-Smile.jpg" }} />
      <Text style = {styles.movieInfo} >Movie harlow Image</Text>
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
  movieInfo: {
    // css stuff
  },
  movieImage: {
    width: 400,
    height: 300,
  }
}); 