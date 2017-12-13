import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';



const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24,
        resizeMode: 'contain'
    }
});

import TabMain from '../recover_tenant_main';
import Mine from '../recover_tenant_mine';


export default [
    {
        screen: TabMain,
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
        screen: Mine,
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