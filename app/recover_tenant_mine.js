import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from 'react-native';


/**
 * 个人中心
 * */

export default class extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        // this.props.navigation.navigate("login",null,{
        //     animateStyle:"",
        //     isAnimated:true
        // })
    }


    render() {

        return (
            <ScrollView
             style={{
                 backgroundColor:"#ffffff",
             }}
            >

            <View
               style={{
                   flex:1,
                   justifyContent:"center",
                   alignItems:"center",
               }}
            >

                <Image
                    style={{
                        width:"100%",
                        height:300,
                        resizeMode: "stretch",
                    }}
                    source={require("./assets/icon7.png")}
                />

                <View
                   style={{
                       marginTop:30,
                       justifyContent:"center",
                       width:"100%",
                       height:60,
                       textAlign:"left",
                   }}

                >
                    <Text
                        style={{
                            color:"#787878",
                            fontSize:17,
                            paddingLeft:10,
                        }}>
                        修改密码
                    </Text>

                    <Image
                        style={{
                            tintColor:"#bebebe",
                            width:15,
                            height:15,
                            position:"absolute",
                            right:10,
                            Top:0,
                        }}
                        source={require("./assets/icon8.png")}
                    />


                    </View>
                    <View
                        style={{
                            height: 1,
                            backgroundColor: "#d9d9d9",
                            width: "100%",
                        }}
                    >
                </View>

                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                        this.props.navigation.navigate("orders");
                    }}
                    style={{
                        justifyContent: "center",
                        width: "100%",
                        height: 60,
                        textAlign: "left",
                    }}

                >
                    <Text
                        style={{
                            color:"#787878",
                            fontSize:17,
                            paddingLeft:10,
                        }}>
                        我的回收

                    </Text>

                    <Image
                        style={{
                            tintColor:"#bebebe",
                            width:15    ,
                            height:15,
                            position:"absolute",
                            right:10,
                            Top:0,

                        }}
                        source={require("./assets/icon8.png")}
                    />

                </TouchableOpacity>
                <View
                    style={{
                        height: 1,
                        backgroundColor: "#d9d9d9",
                        width: "100%",
                    }}
                >

                </View>

                <View
                    style={{
                        justifyContent: "center",
                        width: "100%",
                        height: 60,
                        textAlign: "left",
                    }}

                >

                    <Text
                        style={{
                            color:"#787878",
                            fontSize:17,
                            paddingLeft:10,
                        }}>
                     退出登录

                    </Text>
                    <Image
                        style={{
                            tintColor:"#bebebe",
                            width:15,
                            height:15,
                            position:"absolute",
                            right:10,
                            Top:0,
                        }}
                        source={require("./assets/icon8.png")}
                    />

                </View>

                <View
                    style={{
                        height: 1,
                        backgroundColor: "#d9d9d9",
                        width: "100%",
                    }}
                >

                </View>

                <View
                     style={{
                         justifyContent:"center",
                         alignItems:"center",
                         position:"absolute",
                         top:70,
                     }}
                >
                    <Image
                        style={{
                            width: 150,
                            height: 150,
                        }}

                        source={require("./assets/icon6.png")}
                    />
                    <Text
                        style={{
                            marginTop:10,
                            backgroundColor:"transparent",
                            color:"#ffffff",
                            fontSize:25,
                        }}
                    >
                        Adrienne
                    </Text>


                </View>
            </View>
            </ScrollView>
        )
    }
}