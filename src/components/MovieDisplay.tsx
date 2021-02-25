import React from 'react';
import {View, Button, Image, Text, StyleSheet } from 'react-native';

// turn into class for holding movie state / info.
const MovieDisplay = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.movieDispay}>Movie Image Here.</Text>
    </View>
  );
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
  movieDispay: {
    // styles
  }
}); 

export default MovieDisplay;