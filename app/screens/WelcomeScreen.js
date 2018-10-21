import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native';

class WelcomeScreen extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='Log in' onPress={() => this.props.navigation.navigate('LoginScreen')}/>
        <Button title='Sign Up' onPress={() => this.props.navigation.navigate('SignupScreen')}/>
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

export default WelcomeScreen;
