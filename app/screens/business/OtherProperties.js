import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';

const ratingProps = {
	disabled: false,
	maxStars: 5,
	starSize: 13,
	rating: 2,
	fullStarColor: 'gold',
	emptyStarColor: '#aaa'
};

const componentName = ({ params }) => (
	<View style={styles.container}>
		<View>
			<StarRating {...ratingProps} disabled />
			<Text style={styles.text}>54 Rating</Text>
		</View>

		<View>
			<Text style={styles.text}>92k</Text>
			<Text style={styles.text}>Followers</Text>
		</View>

		<Icon style={styles.heart} name="heart" />
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
        textAlign: 'center'
    },
    heart: {
        fontSize: 24,
        color: 'red'
    }
};
