import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class TabBarButtons extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: 'details'
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity activeOpacity={1}
					style={[
						styles.button,
						{ backgroundColor: this.state.selected === 'details' ? '#0076ff' : 'transparent' }
					]}
					onPress={() => {
						this.setState({ selected: 'details' });
						// this.props.detailsPress();
					}}
				>
					<Text
						style={[
							styles.text,
							{ color: this.state.selected === 'details' ? '#fff' : '#0076ff' }
						]}
					> Details </Text>
				</TouchableOpacity>

				<TouchableOpacity activeOpacity={1}
					style={[
						[
							styles.button,
							{ backgroundColor: this.state.selected === 'review' ? '#0076ff' : 'transparent' }
						],
						styles.borderedButton
					]}
					onPress={() => {
						this.setState({ selected: 'review' });
						// this.props.reviewPress();
					}}
				>
					<Text
						style={[
							styles.text,
							{ color: this.state.selected === 'review' ? '#fff' : '#0076ff' }
						]}
					>
					Review </Text>
				</TouchableOpacity>

				<TouchableOpacity activeOpacity={1}
					style={[
						styles.button,
						{ backgroundColor: this.state.selected === 'events' ? '#0076ff' : 'transparent' }
					]}
					onPress={() => {
						this.setState({ selected: 'events' });
						// this.props.eventPress();
					}}
				>
					<Text
						style={[
							styles.text,
							{ color: this.state.selected === 'events' ? '#fff' : '#0076ff' }
						]}
					>
						{' '}
						Events{' '}
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default TabBarButtons;

const styles = {
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#0076ff',
		borderRadius: 3,
		marginHorizontal: 10
	},
	text: {
		fontWeight: 'bold',
		color: '#000',
		fontSize: 12,
		textAlign: 'center',
		color: '#0076ff'
	},
	button: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 3
	},
	borderedButton: {
		borderLeftWidth: 1,
		borderRightWidth: 1,
		borderColor: '#0076ff'
	}
};
