import React from 'react';
import { Image, Linking, TouchableHighlight, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const height = Dimensions.get('window').height / 3;

const LinkImageView = styled.Image`
    width: 100%;
`;

const LinkImage = ({image}) => {
    return (
        <TouchableHighlight onPress={() => Linking.openURL('https://www.bobbibrowncosmetics.com/')}>
            <LinkImageView source={{uri: image}} style={{height}}/>
        </TouchableHighlight>
    )
}

export default LinkImage;