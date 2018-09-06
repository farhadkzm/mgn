import React from 'react';
import { Text, View, Image, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ReviewTabContentItem = ({ params, }) => (

    <View style={styles.container}>

        {/* image view */}
        <View style={styles.imageContainer}>
            <View style={[styles.imageBox, { bottom: 0, left: 0 }]}>
                <Image style={styles.image} source={require('../../assets/images/eye.jpg')} />
            </View>

            <View style={[styles.imageBox, { bottom: 3, left: 3 }]}>
                <Image style={styles.image} source={require('../../assets/images/eye.jpg')} />
            </View>

            <View style={[styles.imageBox, { bottom: 6, left: 6 }]}>
                <Image style={styles.image} source={require('../../assets/images/eye.jpg')} />
            </View>

            <Text style={styles.imgaesNumberText}>3 images</Text>
        </View>

        {/* text view */}
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={styles.eventNameText}>Event Name</Text>
                <Icon name='ellipsis-v' />
            </View>
            <Text style={styles.descriptionText} numberOfLines={4}>Lorem ipsum lorem console log ipsum lorem console log ipsum lorem console log ipsum lorem console log ipsum lorem console log ipsum lorem console log ipsum lorem console log ipsum lorem console log </Text>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon color='red' name='heart' />
                <Text style={{ marginLeft: 5, fontSize: 12 }}>210 likes</Text>
            </View>
        </View>

    </View>

);

const ReviewTabContent = () => (
    <ScrollView>
        <View style={{ flex: 1 }}>
            <ReviewTabContentItem />
            <ReviewTabContentItem />
            <ReviewTabContentItem />
            <ReviewTabContentItem />
            <ReviewTabContentItem />
        </View>
    </ScrollView>
)
export default ReviewTabContent;

const styles = {
    imageContainer: {
        width: 117,
        height: 117,
        marginRight: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    container: {
        backgroundColor: '#fff',
        padding: 10,
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 5,
        flexDirection: 'row',
        elevation: 3
    },
    imageBox: {
        width: 111,
        height: 111,
        position: 'absolute',
        elevation: 1
    },
    image: {
        flex: 1,
        width: 111,
        height: 111,
        resizeMode: 'cover',
    },
    heartIcon: {
        color: '#157efb',
    },
    imgaesNumberText: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        backgroundColor: 'rgba(0,0,0,0.3)',
        color: '#fff',
        fontSize: 10,
        paddingHorizontal: 5,
        borderRadius: 3,
        elevation: 1,
        zIndex: 2
    },
    eventNameText: {
        fontWeight: 'bold',
        color: '#333',
        fontSize: 15
    },
    descriptionText: {
        lineHeight: 15,
        marginVertical: 3
    }
}