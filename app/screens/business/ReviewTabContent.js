import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
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


const ReviewTabContent = ({
    params,
}) => (
        <View style={styles.container}>

            <View>

                <View style={{ flexDirection: 'row', }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row',  flex: 1, }}>
                            <Image style={styles.image} source={require('../../assets/images/user.jpeg')} />
                            <View style={{ flexDirection: 'row' }}>
                                <Text>My comment</Text>
                                <StarRating {...ratingProps} disabled />
                            </View>
                        </View>

                        <Text>1h ago</Text>
                    </View>
                </View>

                <Text>
                    <Text>

                    </Text>
                </Text>

                <View>
                    <Icon name='heart' size={16} />
                    <Text>21 Likes</Text>
                </View>
            </View>

        </View>
    );

export default ReviewTabContent;

const styles = {
    container: {
        backgroundColor: '#eee',
        padding: 10
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 60,
        resizeMode: 'cover',
        margin: 5,

    }
}