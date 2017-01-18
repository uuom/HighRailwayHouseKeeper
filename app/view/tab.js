/**
 * Created by yangxp5 on 2017/1/16.
 */

import React, { Component } from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Ticket from './ticket';
import TimeTable from './timetable';
import Service from './service';
import Personal from './personal';
import Theme from '../theme';

const TAB_ITEMS = [{
    code : 'ticket',
    name : '车票预定',
    icon_n : require('../images/tab_ticket_normal.png'),
    icon_p : require('../images/tab_ticket_selected.png'),
    contentView : Ticket
},{
    code : 'timetable',
    name : '我的行程',
    icon_n : require('../images/tab_timetable_normal.png'),
    icon_p : require('../images/tab_timetable_selected.png'),
    contentView : TimeTable,
    badgeNumber: 1
},{
    code : 'service',
    name : '旅行服务',
    icon_n : require('../images/tab_service_normal.png'),
    icon_p : require('../images/tab_service_selected.png'),
    contentView : Service
},{
    code : 'personal',
    name : '个人中心',
    icon_n : require('../images/tab_personal_normal.png'),
    icon_p : require('../images/tab_personal_selected.png'),
    contentView : Personal
}];

export default class Tab extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: TAB_ITEMS,
            selectedTab : TAB_ITEMS[0].code //默认第一个tab选中
        }
    }

    render() {

        var items = [];
        for (var i=0; i< this.state.items.length; i++) {
            items.push(this._renderTabView(this.state.items[i]));
        }
        return (
            <View style={styles.container}>
                <TabNavigator tabBarStyle={styles.tab}>
                    {items}
                </TabNavigator>
            </View>
        );
    }

    /*
     *渲染每项
     */
    _renderTabView(options){
        var tabNormal = options.icon_n;
        var tabPress = options.icon_p;

        return(
            <TabNavigator.Item
                key={options.code}
                title={options.name}
                renderIcon={()=><Image style={styles.tabIcon} source={tabNormal}/>}
                renderSelectedIcon={()=><Image style={styles.tabIcon} source={tabPress}/>}
                selected={this.state.selectedTab === options.code}
                selectedTitleStyle={{color:'#1296db'}}
                onPress={()=>this._onPress(options.code)}
                renderBadge= {()=>options.badgeNumber?<View style={styles.badgeView}>
											<Text style={styles.badgeText}>{options.badgeNumber}</Text>
										  </View>:null}>
                <options.contentView route={this.props.route} navigator={this.props.navigator}/>
            </TabNavigator.Item>
        );
    }

    /*
     * tab点击方法
     */
    _onPress(tabCode){
        if(tabCode){
            this.setState({
                selectedTab : tabCode
            });
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    tab:{
        height: 55,
        alignItems:'center',
        backgroundColor: Theme.tabBackgroundColor,
    },
    tabIcon:{
        width:30,
        height:30
    },
    badgeView:{
        width:22,
        height:14 ,
        backgroundColor:'#f85959',
        borderWidth:1,
        marginLeft:-1,
        marginTop:6,
        borderColor:'#FFF',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
    },
    badgeText:{
        color:'#fff',
        fontSize:8,
    }
});
