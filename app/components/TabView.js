import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import Button from "react-native-button";
import {Actions} from 'react-native-router-flux';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
});


class TabView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Button onPress={Actions.pop}>{this.props.title}</Button>
            </View>
        );
    }
}


export default TabView;