import React, {Component} from 'react';
import {StyleSheet, Text, Image, View, TouchableHighlight, StatusBar} from 'react-native';
import {Actions} from "react-native-router-flux";
import Button from "react-native-button";
class Find extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Button onPress={Actions.login}>Login</Button>
                <Button onPress={Actions.register}>Register</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})
export default Find;