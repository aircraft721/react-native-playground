import React from 'react';
import { Text, View, Image, FlatList, ActivityIndicator } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

const Root = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: black;
`;

const TextView = styled.Text`
  color: white;
`;

const V = styled.View`
	display: flex;
	flex-direction: row;
	background-color: black;
	padding: 10px; 
	border-bottom-width: 1; 
	border-bottom-color: #696969; 
	justify-content: space-between;
	align-items: center;
`;

const V2 = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const City = styled.Text`
	font-size: 10;
	color: #696969;
`;

const ImageView = styled.Image`
	width: 30;
	height: 30;
	border-radius: 100;
	margin: 0px 5px 0px 0px;
`;

export default class ThirdScreen extends React.Component {
    state= { 
		data: [],
		page: 0,
		loading: false,
	};

	componentWillMount() {
		this.fetchData();
	}
	
	fetchData = async() => {
		this.setState({ loading: true });
		const response = await fetch(`https://randomuser.me/api?results=20&seed=hi&page=${this.state.page}`);
		const json = await response.json();
		this.setState(state => ({
			data: [...state.data, ...json.results], 
			loading: false 
		}));
	}

	handleEnd = () => {
		this.setState(state => ({ page: state.page + 1 }), () => this.fetchData());
	}

    render() {
		return (
			<Root>
				<FlatList
					style={{width: '100%'}}
					data={this.state.data}
					onEndReached={() => this.handleEnd()}
					onEndReachedThreshold={0}
					ListFooterComponent={() => this.state.loading ? null : <ActivityIndicator color='red' size='large' animating={true}/>}
					keyExtractor={(x, i) => i}
					renderItem={({ item }) =>
					<V>
						<V2>
							<ImageView source={{uri: item.picture.thumbnail}}/>
							<View>
								<TextView>
									{`${item.name.first} ${item.name.last}`}
								</TextView>
								<City uppercase={false}>
									{item.location.city}
								</City>
							</View>
						</V2>
						<SimpleLineIcons color={'#696969'} size={14} name="arrow-right" />
					</V>
					}
				/>
			</Root>
		);
    }
}