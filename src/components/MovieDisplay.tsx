import React from 'react';
import {View, Button, Image, Text, StyleSheet } from 'react-native';
import GenreSelector from './GenreSelector';

type MovieState = {
  image: string;
  title: string;
  description: string;
  id: number;
};

class MovieDisplay extends React.Component<MovieState>{
    state: MovieState = {
      image: 'placeholder',
      title: '',
      description: '',
      id: 0,
  };

  movieButton = ()  => {
    this.setState({image: "https://scitechdaily.com/images/Great-White-Shark-Smile.jpg"})
  };

  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.movieDispay}>
          <Image source={{
            uri: this.state.image}}
            style={{width: 400, height: 200}}/>
        <GenreSelector />
          <View style={styles.button}>
          <Button
            onPress={this.movieButton}
            title="Random Movie"
            />
          </View>
        </View>
      </View>
    );
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

export default MovieDisplay;