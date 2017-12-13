import React from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';


/**
 * 忘记密码
 * */

export default class extends React.Component {

    constructor(props){
        super(props);
    }


    componentDidMount() {
        this.props.navigation.navigate("login",null,{
            animateStyle:"",
            isAnimated:true
        })
    }


    render(){

        return (
            <View>
                <Text>忘记密码</Text>
            </View>
        )
    }
}