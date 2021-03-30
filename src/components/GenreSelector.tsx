import React from 'react';
import { View, StyleSheet, FlatList, SafeAreaView, TouchableHighlight, Text } from 'react-native';
import genres from '../../assets/genreInfo.json';

const GenreSelector = (props) => {
  return(
    <SafeAreaView style={styles.buttonContainer}>
      <FlatList horizontal data={genres}
      renderItem={({ item }) => (
        <TouchableHighlight onPress={event => props.onPress(item.id)}>
          <View>
            <Text style={styles.button}>{item.name}</Text>
          </View>
        </TouchableHighlight>
      )}
      />
    </SafeAreaView>
  );
};

export default GenreSelector;

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
  },
  button: {
    backgroundColor: "#FE71D8",
    fontSize: 15,
    width: '100%',
    margin: 5,
    marginRight: 2,
    borderRadius: 5,
    padding: 5,
  }
});
