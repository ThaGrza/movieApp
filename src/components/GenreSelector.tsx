import { Brightness } from 'expo';
import React from 'react';
import { View, StyleSheet, FlatList, SafeAreaView, TouchableHighlight, Text } from 'react-native';
import genres from '../../assets/genreInfo.json';




const GenreSelector = (props: any) => {

  return(
    <SafeAreaView style={styles.buttonContainer}>
      <FlatList showsHorizontalScrollIndicator={false} horizontal data={genres}
      renderItem={({ item }) => (
        <TouchableHighlight style={styles.flatList} onPress={(event) =>{props.onPress(item)}}>
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
    bottom: 0,
    display: 'flex',
  },
  flatList: {
    backgroundColor: 'rgb(189, 213, 234)', 
    margin: 5,
    borderRadius: 10,
    padding: 10
  },
  flatListText: {
    color: 'rgb(73, 88, 103)',
    fontWeight: '600',
    fontSize: 24,
    padding: 5,
  }
});
