import React from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Button from './Button';

const TextView = styled.Text`
    font-size: 22;
    line-height: 25;
`;

const SmallText = styled.Text`
    font-size: 12;
`;

const ViewStyle = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 15px;
    padding-bottom: 23px;
`;

const ButtonView = styled.View`
    background-color: black;
    border-width: 1;
    border-color: black;
    padding: 5px 15px;
`;

const TextWrap = styled.View`
    display: flex;
    align-items: center;
    margin-bottom: 7;
`;

const onButtonPress = () => {
    Alert.alert('Button has been pressed');
}

const Comfortable = () => {
    return (    
        <ViewStyle>
            <TextWrap>
                <TextView>COMFORTABLE,</TextView>
                <TextView>BREATHABLE, WEIGHTLESS</TextView>
            </TextWrap>
            <TextWrap>
                <SmallText>New Sking Long-Wear Weightless</SmallText>
                <SmallText>Foundation SPF 15</SmallText>
            </TextWrap>
            <Button text='SHOP NOW' />
        </ViewStyle>
    );
}

export default Comfortable;