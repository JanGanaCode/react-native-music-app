import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native';

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title='Complete login' onPress={() => this.props.navigation.navigate('InnerStackNavigation')}/>
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

export default LoginScreen;
