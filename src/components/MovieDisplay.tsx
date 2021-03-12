import React from 'react';
import {View, Button, Image, Text, StyleSheet } from 'react-native';


// ADD TO IMAGE SOURCE + IMG STATE FOR POSTER
// https://image.tmdb.org/t/p/w500/

type Moviestate = {
  title: string;
  movieImg: string;
  description: string;
  date: number;
}
export default class MovieDisplay extends React.Component<Moviestate>{
    state: Moviestate = {
      title: "",
      movieImg: "",
      description: "",
      date: 0
    }
    movieSetter = (movie: any) => {
      this.setState({title: movie.original_title});
      this.setState({movieImg: movie.poster_path});
      this.setState({description: movie.overview});
      this.setState({date: movie.release_date});
      console.log("THIS IS BEING LOGGED FROM MOVIEDISPLAY COMP");
      console.log(this.state.title);
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