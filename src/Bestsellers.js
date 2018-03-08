import React from 'react';
import { View, Text, Image, Linking, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';
import Stars from './Stars';
import Price from './Price';

const Root = styled.View`
    min-height: 180;
    display: flex;
    flex-direction: row;
    padding: 0px 20px;
`;

const ImageView = styled.View`
    flex: 1;
    background-color: red;
`;

const InfoView = styled.View`
    flex: 1;
    justify-content: space-between;
    background-color: white;
`;

const SmallText = styled.Text`
    font-size: 10;
    color: red;
`;

const ProductTitle = styled.Text`
    font-size: 16;
    color: black;
`;


const Bestsellers = () => {
    return (
        <Root>  
            <ImageView>
                <TouchableHighlight onPress={() => Linking.openURL('https://www.bobbibrowncosmetics.com/')}>
                    <Image source={{uri: 'https://www.bobbibrowncosmetics.com/media/export/cms/products/290x315/bb_prod_EGXR_290x315_0.jpg'}} style={{height: 180}} />
                </TouchableHighlight>
            </ImageView>
            <InfoView>  
                <SmallText>NEW</SmallText>
                <ProductTitle>SKIN LONG-WEAR WEIGHTLESS FOUNDATION SPF 15</ProductTitle>
                <Stars />
                <Price />
            </InfoView>
        </Root>
    );
};

export default Bestsellers;