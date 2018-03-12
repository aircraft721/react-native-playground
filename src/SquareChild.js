import React from 'react';
import styled from 'styled-components/native';
import { View, Image } from 'react-native';

const Child = styled.View`
    flex-grow: 1;
    flex-basis: 50%;
    flex-wrap: wrap;
    aspect-ratio: 1;
`;

const ImageChild = styled.Image`
    resizeMode: cover;
    width: 100%;
    height: 100%;
`;  

const SquareChild = () => {
    return (
        <Child>
            <ImageChild source={{uri: 'https://s7d2.scene7.com/is/image/PetSmart/PB1201_STORY_CARO-Authority-HealthyOutside-DOG-20160818?$PB1201$'}} />
        </Child>
    )
}

export default SquareChild;