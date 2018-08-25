import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TopIcons from './TopIcons';

class Business extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <TopIcons/>
            </View>
        );
    }
}

export default Business;
