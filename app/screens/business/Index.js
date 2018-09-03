import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, Dimensions, LayoutAnimation, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// my components
import TopIcons from './TopIcons';
import MainProperties from './MainProperties';
import OtherProperties from './OtherProperties';
import TabBarButtons from './TabBarButtons';
import RelatedList from './RelatedList';
import ReviewTabContent from './ReviewTabContent';

class Business extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ellips: true,
			numberOfLinesExpanded: false,
			moreOrLess: true
		};
	}

	componentDidUpdate() {
		LayoutAnimation.spring();
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
			},
			ellipsText: {
				lineHeight: 22
			},
			ellipsContainer: {
				alignContent: 'flex-start',
				justifyContent: 'flex-start',
				flexWrap: 'wrap'
			},
			descriptionTitle: {
				fontSize: 18,
				color: '#000',
				marginBottom: 10,
				marginTop: 15
			},
			numberOfLines: this.state.numberOfLinesExpanded ? null : 7
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
							backgroundColor: '#f0eff5',
							padding: 4,
							borderRadius: 5,
							minWidth: '25%',
						}}
					>
						<View style={{ flex: 1, alignItems: 'center' }}>
							<Icon size={18} name="phone" style={{ marginBottom: 5 }} color="#0076ff" />
							<Text style={{ color: '#0076ff' }}>Call</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							backgroundColor: '#f0eff5',
							padding: 4,
							borderRadius: 5,
							minWidth: '25%',
						}}
					>
						<View style={{ flex: 1, alignItems: 'center' }}>
							<Icon size={18} name="envelope" style={{ marginBottom: 5 }} color="#0076ff" />
							<Text style={{ color: '#0076ff' }}>Email</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							backgroundColor: '#f0eff5',
							padding: 4,
							borderRadius: 5,
							minWidth: '25%'
						}}
					>
						<View style={{ flex: 1, alignItems: 'center' }}>
							<Icon size={22} name="compass" style={{ marginBottom: 5 }} color="#0076ff" />
							<Text style={{ color: '#0076ff' }}>Website</Text>
						</View>
					</TouchableOpacity>
				</View>

				<ScrollView horizontal contentContainerStyle={{ marginTop: 10 }}>
					<Image
						style={{ width: screenWidth / 2.4, borderRadius: 5, resizeMode: 'cover', marginLeft: 10 }}
						source={require('../../assets/images/love.jpg')}
					/>
					<Image
						style={{ width: screenWidth / 2.4, borderRadius: 5, resizeMode: 'cover', marginLeft: 10 }}
						source={require('../../assets/images/love.jpg')}
					/>
					<Image
						style={{ width: screenWidth / 2.4, borderRadius: 5, resizeMode: 'cover', marginLeft: 10 }}
						source={require('../../assets/images/love.jpg')}
					/>
				</ScrollView>

				<View style={{ paddingHorizontal: 10 }}>
					<Text style={tabContentStyles.descriptionTitle}>Description</Text>
					<View style={tabContentStyles.ellipsContainer}>
						<Text style={tabContentStyles.ellipsText} numberOfLines={tabContentStyles.numberOfLines}>
							On the other hand, we denounce with righteous indignation and dislike men who are so
							beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that
							they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to
							those who fail in their duty through weakness of will, which is the same as saying through
							shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a
							free hour, when our power of choice is untrammeled and when nothing prevents our being able
							to do what we like best, every pleasure is to be welcomed and every pain avoided
						</Text>
						<TouchableOpacity
							activeOpacity={1}
							onPress={() =>
								this.setState({
									numberOfLinesExpanded: !this.state.numberOfLinesExpanded,
									moreOrLess: !this.state.moreOrLess
								})}
						>
							<Text style={{}}>{this.state.moreOrLess ? 'Read more' : 'Show less'}</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	};

	reviewPress = () => {
		this.setState({
			tab: 'review'
		})
	}

	detailsPress = () => {
		this.setState({
			tab: 'detail'
		})
	}

	eventPress = () => {
		this.setState({
			tab: 'event'
		})
	}

	render() {
		console.log(this.state)
		return (
			<View style={styles.container}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<TopIcons />

					<MainProperties />

					<OtherProperties />

					<TabBarButtons
						reviewPress={() => this.reviewPress()}
						detailsPress={() => this.detailsPress()}
						eventPress={() => this.eventPress()}
					/>

					{this.detailsTabContent()}

					{/* <ReviewTabContent /> */}



					<RelatedList />
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
	},
	image: {
		width: 45,
		height: 45,
		borderRadius: 45,
		resizeMode: 'cover',
		margin: 5,
		borderWidth: 1,
		borderColor: '#c4c4c5',

	}
};
