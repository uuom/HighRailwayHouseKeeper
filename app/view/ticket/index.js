/**
 * Created by yangxp5 on 2017/1/16.
 */

import React, { Component, } from 'react'
import {
    View,
    AppRegistry,
    Text,
    Image,
    Button,
    TouchableOpacity
    } from 'react-native'
import NavigationBar from '../../component/NavigationBar'
import Theme from '../../theme';

export default class Ticket extends Component {

    static propTypes = {}
    static defaultProps = {}

    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            store: props.store
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    height={Theme.NavigationBarHeight}
                    title={'伙力·高铁管家'}
                    titleColor={'#FFF'}
                    backgroundColor={Theme.mainColor} />

                <View style={styles.category}>
                    <TouchableOpacity style={styles.categoryItem} activeOpacity={0.7}>
                        <Image style={styles.categoryItemImage} source={require('../../images/timetable_list_topicon_train.png')}/>
                        <Text style={styles.categoryItemText}>商城</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryItem} activeOpacity={0.7}>
                        <Image style={styles.categoryItemImage} source={require('../../images/timetable_list_topicon_flight.png')}/>
                        <Text style={styles.categoryItemText}>机票</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryItem} activeOpacity={0.7}>
                        <Image style={styles.categoryItemImage} source={require('../../images/timetable_list_topicon_specialcar.png')}/>
                        <Text style={styles.categoryItemText}>伙力接送</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryItem} activeOpacity={0.7}>
                        <Image style={styles.categoryItemImage} source={require('../../images/timetable_list_topicon_hotle.png')}/>
                        <Text style={styles.categoryItemText}>酒店</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryItem} activeOpacity={0.7}>
                        <Image style={styles.categoryItemImage} source={require('../../images/timetable_list_topicon_bus.png')}/>
                        <Text style={styles.categoryItemText}>汽车票</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.ticketSearch}>
                    <View style={styles.searchTitle}>
                        <Image style={{width:25, height:25,margin: 5}} source={require('../../images/icon_railway.png')} />
                        <Text style={{color: '#7E7E7E',fontWeight: '500',fontSize: 15}}>火车票</Text>
                    </View>
                    <View style={{height:1,backgroundColor: '#D6D6D6',marginLeft:10,marginRight:10,marginTop:5}}></View>
                    <View style={styles.searchContent}>
                        <TouchableOpacity style={styles.startPlace} activeOpacity={0.5}>
                            <Text style={{color:'#C9C9C9',fontWeight:'500',fontSize:15}}>出发地</Text>
                            <Text style={{color:'#000', fontWeight:'600', fontSize: 20}}>北京</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.9}>
                            <Image style={{width:25,height:25}} source={require('../../images/change_normal.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.endPlace} activeOpacity={0.5}>
                            <Text style={{color:'#C9C9C9',fontWeight:'500',fontSize:15}}>目的地</Text>
                            <Text style={{color:'#000', fontWeight:'600', fontSize: 20}}>宝鸡</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{height:1,backgroundColor: '#D6D6D6',marginLeft:10,marginRight:10}}></View>
                    <View style={styles.searchTime}>
                        <TouchableOpacity style={{flex:1,flexDirection: 'row',alignItems: 'center'}} activeOpacity={0.5}>
                            <Text style={{color:'#000', fontWeight:'600', fontSize: 20}}>1月21日</Text>
                            <Text style={{color:'#000', fontWeight:'400', fontSize: 18,marginLeft: 10}}>星期六</Text>
                        </TouchableOpacity>
                        <Image style={{width:20,height:20}} source={require('../../images/checkbox_unselected_small.png')} />
                        <Text style={{color:'#C9C9C9',fontWeight:'500',fontSize:14,marginLeft:5}}>学生</Text>
                    </View>
                    <TouchableOpacity style={styles.searchBtn} activeOpacity={0.9}>
                        <Image style={{width:25,height:25}} source={require('../../images/magnifier04.png')} />
                        <Text style={{color:'#fff', fontWeight:'400', fontSize: 20,marginLeft: 10}}>搜索</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.nearOrder} activeOpacity={0.5}>
                    <Text style={{color:'#95B8D8', fontWeight:'500', fontSize: 16}}>近期有</Text>
                    <Text style={{color:'red', fontWeight:'500', fontSize: 16}}>2</Text>
                    <Text style={{color:'#95B8D8', fontWeight:'500', fontSize: 16}}>个订单</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _onSearchBtnPress(){

    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: Theme.pageBackgroundColor
    },
    category: {
        marginTop: Theme.NavigationBarHeight,
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Theme.pageContentColor
    },
    categoryItem: {
        flex:1,
        alignItems: 'center',
    },
    categoryItemImage: {
        width: 40,
        height: 40
    },
    categoryItemText: {
        color: '#7E7E7E',
        fontWeight: '500'
    },
    ticketSearch: {
        marginTop: 10,
        backgroundColor: Theme.pageContentColor
    },
    searchTitle: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
        marginTop:5,
        marginRight: 10
    },
    searchContent: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    startPlace: {
        flex:1,
        alignItems: 'flex-start'
    },
    endPlace: {
        flex:1,
        alignItems: 'flex-end'
    },
    searchTime: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    searchBtn: {
        height:40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.mainColor,
        margin:10
    },
    nearOrder: {
        height:40,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.pageContentColor
    }
}
