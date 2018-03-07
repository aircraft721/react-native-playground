import React from 'react';
import { Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

const ContactView = styled.View`
    height: 55;
    width: 100%;
    background-color: grey;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 40;
`;

const TextView = styled.Text`
    padding-left: 10;
`;

const Contact = () => {
    return (
        <ContactView>
            <MaterialIcons color={'black'} size={32} name="local-phone" />
            <TextView>LLAMANOS AL 074541253252</TextView>
        </ContactView>
    )
};

export default Contact;