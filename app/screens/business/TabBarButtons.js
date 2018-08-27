import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class TabBarButtons extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.text}> Details </Text>
				</TouchableOpacity>

				<TouchableOpacity style={[ styles.button, styles.borderedButton ]}>
					<Text style={styles.text}> Review </Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.button}>
					<Text style={styles.text}> Events </Text>
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
        borderColor:  '#0076ff',
        borderRadius: 3,
        marginHorizontal: 10,
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
