import React from 'react';
import {Text, View, Linking} from 'react-native';
import styled from 'styled-components/native';
import { Octicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

const Square = styled.View`
  margin-top: 24;
  width: 100%;
  height: 50;
  background-color: black;
`;

const HeaderView = styled.View`
  display: flex;
  flex-direction: row;
  height: 50;
  justify-content: space-between;
  background-color: black;
  align-items: center;
  padding-left: 15;
  padding-right: 15;
`;

const TextHeader = styled.Text`
  color: white;
`;

const ViewFlex = styled.View`
  display: flex;
  flex: 1;
`;

const ShopView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default class Header extends React.Component {
    render() {
        return (
            <HeaderView>
                <ShopView>
                  <Octicons color={'white'} size={22} style={{paddingRight: 10}} name="three-bars" />
                  <FontAwesome color={'white'} size={22} name="search" />
                </ShopView>
                <TextHeader onPress={() => Linking.openURL('https://www.bobbibrowncosmetics.com/')}>BOBBI BROWN</TextHeader>
                <ShopView>
                    <MaterialIcons color={'white'} size={22} style={{paddingRight: 10}} name="location-on" />
                    <FontAwesome color={'white'} size={22} name="shopping-bag" />
                </ShopView>
            </HeaderView>
        );
    }
}