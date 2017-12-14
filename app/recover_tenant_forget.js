import React from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';


/**
 * 忘记密码
 * */
import BaseComponent from './baseComponent'

export default class extends BaseComponent {

    constructor(props){
        super(props);
    }


    componentDidMount() {

    }


    render(){

        return (
            <View>
                {this.renderNavHeader("忘记密码")}
                <Text>忘记密码</Text>
            </View>
        )
    }
}