import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// my components
import TopIcons from './TopIcons';
import MainProperties from './MainProperties';
import OtherProperties from './OtherProperties';
import TabBarButtons from './TabBarButtons';

class Business extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	detailsTabContent = () => {
		screenWidth = Dimensions.get('window').width;
		let tabContentStyles = {
			addressContainer: {
				flexDirection: 'row',
				justifyContent: 'space-between',
				borderTopWidth: 1,
				borderBottomWidth: 1,
				paddingVertical: 5,
				borderColor: '#ccc',
				alignItems: 'center',
				paddingRight: 10
			},
			addressButton: {
				marginTop: 20,
				marginBottom: 10,
				paddingLeft: 10
			}
		};

		return (
			<View>
				<TouchableOpacity style={tabContentStyles.addressButton}>
					<View style={tabContentStyles.addressContainer}>
						<Text>
							<Text style={{ fontWeight: 'bold', color: '#000' }}>Address: </Text>
							<Text style={{ color: '#333', fontSize: 12 }}>1120 N Street Sacaramento</Text>
						</Text>
						<Icon size={18} name="angle-right" />
					</View>
				</TouchableOpacity>

				<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
					<TouchableOpacity
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: '#aaa',
							padding: 3,
							borderRadius: 5,
							minWidth: '25%'
						}}
					>
						<View style={{}}>
							<Icon size={18} name="angle-right" />
							<Text>Call</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: '#aaa',
							padding: 3,
							borderRadius: 5,
							minWidth: '25%'
						}}
					>
						<View style={{}}>
							<Icon size={18} name="angle-right" />
							<Text>Email</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: '#aaa',
							padding: 3,
							borderRadius: 5,
							minWidth: '25%'
						}}
					>
						<View>
							<Icon size={18} name="angle-right" />
							<Text>Website</Text>
						</View>
					</TouchableOpacity>
				</View>

				<ScrollView horizontal contentContainerStyle={{marginTop: 10}}>
					<Image
						style={{ width: screenWidth /2.4, borderRadius: 5, resizeMode: 'cover', marginLeft: 10 }}
						source={require('../../assets/images/love.jpg')}
					/>
					<Image
						style={{ width: screenWidth /2.4, borderRadius: 5, resizeMode: 'cover', marginLeft: 10 }}
						source={require('../../assets/images/love.jpg')}
					/>
					<Image
						style={{ width: screenWidth /2.4, borderRadius: 5, resizeMode: 'cover', marginLeft: 10 }}
						source={require('../../assets/images/love.jpg')}
					/>
				</ScrollView>
			</View>
		);
	};

	render() {
		return (
			<View style={styles.container}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<TopIcons />

					<MainProperties />

					<OtherProperties />

					<TabBarButtons />

					{this.detailsTabContent()}
				</ScrollView>
			</View>
		);
	}
}

export default Business;

const styles = {
	container: {
		backgroundColor: '#fff',
		justifyContent: 'center',
		flex: 1
	}
};
