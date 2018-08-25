import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import TopIcons from './TopIcons';

class Business extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <TopIcons />
                </ScrollView>
            </View>
        );
    }
}

export default Business;

const styles = {
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        flex: 1
    }
}
