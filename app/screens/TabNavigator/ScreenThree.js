import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';

class ScreenThree extends Component {
  static navigationOptions = {
    drawerLabel: 'ScreenOne',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Screen Three</Text>
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

export default ScreenThree;
