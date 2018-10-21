import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';

class ScreenOne extends Component {
  static navigationOptions = {
    drawerLabel: 'ScreenOne',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Screen One</Text>
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

export default ScreenOne;
