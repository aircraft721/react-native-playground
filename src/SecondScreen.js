import React from 'react';
import { View, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Header from './Header';
import Carousel from './Carousel';
import LinkImage from './LinkImage';
import LinkImageSecond from './LinkImageSecond';
import Contact from './Contact';

const ViewFlex = styled.View`
  display: flex;
  flex: 1;
`;

export default class SecondScreen extends React.Component {
    render() {
      return (
        <ScrollView>
            <Header />
            <Carousel />
            <LinkImage />
            <LinkImageSecond />
            <Contact />
        </ScrollView>
      );
    }
}