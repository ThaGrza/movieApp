import React from 'react'
import { View, StyleSheet, Text } from 'react-native';


const Header = () => {
  return(
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>MOVIE JEEVES</Text>
      <Text style={styles.headerSubText}>Randomize Your Movie Night</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 10,
    justifyContent: "center",
    borderRadius: 20
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 36,
    color: 'red', 
  },
  headerSubText: {
    fontWeight: '600',
    color: 'red', 
    fontSize: 19
  }
})

export default Header
