/**
 * OSC React Native App
 * https://github.com/facebook/react-native
 * @author lihui870920@gmail.com
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, StatusBar} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import Launch from './app/components/Launch';
import TabIcon from './app/components/TabIcon';
import TabView from './app/components/TabView';

class osc extends Component {
    constructor(props) {
        super(props)
        StatusBar.setBarStyle('light-content', true);
    }

    componentDidMount() {

    }

    render() {
        return <Router>
            <Scene key="root" hideNavBar={true}>
                <Scene key="launch" component={Launch} initial={true}/>
                <Scene key="tab"
                       tabs={true}
                       hideNavBar={false}
                       tabBarStyle={styles.tabBarStyle}
                       tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
                >
                    <Scene key="home"
                           component={TabView}
                           title="首页" icon={TabIcon}
                           navigationBarStyle={styles.navigationBarStyle}
                           titleStyle={styles.titleStyle}
                    ></Scene>
                    <Scene key="message"
                           component={TabView}
                           title="消息"
                           icon={TabIcon}
                           navigationBarStyle={styles.navigationBarStyle}
                           titleStyle={styles.titleStyle}
                    ></Scene>
                    <Scene key="find"
                           component={TabView}
                           initial={true}
                           icon={TabIcon}
                           hideNavBar={true}
                    />
                    <Scene key="search"
                           component={TabView}
                           title="发现"
                           icon={TabIcon}
                           navigationBarStyle={styles.navigationBarStyle}
                           titleStyle={styles.titleStyle}
                    />
                    <Scene key="me"
                           component={TabView}
                           title="我"
                           icon={TabIcon}
                           navigationBarStyle={styles.navigationBarStyle}
                           titleStyle={styles.titleStyle}
                    />
                </Scene>
            </Scene>
        </Router>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarStyle: {
        backgroundColor: '#eee',
    },
    navigationBarStyle: {
        backgroundColor: '#30ce67',

    },
    titleStyle: {
        color: '#ffffff'
    },
    tabBarSelectedItemStyle: {
        // backgroundColor: '#ddd',
    },
});


AppRegistry.registerComponent('osc', () => osc);