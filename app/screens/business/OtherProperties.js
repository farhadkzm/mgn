import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';

const ratingProps = {
	disabled: false,
    maxStars: 5,
    starSize: 13,
    rating: 2,
    fullStarColor: '#fd9527',
    emptyStarColor: '#d9d5d2',
    containerStyle: {
        alignSelf: 'flex-start'
    },
    starStyle: {
        marginRight: 2,
    }
};

const componentName = ({ params }) => (
	<View style={styles.container}>
		<View style={{ flex: 1 }}>
			<StarRating {...ratingProps} disabled />
			<Text style={[styles.text, { alignSelf: 'flex-start' }]}>54 Rating</Text>
		</View>

		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text style={styles.text}>92k</Text>
			<Text style={styles.text}>Followers</Text>
		</View>

		<View style={{ flex: 1 }}>
			<Icon style={styles.heart} name="heart" />
		</View>
	</View>
);

export default componentName;

const styles = {
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10
	},
	text: {
		fontWeight: 'bold',
		color: '#000',
		fontSize: 11,
		textAlign: 'center',
		marginLeft: 5,
	},
	heart: {
		fontSize: 24,
		color: 'red',
		alignSelf: 'flex-end'
	}
};
