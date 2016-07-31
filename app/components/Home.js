import React, {Component} from 'react';
import {StyleSheet, Text, Image, View, TouchableHighlight, StatusBar, WebView} from 'react-native';
import {Actions} from "react-native-router-flux";
import Button from "react-native-button";
class Home extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <WebView
                source={{uri: 'https://github.com/HuiLee'}}
                style={styles.web}
                startInLoadingState={true}
            >
            </WebView>
        )
    }
}

const styles = StyleSheet.create({
    web: {
        marginTop: 64,
        marginBottom: 50
    },
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
export default Home;