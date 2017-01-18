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
    PixelRatio
    } from 'react-native'
import NavigationBar from '../../component/NavigationBar'
import Theme from '../../theme';

export default class Service extends Component {

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
                    title={'旅行服务'}
                    titleColor={'#FFF'}
                    backgroundColor={Theme.mainColor} />

                <View style={styles.listGroup1}>
                    <TouchableOpacity style={styles.listItem} activeOpacity={0.5}>
                        <Image style={{width:40,height:40}} source={require('../../images/icon_launcher.png')} />
                        <View style={{flex:1,marginLeft:10}}>
                            <Text style={{color:'#000',fontSize:16,fontWeight:'500'}}>地标美食</Text>
                            <Text style={{fontSize:14}}>[自营]买手推荐 特殊美食 一次尝遍</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{height:1/PixelRatio.get(),backgroundColor: '#D6D6D6',marginLeft:10,marginRight:10}}></View>
                    <TouchableOpacity style={styles.listItem} activeOpacity={0.5}>
                        <Image style={{width:40,height:40}} source={require('../../images/icon_launcher.png')} />
                        <View style={{flex:1,marginLeft:10}}>
                            <Text style={{color:'#000',fontSize:16,fontWeight:'500'}}>酒店预订</Text>
                            <Text style={{fontSize:14}}>[年终福利]订酒店1元抵10元，最高抵100元</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{height:1/PixelRatio.get(),backgroundColor: '#D6D6D6',marginLeft:10,marginRight:10}}></View>
                    <TouchableOpacity style={styles.listItem} activeOpacity={0.5}>
                        <Image style={{width:40,height:40}} source={require('../../images/icon_launcher.png')} />
                        <View style={{flex:1,marginLeft:10}}>
                            <Text style={{color:'#000',fontSize:16,fontWeight:'500'}}>拼车回家</Text>
                            <Text style={{fontSize:14}}>高铁到站，拼个轿车一起回家</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.listGroup2}>
                    <TouchableOpacity style={styles.listItem} activeOpacity={0.5}>
                        <Image style={{width:40,height:40}} source={require('../../images/icon_launcher.png')} />
                        <View style={{flex:1,marginLeft:10}}>
                            <Text style={{color:'#000',fontSize:16,fontWeight:'500'}}>出行装备</Text>
                            <Text style={{fontSize:14}}>保证低价正品，让旅行多一分惊喜</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{height:1/PixelRatio.get(),backgroundColor: '#D6D6D6',marginLeft:10,marginRight:10}}></View>
                    <TouchableOpacity style={styles.listItem} activeOpacity={0.5}>
                        <Image style={{width:40,height:40}} source={require('../../images/icon_launcher.png')} />
                        <View style={{flex:1,marginLeft:10}}>
                            <Text style={{color:'#000',fontSize:16,fontWeight:'500'}}>一元夺宝</Text>
                            <Text style={{fontSize:14}}>好礼等你来拿，惊喜随时可能发生</Text>
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
    listGroup1: {
        marginTop: Theme.NavigationBarHeight + 10,
        borderColor: '#C9C9C9',
        borderBottomWidth: 1/PixelRatio.get(),
        borderTopWidth: 1/PixelRatio.get(),
        backgroundColor: Theme.pageContentColor
    },
    listGroup2: {
        marginTop: 10,
        borderColor: '#C9C9C9',
        borderBottomWidth: 1/PixelRatio.get(),
        borderTopWidth: 1/PixelRatio.get(),
        backgroundColor: Theme.pageContentColor
    },
    listItem:{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    }
}