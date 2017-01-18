/**
 * Created by yangxp5 on 2017/1/16.
 */
import React, { Component, } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './view'
import todos from './reducer'

let store = createStore(todos)

export default class Application extends Component {
    render() {
        return (
            <Provider store={store}>
                <App store={store}/>
            </Provider>
        );
    }
}
