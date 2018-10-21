import React, { Component } from 'react'
import { ImageBackground, View, Text, StyleSheet, StatusBar } from 'react-native';
import { Form, Item, Input, Label, Button, Root } from 'native-base';
import { Font, AppLoading } from 'expo';

class SignupScreen extends Component {
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
        <ImageBackground source={require('../assets/img/signup.png')} style={{width: '100%', height: '100%'}}>
          <View style={styles.greetingContainer}>
            <Text style={styles.greetingText}>Sign up</Text>
          </View>
          <View style={styles.formInputsContainer}>
            <Form>
              <Item floatingLabel rounded style={styles.formItem}>
                <Label style={styles.label}>Username</Label>
                <Input style={styles.input}/>
              </Item>
              <Item floatingLabel rounded style={styles.formItem}>
                <Label style={styles.label}>E-mail</Label>
                <Input style={styles.input}/>
              </Item>
              <Item floatingLabel rounded style={styles.formItem}>
                <Label style={styles.label}>Password</Label>
                <Input secureTextEntry={true} style={styles.input}/>
              </Item>
              <Item floatingLabel rounded style={styles.formItem}>
                <Label style={styles.label}>Confirm password</Label>
                <Input secureTextEntry={true} style={styles.input}/>
              </Item>
              <View style={styles.haveAccountContainer}>
                <Text style={styles.haveAccountText}
                      onPress={() => this.props.navigation.navigate('LoginScreen')}
                >
                  Already have an account? <Text style={styles.loginLink}>Log in here.</Text>
                </Text>
              </View>
              <View style={styles.termsContainer}>
                <Text style={styles.termsText}
                      onPress={() => this.props.navigation.navigate('SignupScreen')}
                >
                  By clicking the Sign up button you agree to our <Text style={styles.termsLink}>Terms & Conditions</Text> and <Text style={styles.termsLink}>Privacy Policy</Text>.
                </Text>
              </View>
            </Form>
          </View>
          <View style={ styles.buttons }>
            <Button rounded 
                    light 
                    onPress={() => this.props.navigation.navigate('InnerStackNavigation')}
                    style={styles.signupButton}
            >
              <Text style={styles.signupButtonText}>Sign up</Text>
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
    top: '8%',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  greetingText: {
    color: '#fff',
    fontFamily: 'kaushan-script', 
    fontSize: 85
  },
  formInputsContainer: {
    position: 'absolute',
    top: '26%',
    left: 0,
    right: 0,
  },
  formItem: {
    width: '75%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 15,
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
  haveAccountContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  haveAccountText: {
    color: '#fff',
    fontFamily: 'roboto-regular', 
    fontSize: 14,
  },
  loginLink: {
    textDecorationLine: 'underline'
  },
  termsContainer : {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%',
  },
  termsText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'roboto-regular', 
    fontSize: 11,
  },
  termsLink: {
    textDecorationLine: 'underline'
  },
  buttons: {
    position: 'absolute',
    bottom: '7%',
    left: 0,
    right: 0
  },
  signupButton: {
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
  signupButtonText: {
    color: '#000',
    fontFamily: 'roboto-regular', 
    fontSize: 18
  },
})

export default SignupScreen;
