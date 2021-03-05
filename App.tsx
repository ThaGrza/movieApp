import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'
import MovieDisplay from './src/components/MovieDisplay'
import GenreSelector from './src/components/GenreSelector';





export default function Container() {
  return (
    <View style={styles.container}>
      <Header />
      <MovieDisplay />
      <GenreSelector />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
