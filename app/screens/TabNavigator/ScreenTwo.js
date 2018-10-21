import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';

class ScreenTwo extends Component {
  static navigationOptions = {
    drawerLabel: 'ScreenTwo',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Screen Two</Text>
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

export default ScreenTwo;
