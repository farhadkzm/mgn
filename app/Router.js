import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Business from './screens/business/Index';

class AppRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Business/>
            </View>
        );
    }
}

export default AppRouter;
