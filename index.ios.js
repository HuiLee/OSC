/**
 * OSC React Native App
 * https://github.com/facebook/react-native
 * @author lihui870920@gmail.com
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, StatusBar, Navigator} from 'react-native';
import {
    Scene,
    Reducer,
    Router,
    Modal,
    Actions,
    ActionConst,
} from 'react-native-router-flux';

import Launch from './app/components/Launch';
import Login from './app/components/Login';
import Register from './app/components/Register';

import Home from './app/components/Home';
import Find from './app/components/Find';
import Search from './app/components/Search';

import Me from './app/components/Me';

import TabIcon from './app/components/TabIcon';
import TabView from './app/components/TabView';

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        return defaultReducer(state, action);
    };
};

class osc extends Component {
    constructor(props) {
        super(props)
        StatusBar.setBarStyle('light-content', true);
    }

    componentDidMount() {

    }

    render() {
        return <Router createReducer={reducerCreate}>
            <Scene key="modal" component={Modal}>
                <Scene key="root" hideNavBar={true}>
                    <Scene key="launch" component={Launch} initial={true}/>
                    <Scene key="tab"
                           tabs={true}
                           hideNavBar={false}
                           tabBarStyle={styles.tabBarStyle}
                           tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}>
                        <Scene key="home"
                               component={Home}
                               title="首页" icon={TabIcon}
                               navigationBarStyle={styles.navigationBarStyle}
                               initial={true}
                               titleStyle={styles.titleStyle}/>
                        <Scene key="message"
                               component={TabView}
                               title="消息"
                               icon={TabIcon}
                               navigationBarStyle={styles.navigationBarStyle}
                               titleStyle={styles.titleStyle}/>
                        <Scene key="find"
                               component={Find}
                               icon={TabIcon}
                               title="综合"
                               hideNavBar={false}
                               navigationBarStyle={styles.navigationBarStyle}
                               titleStyle={styles.titleStyle}
                        />
                        <Scene key="search"
                               component={Search}
                               title="发现"
                               icon={TabIcon}
                               navigationBarStyle={styles.navigationBarStyle}
                               titleStyle={styles.titleStyle}/>
                        <Scene key="me"
                               component={Me}
                               title="我"
                               icon={TabIcon}
                               navigationBarStyle={styles.navigationBarStyle}
                               titleStyle={styles.titleStyle}/>
                    </Scene>
                    <Scene key="login" direction="vertical" type="replace">
                        <Scene key="loginModal"
                               component={Login}
                               title="登录"
                               hideNavBar={false}
                               direction="vertical"
                               schema="modal"
                               navigationBarStyle={styles.navigationBarStyle}
                               titleStyle={styles.titleStyle}/>
                    </Scene>
                    <Scene key="register" direction="vertical" type="replace">
                        <Scene key="registerModal"
                               component={Register}
                               title="注册"
                               hideNavBar={false}
                               direction="vertical"
                               schema="modal"
                               navigationBarStyle={styles.navigationBarStyle}
                               titleStyle={styles.titleStyle}
                        />
                    </Scene>
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