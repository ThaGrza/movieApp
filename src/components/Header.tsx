import React from 'react'
import { View, StyleSheet, Text } from 'react-native';


const Header = () => {
  return(
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>GUMBALL MOVIES</Text>
      <Text style={styles.headerSubText}>Randomize Your Movie Night</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "pink",
    paddingTop: 100,
    paddingBottom: 20,
    justifyContent: "center",
    borderRadius: 20
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 36,
    paddingBottom: 10 
  },
  headerSubText: {
    fontWeight: "400",
    fontSize: 18
  }
})

export default Header
