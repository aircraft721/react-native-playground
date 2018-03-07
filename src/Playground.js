import React from 'react';

import { StyleSheet, Text, View, TextInput } from 'react-native';
import { SimpleLineIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { TabNavigator } from 'react-navigation';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';

const MainView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const T = styled.Text`
  color: green;
  font-size: 12;
`;

const I = styled.TextInput`
  width: 80%;
`;

class Playground extends React.Component {
    render() {
      return (
        <MainView>
            <T>Open up App.js to start working on your app!</T>
            <T>Open up App.js to start working on your app!</T>
            <I></I>
        </MainView>
      );
    }
}

export const RootStack = TabNavigator({
    Home: {
        screen: Playground,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => <SimpleLineIcons color={'red'} size={22} name="bubble" />
        })
    },
    Second: {
        screen: SecondScreen,navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons color={'red'} size={22} name="format-vertical-align-top" />
        })
    },
    Third: {
        screen: ThirdScreen,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons color={'red'} size={22} name="cellphone" />
        })
    }
},
{
    tabBarPosition: 'bottom',
    initialRouteName: 'Second',
    swipeEnabled: false,
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: 'black',
        },
        indicatorStyle: {
            backgroundColor: 'red'
        },
        showIcon: true,
        showLabel: false
    },
});

  
