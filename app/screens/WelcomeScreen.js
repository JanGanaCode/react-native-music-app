import React, { Component } from 'react'
import { ImageBackground, View, Text, StyleSheet, StatusBar } from 'react-native';
import { Button } from 'native-base';
import { Font, AppLoading } from 'expo';
import { Root } from "native-base";

class WelcomeScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true 
    }
  };

  async componentWillMount() {
    await Font.loadAsync({
      'roboto-regular': require('./../assets/fonts/Roboto-Regular.ttf'),
      'roboto-bold': require('./../assets/fonts/Roboto-Bold.ttf'),
      'kaushan-script': require('./../assets/fonts/KaushanScript-Regular.ttf'),
    });
    this.setState({ loading: false });
  }

  static navigationOptions = {
    header: null
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={require('../assets/img/welcome.jpeg')} style={{width: '100%', height: '100%'}}>
          <View style={styles.greetingContainer}>
            <Text style={styles.greetingText}>Hello!</Text>
          </View>
          <View style={ styles.buttons }>
            <Button rounded 
                    light 
                    onPress={() => this.props.navigation.navigate('LoginScreen')}
                    style={styles.loginButton}
            >
              <Text style={styles.loginButtonText}>Log in</Text>
            </Button>
            <View style={styles.noAccountContainer}>
              <Text style={styles.noAccountText}>Don't have an account yet?</Text>
            </View>
            <Button 
                    rounded 
                    light 
                    onPress={() => this.props.navigation.navigate('SignupScreen')}
                    style={styles.signupButton}
            >
              <Text style={styles.signupButtonText}>Sign Up</Text>
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
  greetingContainer: {
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  greetingText: {
    color: '#fff',
    fontFamily: 'kaushan-script', 
    fontSize: 110
  },
  buttons: {
    position: 'absolute',
    bottom: '15%',
    left: 0,
    right: 0
  },
  loginButton: {
    backgroundColor: 'rgba(255, 255, 255, .65)',
    justifyContent: 'center',
    width: '70%',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 50,
    borderWidth: 1,
    borderColor: '#fff',
  },
  signupButton: {
    backgroundColor: 'rgba(127, 127, 127, .15)',
    width: '70%',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 50,
    borderWidth: 1,
    borderColor: '#fff',
  },
  loginButtonText: {
    color: '#333',
    fontFamily: 'roboto-regular', 
    fontSize: 18
  },
  signupButtonText: {
    color: '#fff',
    fontFamily: 'roboto-regular', 
    fontSize: 18
  },
  noAccountContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  noAccountText: {
    color: '#fff',
    fontFamily: 'roboto-regular', 
    fontSize: 12,
  }
})

export default WelcomeScreen;
