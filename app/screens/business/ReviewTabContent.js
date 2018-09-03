import React from 'react';
import { Text, View, Image, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';

const ratingProps = {
    disabled: false,
    maxStars: 5,
    starSize: 13,
    rating: 2,
    fullStarColor: '#fa7f21',
    emptyStarColor: '#d9d5d2',
    containerStyle: {
        alignSelf: 'flex-start'
    },
    starStyle: {
        marginRight: 2,
    }
};

const ReviewTabContentItem = ({ params, }) => (
    <View>
        <View style={styles.container}>

            <View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={styles.image} source={require('../../assets/images/user.jpeg')} />
                            <View style={{}}>
                                <Text style={{ marginBottom: 3, color: '#171718' }}>My comment</Text>
                                <StarRating {...ratingProps} disabled />
                            </View>
                        </View>

                        <Text style={{ fontWeight: 'bold', height: 45, fontSize: 12, textAlignVertical: 'center', color: '#737375' }}>1h ago</Text>
                    </View>
                </View>

                <Text style={{ color: '#303032', lineHeight: 20, marginBottom: 7 }}>
                    <Text style={{ fontWeight: 'bold', color: '#010101' }}>Bold Text </Text>
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                </Text>

                <View style={{ flexDirection: 'row', }}>
                    <Icon style={styles.heartIcon} name='heart' size={16} />
                    <Text style={{ marginLeft: 5, color: '#626262', fontSize: 12 }}>21 Likes</Text>
                </View>
            </View>



        </View>

    </View>
);

const ReviewTabContent = () => (
    <ScrollView>
        <View style={{flex: 1}}>
            <ReviewTabContentItem />
            <ReviewTabContentItem />
            <ReviewTabContentItem />
            <ReviewTabContentItem />
            <ReviewTabContentItem />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#ecedee', paddingHorizontal: 7 , height: 50}}>
            <Image style={styles.image} source={require('../../assets/images/user.jpeg')} />
            <TextInput
                placeholder='Write a review ...'
                placeholderTextColor='#9a9a9a'
                underlineColorAndroid='transparent'
                style={{
                    flex: 1,
                    borderWidth: 1,
                    borderColor: '#a8a8a8',
                    paddingVertical: 0,
                    paddingHorizontal: 15,
                    borderRadius: 25,
                    height: 45,
                    marginLeft: 5
                }}
            />
        </View>
    </ScrollView>
)
export default ReviewTabContent;

const styles = {
    container: {
        backgroundColor: '#e5e6ea',
        padding: 10,
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 5
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 45,
        resizeMode: 'cover',
        margin: 5,
        borderWidth: 1,
        borderColor: '#c4c4c5',

    },
    heartIcon: {
        color: '#157efb',

    }
}