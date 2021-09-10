import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'
import MovieDisplay from './src/components/MovieDisplay'

export default function Container() {
  return (
    <View style={styles.container}>
      <Header />
      <MovieDisplay />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    // backgroundColor: '#0dd5ee',
    backgroundColor: 'white'
  },
});