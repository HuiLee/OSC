import React, {Component} from 'react';
import {StyleSheet, Text, Image, View, TouchableHighlight, StatusBar, ScrollView} from 'react-native';
import {Actions} from "react-native-router-flux";
import Button from "react-native-button";

import ScrollableTabView, {DefaultTabBar,} from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';

class Find extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <ScrollableTabView
                style={styles.container}
                renderTabBar={()=><DefaultTabBar backgroundColor='rgba(255, 255, 255, 0.7)' />}
                tabBarPosition='top'
            >
                <ScrollView tabLabel='资讯' style={styles.wrap}>
                    <View style={styles.view}>
                        <Icon name='ios-book' color='#DBDDDE' size={30} style={styles.icon}/>
                        <Text style={styles.text}>我是资讯列表</Text>
                    </View>
                </ScrollView>
                <ScrollView tabLabel='博客'>
                    <View style={styles.view}>
                        <Icon name='logo-wordpress' color='#DBDDDE' size={30} style={styles.icon}/>
                        <Text style={styles.text}>我是博客列表</Text>
                    </View>
                </ScrollView>
                <ScrollView tabLabel='问答'>
                    <View style={styles.view}>
                        <Icon name='md-help' color='#DBDDDE' size={30} style={styles.icon}/>
                        <Text style={styles.text}>我是问答列表</Text>
                    </View>
                </ScrollView>
                <ScrollView tabLabel='活动'>
                    <View style={styles.view}>
                        <Icon name='ios-alarm-outline' color='#DBDDDE' size={30} style={styles.icon}/>
                        <Text style={styles.text}>我是活动列表</Text>
                    </View>
                </ScrollView>
            </ScrollableTabView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 64,
        marginBottom: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrap: {
        flex: 1,
    },
    view: {
        flex: 1,
        marginTop:50,
        justifyContent: 'center',
        alignItems: 'center'

    },
    text: {
        color: '#d2d2d2',
        fontSize: 20,
        fontWeight: 'bold'
    }
})
export default Find;