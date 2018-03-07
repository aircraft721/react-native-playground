import React from 'react';
import { Image, Linking, TouchableHighlight, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const height = Dimensions.get('window').height / 4.5;

const LinkImageView = styled.Image`
    width: 100%;
`;

export default class LinkImageSecond extends React.Component {
    render(){
        return (
            <TouchableHighlight onPress={() => Linking.openURL('https://www.bobbibrowncosmetics.com/')}>
                <LinkImageView source={{uri: 'https://www.beautyminded.be/wp-content/uploads/2015/09/IMG_9842-copy-1024x683.jpg'}} style={{height}}/>
            </TouchableHighlight>
        )
    }
}