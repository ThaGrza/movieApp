import React from 'react';
import {View, Button, Image, Text, StyleSheet } from 'react-native';

type MovieState = {
  image: string;
  title: string;
  description: string;
  id: number;
};


class MovieJeeves extends React.Component<MovieState>{
  state: MovieState = {
    image: '',
    title: '',
    description: '',
    id: 0,
  };

  movieButton() {
    alert("RANDOM MOVIE");
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.image}/>
        <View style={styles.button}>
        <Button
          onPress={this.movieButton}
          title="Random Movie"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
  },
  button: {
    backgroundColor: "red",
    display: "flex",
    alignContent: "center",
    width: 200,
    marginLeft: 100,
    marginTop: 100,

  }
}); 

export default MovieJeeves;