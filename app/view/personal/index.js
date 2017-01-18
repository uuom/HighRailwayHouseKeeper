/**
 * Created by yangxp5 on 2017/1/17.
 */

import React, { Component, } from 'react'
import {
    View,
    AppRegistry,
    Text,
    Image,
    TouchableOpacity,
    PixelRatio,
    Dimensions
    } from 'react-native'
import NavigationBar from '../../component/NavigationBar'
import Theme from '../../theme';

export default class Personal extends Component {

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
                <Image style={styles.image} source={require('../../images/android_day.png')}>
                    <View style={styles.userInfo}>
                        <Image style={{width:50,height:50}} source={require('../../images/icon_launcher.png')} />
                        <View style={{marginLeft:10}}>
                            <Text style={{color:'#fff',fontSize:18,fontWeight:'500'}}>181 0105 3914</Text>
                            <Text style={{color:'#fff',fontSize:14}}>杨小盼 610322********3914</Text>
                        </View>
                    </View>
                </Image>
                <View style={styles.myOrder}>
                    <TouchableOpacity style={{flexDirection: 'row',alignItems: 'center'}} activeOpacity={0.7}>
                        <Image style={{width: 30,height:30,margin:10}} source={require('../../images/allorder.png')} />
                        <Text style={{color:'#000',fontSize:16,fontWeight:'500',flex:1}}>我的订单</Text>
                        <Text style={{color:'#C9C9C9',fontSize:14,fontWeight:'400'}}>查看全部订单</Text>
                        <Image style={{width: 10,height:10,margin:10}} source={require('../../images/arrow.png')} />
                    </TouchableOpacity>
                    <View style={{height:1,backgroundColor: '#D6D6D6',marginLeft:10,marginRight:10}}></View>
                    <View style={styles.category}>
                        <TouchableOpacity style={styles.categoryItem} activeOpacity={0.7}>
                            <Image style={styles.categoryItemImage} source={require('../../images/timetable_list_topicon_train.png')}/>
                            <Text style={styles.categoryItemText}>火车票/抢票</Text>
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
                </View>

                <View style={styles.listGroup}>
                    <TouchableOpacity style={styles.listItem} activeOpacity={0.5}>
                        <Image style={{width:35,height:35}} source={require('../../images/icon_launcher.png')} />
                        <View style={{flex:1,marginLeft:10}}>
                            <Text style={{color:'#000',fontSize:16,fontWeight:'500'}}>高铁客服中心</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{height:1/PixelRatio.get(),backgroundColor: '#D6D6D6',marginLeft:10,marginRight:10}}></View>
                    <TouchableOpacity style={styles.listItem} activeOpacity={0.5}>
                        <Image style={{width:35,height:35}} source={require('../../images/icon_launcher.png')} />
                        <View style={{flex:1,marginLeft:10}}>
                            <Text style={{color:'#000',fontSize:16,fontWeight:'500'}}>机票客服中心</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{height:1/PixelRatio.get(),backgroundColor: '#D6D6D6',marginLeft:10,marginRight:10}}></View>
                    <TouchableOpacity style={styles.listItem} activeOpacity={0.5}>
                        <Image style={{width:35,height:35}} source={require('../../images/icon_launcher.png')} />
                        <View style={{flex:1,marginLeft:10}}>
                            <Text style={{color:'#000',fontSize:16,fontWeight:'500'}}>客服电话-反欺诈</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{height:1/PixelRatio.get(),backgroundColor: '#D6D6D6',marginLeft:10,marginRight:10}}></View>
                    <TouchableOpacity style={styles.listItem} activeOpacity={0.5}>
                        <Image style={{width:35,height:35}} source={require('../../images/icon_launcher.png')} />
                        <View style={{flex:1,marginLeft:10}}>
                            <Text style={{color:'#000',fontSize:16,fontWeight:'500'}}>推荐有奖</Text>
                            <Text style={{fontSize:14}}>10元礼包</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: Theme.pageBackgroundColor
    },
    image: {
        width: Dimensions.get('window').width,
        height: 150,
        alignItems: 'center'
    },
    userInfo:{
        marginTop: 35,
        flexDirection: 'row',
        alignItems: 'center'
    },
    myOrder: {
        marginTop:10,
        borderBottomWidth: 1/PixelRatio.get(),
        borderTopWidth: 1/PixelRatio.get(),
        borderColor: '#C9C9C9',
        backgroundColor: Theme.pageContentColor
    },
    category: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:10,
        marginRight:10,
        backgroundColor: Theme.pageContentColor
    },
    categoryItem: {
        flex:1,
        alignItems: 'center',
    },
    categoryItemImage: {
        width: 35,
        height: 35
    },
    categoryItemText: {
        color: '#7E7E7E',
        fontSize:12,
        fontWeight: '500'
    },
    listGroup: {
        marginTop: 10,
        borderColor: '#C9C9C9',
        borderBottomWidth: 1/PixelRatio.get(),
        borderTopWidth: 1/PixelRatio.get(),
        backgroundColor: Theme.pageContentColor
    },
    listItem:{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 7
    }
}