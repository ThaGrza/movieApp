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
    backgroundColor: '#ec1b35', 
    margin: 5,
    borderRadius: 10,
    padding: 10
  },
  flatListText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 24,
    padding: 5,
  }
});
