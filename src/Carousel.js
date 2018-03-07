import React from 'react';
import { View, Text, Image, ScrollView, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const CarouselView = styled.View`
    margin-bottom: 50;
`;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height / 3;

export default class Carousel extends React.Component {
    render(){
        return (
            <CarouselView>
                <ScrollView 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                >
                    <Image source={{uri: 'https://s7d2.scene7.com/is/image/PetSmart/PB1201_STORY_CARO-Authority-HealthyOutside-DOG-20160818?$PB1201$'}} style={{height, width}} />
                    <Image source={{uri: 'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi'}} style={{height, width}} />
                    <Image source={{uri: 'http://cdn3-www.dogtime.com/assets/uploads/2011/01/file_23262_entlebucher-mountain-dog-300x189.jpg'}} style={{height, width}} />         
                </ScrollView>
            </CarouselView>
        );
    }
}