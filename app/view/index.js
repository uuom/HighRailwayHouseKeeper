/**
 * Created by yangxp5 on 2017/1/16.
 */

import React, { Component, } from 'react'
import {
    View,
    AppRegistry,
    Text,
    Navigator,
    TouchableOpacity,
    Image,
    } from 'react-native';
import Tab from './tab';

export default class App extends Component {

    static propTypes = {}
    static defaultProps = {}

    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            store: props.store
        }
    }

    _renderScene(route,navigator) {
        let NaviComponent = route.component;

        return (
            <NaviComponent {...route.params} myStore={this.state.store} navigator={navigator}/>
        );
    }

    render() {
        return (
            <Navigator
                initialRoute={{ name: 'tab', component: Tab}}
                configureScene={() => Navigator.SceneConfigs.FloatFromRight}
                renderScene={(route, navigator) => {
                    return <route.component route={route} navigator={navigator} store={this.state.store}/>
                }}
                ></Navigator>
        )
    }
}

