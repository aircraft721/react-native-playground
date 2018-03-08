import React from 'react';
import { TouchableOpacity, View, Alert, Text } from 'react-native';
import styled from 'styled-components/native';

const ButtonView = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-width: 1;
    border-color: black;
    padding: 5px 15px;
`;

const ViewStyle = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;
`;


const onButtonPress = () => {
    Alert.alert('Button has been pressed');
}


const Button = ({text}) => {
    return (
        <ViewStyle>
            <TouchableOpacity onPress={onButtonPress}>
                <ButtonView>
                    <Text>    
                        {text}
                    </Text>
                </ButtonView>
            </TouchableOpacity>
        </ViewStyle>
        
    )
}

export default Button;