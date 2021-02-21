import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SearchButton = () => {
    const popup = () => {
        alert("Andrew is so cool");
    }
    return (
        <View style={styles.buttonContainer}>
            <Button title="Search" onPress={() => {popup()}}
            />
        </View>
    )
};


const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "blue",
        width: 82,
        borderRadius: 6,
    },
  });


export default SearchButton;