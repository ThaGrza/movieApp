import React from 'react';
import { View, StyleSheet, FlatList, SafeAreaView, TouchableHighlight, Text } from 'react-native';
import genres from '../../assets/genreInfo.json';

const GenreSelector = (props) => {
  return(
    <SafeAreaView style={styles.buttonContainer}>
      <FlatList showsHorizontalScrollIndicator={false} horizontal data={genres}
      renderItem={({ item }) => (
        <TouchableHighlight style={styles.flatList} onPress={event => props.onPress(item.id)}>
          <View>
            <Text style={styles.flatListText}>{item.name}</Text>
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
    position: 'absolute',
    bottom: -100,
    display: 'flex',
  },
  flatList: {
    backgroundColor: "#FE71D8",
    marginRight: 10,
    borderRadius: 5,
  },
  flatListText: {
    fontWeight: '600',
    fontSize: 18,
    padding: 5,
  }
});
