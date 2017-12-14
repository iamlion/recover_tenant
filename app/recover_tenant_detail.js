import React from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';


/**
 * 注册
 * */
import BaseCompoent from './baseComponent';

export default class extends BaseCompoent {

    constructor(props){
        super(props);
    }


    componentDidMount() {

    }


    render(){

        return (
            <View>
                {this.renderNavHeader("回收详情")}
                <Text>回收详情</Text>
            </View>
        )
    }
}