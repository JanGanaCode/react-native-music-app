import React, { Component } from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import HomeScreenTabNavigator from './HomeScreenTabNavigator';

const InnerStackNavigator = createStackNavigator({
  TabNavigator: {screen: HomeScreenTabNavigator}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default InnerStackNavigator;
