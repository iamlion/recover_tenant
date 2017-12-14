import React from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';


/**
 * 注册
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
                {this.renderNavHeader("注册")}
                <Text>忘记密码</Text>
            </View>
        )
    }
}