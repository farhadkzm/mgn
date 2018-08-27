import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import TopIcons from './TopIcons';
import MainProperties from './MainProperties';
import OtherProperties from './OtherProperties';
import TabBarButtons from './TabBarButtons';

class Business extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		
		return (
			<View style={styles.container}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<TopIcons />

					<MainProperties />

                   
                    <OtherProperties/>

                     <TabBarButtons/>

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
