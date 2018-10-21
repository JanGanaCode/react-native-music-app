import React, { Component } from 'react'
import { ImageBackground, View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';

class WelcomeScreen extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/img/welcome.jpg')} style={{width: '100%', height: '100%'}}>
          <View style={ styles.buttons }>
            <Button rounded 
                    light 
                    onPress={() => this.props.navigation.navigate('LoginScreen')}
                    style={styles.loginButton}
            >
              <Text>Log in</Text>
            </Button>
            <Button 
                    rounded 
                    light 
                    onPress={() => this.props.navigation.navigate('SignupScreen')}
                    style={styles.signupButton}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </Button>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    position: 'absolute',
    bottom: '20%',
    left: 0,
    right: 0
  },
  loginButton: {
    backgroundColor: 'rgba(173, 173, 173, .5)',
    justifyContent: 'center',
    width: '70%',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  signupButton: {
    backgroundColor: 'rgba(0, 67, 255, .5)',
    width: '70%',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonText: {
    color: '#fff',
  }
})

export default WelcomeScreen;
