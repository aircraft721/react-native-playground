import React from 'react';
import StarRating from 'react-native-star-rating';

export default class Stars extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            starCount: 5
        }
    }

    onStarRatingPress = (rating) => {
        this.setState({
            starCount: rating
        })
    }

    render(){
        return (
            <StarRating
                disabled={false}
                maxStars={5}
                rating={this.state.starCount}
                selectedStar={(rating) => this.onStarRatingPress(rating)}
                containerStyle={{width: 50}}
            />
        );
    }
}