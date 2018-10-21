import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';

class ScreenFour extends Component {
  static navigationOptions = {
    drawerLabel: 'ScreenOne',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Screen Four</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default ScreenFour;
