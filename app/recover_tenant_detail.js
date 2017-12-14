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
            <View
            style={{
                flex:1,
            }}
            >
                {this.renderNavHeader("回收详情")}
                <View
                    style={{
                        justifyContent:"center",
                        alignItems:"center",
                        position:"absolute",
                        bottom:0,
                        width:"100%",
                        height:50,
                        backgroundColor:"#53ae7f"

                    }}
                >
                    <Text
                        style={{
                            fontSize:25,
                            position:"absolute",
                            color:"#ffffff"
                        }}
                    >
                        确定
                    </Text>


                </View>

                <View
                   style={{
                       width:"100%",
                       height:200,
                       backgroundColor:"#dcdeff"
                   }}
                >

                </View>


                <View
                  style={{
                      marginTop:20,
                      justifyContent:"center",
                      width:"100%",
                      height:40,
                      paddingLeft:50,
                  }}
                >
                  <Image
                      style={{
                          width:30,
                          height:30,
                          resizeMode:"stretch",
                      }}
                      source={require("./assets/icon9.png")}
                  />
                    <Text
                        style={{
                            position:"absolute",
                            left:100,
                            justifyContent:"center",
                            fontSize:20,
                            color:"#393939",
                        }} >
                        预计回收时间1小时30分
                    </Text>
                </View>

                <View
                    style={{
                        paddingLeft:50,
                        justifyContent:"center",
                        width:"100%",
                        height:40,
                    }}
                >
                    <Image
                        style={{
                            width:30,
                            height:30,
                            resizeMode:"stretch",
                        }}
                        source={require("./assets/icon10.png")}
                    />
                    <Text
                        style={{
                            position:"absolute",
                            left:100,
                            justifyContent:"center",
                            fontSize:20,
                            color:"#393939",
                        }}
                    >
                        预计路程共有23公里
                    </Text>
                </View>




            </View>


        )
    }
}