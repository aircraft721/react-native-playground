import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const Root = styled.View`
    borderBottomColor: black;
    borderBottomWidth: 1;
    borderTopColor: black;
    borderTopWidth: 1;
    padding: 8px 0px;
`;

const Price = () => {
    return (
        <Root>
            <Text>$45.00</Text>
        </Root>
    );
}

export default Price;