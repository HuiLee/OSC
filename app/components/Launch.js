import React, {Component} from 'react';
import {StyleSheet, Text, Image, View, TouchableHighlight, StatusBar} from 'react-native';
import Swiper from 'react-native-swiper';
import {Actions} from "react-native-router-flux";
class Launch extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        this.setState({
            items: [
                {title: 'Page one', css: styles.slide1},
                {title: 'Page two', css: styles.slide2},
                {title: 'Page three', css: styles.slide3}
            ]
        })
    }

    render() {
        return (
            <Swiper
                dot={<View style={styles.dot} />}
                activeDot={<View style={styles.activeDot} />}
                paginationStyle={{bottom: 70}}
                loop={true}>
                {this.state.items.map((item, key) => {
                    return (
                        <View key={key} style={item.css}>
                            <TouchableHighlight style={styles.slide} onPress={Actions.tab}>
                                <Text style={styles.text}>{item.title}</Text>
                            </TouchableHighlight>
                        </View>
                    )
                })}
            </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    dot: {
        backgroundColor: 'rgba(255,255,255,.3)',
        width: 13,
        height: 13,
        borderRadius: 7,
        marginLeft: 7, marginRight: 7
    },
    activeDot: {
        backgroundColor: '#fff',
        width: 13,
        height: 13,
        borderRadius: 7,
        marginLeft: 7,
        marginRight: 7
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image: {
        flex: 1,
        width: null,
        height: null
    }
})
export default Launch;