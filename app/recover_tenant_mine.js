import React from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';


/**
 * 个人中心
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
                <Text>abcd</Text>
            </View>
        )
    }
}