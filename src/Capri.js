import React from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Button from './Button';

const TextView = styled.Text`
    font-size: 22;
    margin-bottom: 7;
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
    background-color: white;
    border-width: 1;
    border-color: black;
    padding: 5px 15px;
`;

const onButtonPress = () => {
    Alert.alert('Button has been pressed');
}

const Capri = () => {
    return (    
        <ViewStyle>
            <TextView>DREAMING OF CAPRI</TextView>
            <Button text='SHOP THE NEW COLLECTION' />
        </ViewStyle>
    );
}

export default Capri;