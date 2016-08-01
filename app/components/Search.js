import React, {Component} from 'react';
import {StyleSheet, Text, Image, View, TouchableHighlight, StatusBar, WebView} from 'react-native';
import {Actions} from "react-native-router-flux";
import Button from "react-native-button";

import SearchBar from "react-native-search-bar";
class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            keywords: ''
        };
    }

    componentDidMount() {

    }

    onSearch() {

    }

    render() {
        return (
            <View style={styles.web}>
                <SearchBar
                    ref='searchBar'
                    placeholder='搜索关键字...'
                    onChangeText={(keywords) => this.setState({keywords})}
                    onSearchButtonPress={this.refs.searchBar.unFocus}
                    onCancelButtonPress={()=>this.setState({keywords:""})}
                />
            </View>
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
export default Search;