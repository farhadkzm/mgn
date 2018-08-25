import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TopIcons = ({
    params,
}) => (
        <View style={styles.container}>

            <TouchableOpacity onPress={() => alert('angle left')} activeOpacity={1} >
                <Icon backgroundColor='transparent' name="angle-left" size={24} color='#0076ff' />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => alert('ellipsis')} activeOpacity={1} >
                <Icon backgroundColor='transparent' name="ellipsis-h" size={20} color='#0076ff' />
            </TouchableOpacity>

        </View>
    );

export default TopIcons;

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 40,
        padding: 10,
    }
}