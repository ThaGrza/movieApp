import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


type MovieState = {
  image: string;
  title: string;
  description: string;
  id: number;
};

class MovieJeeves extends React.Component<MovieState>{
  state: MovieState = {
    image: 'placeholder',
    title: '',
    description: '',
    id: 0,
  }
  render(){
    return(
      <View>
        <Text>Button</Text>
      </View>
    )
  }
};


export default MovieJeeves;