import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import StarRating from 'react-native-star-rating';

const screenWidth = Dimensions.get('window').width;

const styles = {
	img: {
		width: 50,
		height: 50,
		resizeMode: 'cover'
	},
	textContainer: {
		flex: 1
	},
	itemsContainer: {
		flexDirection: 'row'
	},
	column: {
		width: screenWidth - 20,
	}
};

const ratingProps = {
	disabled: false,
	maxStars: 5,
	starSize: 13,
	rating: 2,
	fullStarColor: 'gold',
	emptyStarColor: '#aaa'
};

const RelatedList = ({ params }) => (
	<View>
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center'
			}}
		>
			<Text>Related</Text>
			<Text>See All</Text>
		</View>
		<ScrollView horizontal showsHorizontalScrollIndicator={false}>
			<View style={styles.column}>
				<TouchableOpacity>
					<View style={styles.itemsContainer}>
						<Image style={styles.img} source={require('../../assets/images/love.jpg')} />
						<View style={styles.textContainer}>
							<Text>Dr. John Smith</Text>
							<Text>Dr. John Smith</Text>
							<StarRating {...ratingProps} disabled />
						</View>
					</View>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={styles.itemsContainer}>
						<Image style={styles.img} source={require('../../assets/images/love.jpg')} />
						<View style={styles.textContainer}>
							<Text>Dr. John Smith</Text>
						</View>
					</View>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={styles.itemsContainer}>
						<Image style={styles.img} source={require('../../assets/images/love.jpg')} />
						<View style={styles.textContainer}>
							<Text>Dr. John Smith</Text>
						</View>
					</View>
				</TouchableOpacity>
			</View>

			<View style={styles.column}>
				<TouchableOpacity>
					<View style={styles.itemsContainer}>
						<Image style={styles.img} source={require('../../assets/images/love.jpg')} />
						<View style={styles.textContainer}>
							<Text>Dr. John Smith</Text>
							<Text>Dr. John Smith</Text>
							<StarRating {...ratingProps} disabled />
						</View>
					</View>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={styles.itemsContainer}>
						<Image style={styles.img} source={require('../../assets/images/love.jpg')} />
						<View style={styles.textContainer}>
							<Text>Dr. John Smith</Text>
						</View>
					</View>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={styles.itemsContainer}>
						<Image style={styles.img} source={require('../../assets/images/love.jpg')} />
						<View style={styles.textContainer}>
							<Text>Dr. John Smith</Text>
						</View>
					</View>
				</TouchableOpacity>
			</View>
		</ScrollView>
	</View>
);

export default RelatedList;
