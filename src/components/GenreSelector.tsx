import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import MovieJeeves from './MovieJeeves';
import genres from '../../assets/genreInfo.json';


const GenreSelector = () => {

  
  return(
    <View style={styles.buttonContainer}>
      {genres.map((genre) =>
      <Button key={genre.id}
      title={genre.name}
      onPress={() => MovieJeeves(genre.id)}
      />)}
    </View>
  );
};

export default GenreSelector;

const styles = StyleSheet.create({
  genreButtons: {
  },
  buttonContainer: {
    display: "flex",
    // backgroundColor: "yellow",
  }
});
