import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';

import TestView from '../test1';


const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24,
        resizeMode: 'contain'
    }
});



export default [
    {
        screen: TestView,
        navigationOptions: {
            tabBarLabel: "回收",
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../assets/tab1.png')}
                    style={[{tintColor: tintColor}, styles.icon]}
                />
            ),
        },
        routeNameKey : "recover"
    },
    {
        screen: View,
        navigationOptions: {
            tabBarLabel: "正在回收",
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../assets/tab2.png')}
                    style={[{tintColor: tintColor}, styles.icon]}
                />
            ),
        },
        routeNameKey : "ordering"
    },
    {
        screen: View,
        navigationOptions: {
            tabBarLabel: "我的",
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../assets/tab3.png')}
                    style={[{tintColor: tintColor}, styles.icon]}
                />
            ),
        },
        routeNameKey : "mine"
    },

]