import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator} from 'react-navigation';
import ScreenOne from './TabNavigator/ScreenOne';
import ScreenTwo from './TabNavigator/ScreenTwo';
import ScreenThree from './TabNavigator/ScreenThree';
import ScreenFour from './TabNavigator/ScreenFour';
import Icon from 'react-native-vector-icons/Ionicons'

const HomeScreenTabNavigator = createMaterialTopTabNavigator({
  ScreenOne: {
    screen: ScreenOne,
    navigationOptions: {
      tabBarLabel: 'Screen 1',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={24} />
      )
    }
  },
  ScreenTwo: {
    screen: ScreenTwo,
    navigationOptions: {
      tabBarLabel: 'Screen 2',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-settings" color={tintColor} size={24} />
      )
    }
  },
  ScreenThree: {
    screen: ScreenThree,
    navigationOptions: {
      tabBarLabel: 'Screen 3',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={24} />
      )
    }
  },
  ScreenFour: {
    screen: ScreenFour,
    navigationOptions: {
      tabBarLabel: 'Screen 4',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-settings" color={tintColor} size={24} />
      )
    }
  },
}, {
    initialRouteName: 'ScreenOne',
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: 'orange',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: '#f2f2f2',
        borderTopWidth: 0.5,
        borderTopColor: 'grey'
      },
      indicatorStyle: {
        height: 0
      },
      showIcon: true
    }
  })



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default HomeScreenTabNavigator;
