import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MainProperties = ({
    params,
}) => (
        <View style={styles.container}>

            {/* Image */}
            <Image style={styles.image} source={require('../../assets/images/user.jpeg')} />


            {/* Texts */}
            <View style={styles.textContainer}>
                <Text style={styles.businessName}>Business Name</Text>

                <Text style={styles.secondaryText}>Type</Text>

                <TouchableOpacity activeOpacity={0.9} onPress={() => alert('time')}>
                    <View style={styles.buttonTextContainer}>
                        <Text>Opening hours 11 am - 12 pm  </Text>
                        <Icon size={18} name='angle-right' />
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );

export default MainProperties;

const styles = {
    container: {
        flexDirection: 'row',
        padding: 10
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        resizeMode: 'cover',
        margin: 5,
    },
    textContainer: {
        paddingVertical: 5
    },
    businessName: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 16,
        marginBottom: 2
    },
    buttonTextContainer: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    secondaryText: {
        marginBottom: 3,
    }
}