import React from 'react';
import styled from 'styled-components/native';
import { View, Text, Image, Dimensions } from 'react-native';
import SquareChild from './SquareChild';

const width = Dimensions.get('window').width - 30;

const V1 = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

const Square = () => {
    return (
        <V1 style={{width}}>
            <SquareChild />
            <SquareChild />
        </V1>
    )
}

export default Square;