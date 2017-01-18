/**
 * Created by yangxp5 on 2017/1/16.
 */

import React, { Component, } from 'react'
import {
    View,
    AppRegistry,
    Text,
    Image,
    TouchableOpacity,
    PixelRatio
    } from 'react-native'
import NavigationBar from '../../component/NavigationBar'
import Theme from '../../theme';

export default class TimeTable extends Component {

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
                    title={'我的行程'}
                    titleColor={'#FFF'}
                    rightButtonTitle={'添加'}
                    rightButtonTitleColor={'#fff'}
                    backgroundColor={Theme.mainColor} />

                <View style={styles.category}>
                    <TouchableOpacity style={styles.categoryItem} activeOpacity={0.7}>
                        <Image style={styles.categoryItemImage} source={require('../../images/timetable_list_topicon_bus.png')}/>
                        <Text style={styles.categoryItemText}>正晚点</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryItem} activeOpacity={0.7}>
                        <Image style={styles.categoryItemImage} source={require('../../images/timetable_list_topicon_hotle.png')}/>
                        <Text style={styles.categoryItemText}>时刻表</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryItem} activeOpacity={0.7}>
                        <Image style={styles.categoryItemImage} source={require('../../images/timetable_list_topicon_specialcar.png')}/>
                        <Text style={styles.categoryItemText}>火车站</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryItem} activeOpacity={0.7}>
                        <Image style={styles.categoryItemImage} source={require('../../images/timetable_list_topicon_train.png')}/>
                        <Text style={styles.categoryItemText}>出行宝</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.card} activeOpacity={0.6}>
                    <View style={styles.trainAndTime}>
                        <View style={{flex:1,flexDirection: 'row',alignItems: 'center'}}>
                            <Image style={{width:22,height:22}} source={require('../../images/icon_order_12306.png')}/>
                            <Text style={{color:'#000',fontSize:16,marginLeft:5}}>G671</Text>
                            <Image style={{width:16,height:16,marginLeft:5}} source={require('../../images/bellon.png')}/>
                        </View>
                        <Text style={{color:'#C9C9C9',fontSize:16,fontWeight:'500'}}>2017-01-24</Text>
                    </View>
                    <View style={styles.startAndEndStation}>
                        <View style={{flex:1}}>
                            <Text style={{color:'#000',fontSize:16}}>北京西</Text>
                            <Text style={{color:'#000',fontSize:22,fontWeight:'500'}}>08:15</Text>
                        </View>
                        <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
                            <Text>全程7小时25分</Text>
                            <View style={{width:150,height:2,backgroundColor:'#D6D6D6'}}></View>
                        </View>
                        <View style={{flex:1,alignItems: 'flex-end'}}>
                            <Text style={{color:'#000',fontSize:16}}>宝鸡南</Text>
                            <Text style={{color:'#000',fontSize:22,fontWeight:'500'}}>15:40</Text>
                        </View>
                    </View>
                    <View style={styles.seatAndStartDay}>
                        <View style={{flex:1,flexDirection: 'row'}}>
                            <Text>15车厢05F号 二等座</Text>
                        </View>
                        <Text>8天后出发</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card} activeOpacity={0.6}>
                    <View style={styles.trainAndTime}>
                        <View style={{flex:1,flexDirection: 'row',alignItems: 'center'}}>
                            <Image style={{width:22,height:22}} source={require('../../images/icon_order_12306.png')}/>
                            <Text style={{color:'#000',fontSize:16,marginLeft:5}}>G672</Text>
                            <Image style={{width:16,height:16,marginLeft:5}} source={require('../../images/bellon.png')}/>
                        </View>
                        <Text style={{color:'#C9C9C9',fontSize:16,fontWeight:'500'}}>2017-02-05</Text>
                    </View>
                    <View style={styles.startAndEndStation}>
                        <View style={{flex:1}}>
                            <Text style={{color:'#000',fontSize:16}}>宝鸡南</Text>
                            <Text style={{color:'#000',fontSize:22,fontWeight:'500'}}>08:00</Text>
                        </View>
                        <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
                            <Text>全程7小时25分</Text>
                            <View style={{width:150,height:2,backgroundColor:'#D6D6D6'}}></View>
                        </View>
                        <View style={{flex:1,alignItems: 'flex-end'}}>
                            <Text style={{color:'#000',fontSize:16}}>北京西</Text>
                            <Text style={{color:'#000',fontSize:22,fontWeight:'500'}}>15:11</Text>
                        </View>
                    </View>
                    <View style={styles.seatAndStartDay}>
                        <View style={{flex:1,flexDirection: 'row'}}>
                            <Text>14车厢05C号 二等座</Text>
                        </View>
                        <Text>20天后出发</Text>
                    </View>
                </TouchableOpacity>

                <View style={{alignItems:'center',marginTop:10}}>
                    <Text style={{color:'#95B8D8',fontSize:16,fontWeight:'400'}}>查看历史行程</Text>
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
    category: {
        marginTop: Theme.NavigationBarHeight,
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Theme.pageContentColor,
        borderColor: '#C9C9C9',
        borderBottomWidth: 1/PixelRatio.get(),
    },
    categoryItem: {
        flex:1,
        alignItems: 'center',
    },
    categoryItemImage: {
        width: 45,
        height: 45
    },
    categoryItemText: {
        color: '#7E7E7E',
        fontWeight: '500'
    },
    card: {
        margin:10,
        borderColor: Theme.mainColor,
        borderBottomWidth: 2,
        padding:5,
        backgroundColor: Theme.pageContentColor
    },
    trainAndTime: {
        flexDirection: 'row',
        margin: 5
    },
    startAndEndStation: {
        flexDirection: 'row',
        margin:10
    },
    seatAndStartDay:{
        flexDirection: 'row',
        margin:5
    }
}
