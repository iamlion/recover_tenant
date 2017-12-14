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
        // this.props.navigation.navigate("login",null,{
        //     animateStyle:"",
        //     isAnimated:true
        // })
    }


    render(){

        return (
            <View
               style={{
                    justifyContent:"center",
                   alignItems:"center",
               }}
            >

                <Image
                    style={{
                        width:"100%",
                        height:350,
                    }}
                    source={require("./assets/icon7.png")}
                />

                <View
                   style={{
                       justifyContent:"center",
                       width:"100%",
                       height:60,
                       textAlign:"left",
                   }}

                >
                    <Text
                        style={{
                            color:"#676767",
                            fontSize:20,

                        }}
                    >
                        修改密码
                    </Text>

                    <Image
                        style={{
                            width:15,
                            height:15,
                            position:"absolute",
                            right:0,
                            Top:0,
                        }}
                        source={require("./assets/icon8.png")}
                    />
                    <View
                        style={{
                            height:1,
                            backgroundColor:"#d9d9d9",
                            width:"100%",
                        }}
                    >

                    </View>

                </View>

                <View
                    style={{
                        justifyContent:"center",
                        width:"100%",
                        height:60,
                        textAlign:"left",
                    }}

                >
                    <Text
                        style={{
                            color:"#676767",
                            fontSize:20,

                        }}
                    >
                     我的回收
                    </Text>

                    <Image
                        style={{
                            width:15,
                            height:15,
                            position:"absolute",
                            right:0,
                            Top:0,
                        }}
                        source={require("./assets/icon8.png")}
                    />

                </View>
                <View
                    style={{
                        height:1,
                        backgroundColor:"#d9d9d9",
                        width:"100%",
                    }}
                >

                </View>

                <View
                    style={{
                        justifyContent:"center",
                        width:"100%",
                        height:60,
                        textAlign:"left",
                    }}

                >
                    <Text
                        style={{
                            color:"#676767",
                            fontSize:20,

                        }}
                    >
                        退出登录
                    </Text>

                    <Image
                        style={{
                            width:15,
                            height:15,
                            position:"absolute",
                            right:0,
                            Top:0,
                        }}
                        source={require("./assets/icon8.png")}
                    />

                </View>

                <View
                    style={{
                        height:1,
                        backgroundColor:"#d9d9d9",
                        width:"100%",
                    }}
                >

                </View>
                <View
                    style={{
                        height:1,
                        backgroundColor:"#d9d9d9",
                        width:"100%",
                    }}
                >

                </View>

                <View
                     style={{
                         justifyContent:"center",
                         alignItems:"center",
                         position:"absolute",
                         top:100,
                     }}
                >
                    <Image
                        style={{
                            width:150,
                            height:150,
                        }}

                        source={require("./assets/icon6.png")}
                    />
                    <Text
                        style={{
                            marginTop:15,
                            backgroundColor:"transparent",
                            color:"#ffffff",
                            fontSize:25,
                        }}
                    >
                        Adrienne
                    </Text>



                </View>
            </View>
        )
    }
}