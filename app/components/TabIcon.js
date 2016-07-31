import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class TabIcon extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.name == 'home') {
            return (
                <Text>
                    <Icon name={ this.props.selected ? 'ios-planet' : 'ios-planet-outline' } size={32}
                          color="#30ce67"/>
                </Text>
            );
        } else if (this.props.name == 'message') {
            return (<Text>
                <Icon name={ this.props.selected ? 'ios-notifications' : 'ios-notifications-outline' }
                      size={30} color="#30ce67"/>
            </Text>);
        } else if (this.props.name == 'find') {
            return (<Text>
                <Icon name={ this.props.selected ? 'ios-add-circle' : 'ios-add-circle' } size={45}
                      color="#30ce67"/>
            </Text>);
        } else if (this.props.name == 'search') {
            return (<Text>
                <Icon name={ this.props.selected ? 'ios-search' : 'ios-search-outline' } size={32}
                      color="#30ce67"/>
            </Text>);
        } else if (this.props.name == 'me') {
            return (<Text>
                <Icon name={ this.props.selected ? 'ios-contact' : 'ios-contact-outline' } size={30}
                      color="#30ce67"/>
            </Text>);
        }
    }
}
export default TabIcon;