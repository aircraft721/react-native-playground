import React from 'react';
import { Image, Linking, TouchableHighlight, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const height = Dimensions.get('window').height / 3;

const LinkImageView = styled.Image`
    width: 100%;
`;

const TouchableHighlightView = styled.TouchableHighlight`
    margin-bottom: 50;
`;

export default class LinkImage extends React.Component {
    render(){
        return (
            <TouchableHighlightView onPress={() => Linking.openURL('https://www.bobbibrowncosmetics.com/')}>
                <LinkImageView source={{uri: 'http://www.themistymom.com/wordpress/wp-content/uploads/2015/03/bobbi-brown-top-products-picks.jpg'}} style={{height}}/>
            </TouchableHighlightView>
        )
    }
}