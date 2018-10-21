import React, { Component } from 'react'
import { ImageBackground, View, Text, StyleSheet, StatusBar } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Root } from 'native-base';
import { Font, AppLoading } from 'expo';

class LoginScreen extends Component {
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
        <ImageBackground source={require('../assets/img/login.jpeg')} style={{width: '100%', height: '100%'}}>
          <View style={styles.greetingContainer}>
            <Text style={styles.greetingText}>Log in</Text>
          </View>
          <View style={styles.formInputsContainer}>
            <Form>
              <Item floatingLabel rounded style={styles.formItem}>
                <Label style={styles.label}>Username</Label>
                <Input style={styles.input}/>
              </Item>
              <Item floatingLabel rounded style={styles.formItem}>
                <Label style={styles.label}>Password</Label>
                <Input secureTextEntry={true} style={styles.input}/>
              </Item>
              <View style={styles.forgottenPasswordContainer}>
                <Text style={styles.forgottenPasswordText}>Forgot your password?</Text>
              </View>
              <View style={styles.noAccountContainer}>
                <Text style={styles.noAccountText}
                      onPress={() => this.props.navigation.navigate('SignupScreen')}
                >
                  Don't have an account yet? Sign up here.
                </Text>
              </View>
            </Form>
          </View>
          <View style={ styles.buttons }>
            <Button rounded 
                    light 
                    onPress={() => this.props.navigation.navigate('InnerStackNavigation')}
                    style={styles.loginButton}
            >
              <Text style={styles.loginButtonText}>Log in</Text>
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
    top: '10%',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  greetingText: {
    color: '#fff',
    fontFamily: 'kaushan-script', 
    fontSize: 90
  },
  formInputsContainer: {
    position: 'absolute',
    top: '45%',
    left: 0,
    right: 0,
  },
  formItem: {
    width: '75%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    backgroundColor: 'rgba(127, 127, 127, .65)',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },
  label: {
    color: '#fff',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    top: -10,
    fontFamily: 'roboto-regular', 
  },
  input: {
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 20,
    color: '#fff',
    fontFamily: 'roboto-regular', 
  },
  forgottenPasswordContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  forgottenPasswordText: {
    color: '#fff',
    fontFamily: 'roboto-regular', 
    fontSize: 12,
  },
  noAccountContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  noAccountText: {
    color: '#fff',
    fontFamily: 'roboto-regular', 
    fontSize: 12,
  },
  buttons: {
    position: 'absolute',
    bottom: '10%',
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
    borderColor: '#000',
  },
  loginButtonText: {
    color: '#000',
    fontFamily: 'roboto-regular', 
    fontSize: 18
  },
})

export default LoginScreen;
