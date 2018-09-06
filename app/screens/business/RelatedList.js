import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import StarRating from 'react-native-star-rating';

const screenWidth = Dimensions.get('window').width;

const styles = {
	img: {
		width: 60,
		height: 60,
		resizeMode: 'cover',
		marginRight: 5,
		borderRadius: 5,
	},
	textContainer: {
		flex: 1
	},
	itemsContainer: {
		flexDirection: 'row',
		marginBottom: 10
	},
	column: {
		width: screenWidth - 40,

	}
};

const ratingProps = {
	disabled: false,
	maxStars: 5,
	starSize: 13,
	rating: 2,
	fullStarColor: '#848a8a',
	emptyStarColor: '#848a8a',
	containerStyle: {
		alignSelf: 'flex-start'
	},
	starStyle: {
		marginRight: 2,
	}
};

const RelatedList = ({ params }) => (
	<View style={{ paddingHorizontal: 10, marginTop: 10 }}>
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				width: '100%'
			}}
		>
			<Text style={{ fontWeight: 'bold', fontSize: 16, color: '#010101', marginVertical: 7 }}>Related</Text>
			<Text>See All</Text>
		</View>

		<ScrollView horizontal showsHorizontalScrollIndicator={false}>
			<View style={styles.column}>
				<TouchableOpacity>
					<View style={styles.itemsContainer}>
						<Image style={styles.img} source={require('../../assets/images/love.jpg')} />
						<View style={styles.textContainer}>
							<Text style={{ fontWeight: 'bold', color: '#010101' }}>Dr. John Smith</Text>
							<Text style={{ marginBottom: 3 }}>Medical</Text>
							<StarRating {...ratingProps} disabled />
						</View>
					</View>
				</TouchableOpacity>

				<TouchableOpacity>
					<View style={styles.itemsContainer}>
						<Image style={styles.img} source={require('../../assets/images/love.jpg')} />
						<View style={styles.textContainer}>
							<Text style={{ fontWeight: 'bold', color: '#010101' }}>Dr. John Smith</Text>
							<Text style={{ marginBottom: 3 }}>Medical</Text>
							<StarRating {...ratingProps} disabled />
						</View>
					</View>
				</TouchableOpacity>

				<TouchableOpacity>
					<View style={styles.itemsContainer}>
						<Image style={styles.img} source={require('../../assets/images/love.jpg')} />
						<View style={styles.textContainer}>
							<Text style={{ fontWeight: 'bold', color: '#010101' }}>Dr. John Smith</Text>
							<Text style={{ marginBottom: 3 }}>Medical</Text>
							<StarRating {...ratingProps} disabled />
						</View>
					</View>
				</TouchableOpacity>


			</View>

			<View style={styles.column}>
				<TouchableOpacity>
					<View style={styles.itemsContainer}>
						<Image style={styles.img} source={require('../../assets/images/love.jpg')} />
						<View style={styles.textContainer}>
							<Text style={{ fontWeight: 'bold', color: '#010101' }}>Dr. John Smith</Text>
							<Text style={{ marginBottom: 3 }}>Medical</Text>
							<StarRating {...ratingProps} disabled />
						</View>
					</View>
				</TouchableOpacity>

				<TouchableOpacity>
					<View style={styles.itemsContainer}>
						<Image style={styles.img} source={require('../../assets/images/love.jpg')} />
						<View style={styles.textContainer}>
							<Text style={{ fontWeight: 'bold', color: '#010101' }}>Dr. John Smith</Text>
							<Text style={{ marginBottom: 3 }}>Medical</Text>
							<StarRating {...ratingProps} disabled />
						</View>
					</View>
				</TouchableOpacity>

				<TouchableOpacity>
					<View style={styles.itemsContainer}>
						<Image style={styles.img} source={require('../../assets/images/love.jpg')} />
						<View style={styles.textContainer}>
							<Text style={{ fontWeight: 'bold', color: '#010101' }}>Dr. John Smith</Text>
							<Text style={{ marginBottom: 3 }}>Medical</Text>
							<StarRating {...ratingProps} disabled />
						</View>
					</View>
				</TouchableOpacity>


			</View>

		</ScrollView>
	</View>
);

export default RelatedList;
