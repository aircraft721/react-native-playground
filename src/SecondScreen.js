import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import styled from 'styled-components/native';
import Header from './Header';
import Carousel from './Carousel';
import LinkImage from './LinkImage';
import LinkImageSecond from './LinkImageSecond';
import Capri from './Capri';
import Comfortable from './Comfortable';
import Bestsellers from './Bestsellers';
import Button from './Button';
import Square from './Square';

const ViewFlex = styled.View`
  display: flex;
  flex: 1;
`;

const images = {
  first: 'http://www.themistymom.com/wordpress/wp-content/uploads/2015/03/bobbi-brown-top-products-picks.jpg',
  second: 'http://www.theshoppesatcollegehills.com/wp-content/uploads/2017/12/Brown.jpg',
  third: 'http://urbanwoman.ro/wp-content/uploads/2016/12/bobbi-brown-cosmetics-618x455.jpg',
  forth: 'http://luxurylaunches.com/mumbai/wp-content/uploads/2014/12/bobbi-brown-mumbai.jpg',
};

const SecondScreen = () => {
  return (
    <ScrollView>
        <Header />
        <Carousel />
        <Capri />
        <LinkImage image={images.first}/>
        <Comfortable />
        <LinkImage image={images.second}/>
        <Comfortable />
        <LinkImage image={images.third}/>
        <Comfortable />
        <LinkImage image={images.forth}/>
        <Bestsellers />
        <Square />
    </ScrollView>
  );
}

export default SecondScreen;