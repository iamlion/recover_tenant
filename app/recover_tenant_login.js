import React from'react';
import{
    AppRegistry,
    View,
    Image,
    ActivityIndicator,
    TextInput,
    Text
}from 'react-native'

let viewBorderStyle = {
    borderWidth:1,
    borderColor:"#d2d2d2",
    flexDirection:"row",
}


export default class Person extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex:1,
                    backgroundColor: "#ffffff",
                    // justifyContent:"center",
                    alignItems:"center",/*s水平*/
                }
                }
            >
                <Image
                    style={{
                        width:100,
                        height:100,
                        marginTop:150,

                    }}
                    source={require("./assets/icon1.jpg")}
                />
                <ActivityIndicator
                    style={{
                        // marginTop:100,
                    }}
                    animating={false}
                    color={"#00ffff"}
                    size="large"
                />
                <View
                    style={[viewBorderStyle,{
                        height:40,
                        alignItems:"center",
                        borderRadius:45/2,/*允许为元素添加圆角*/
                        overflow:"hidden",
                        paddingLeft:10,

                    }]



                    }>
                    <Image
                        style={{
                            width:25,
                            height:25,
                            resizeMode:"stretch"
                        }}
                        source={require("./assets/icon2.png")}
                    />
                    <TextInput
                        style={{
                            width:200,
                            borderColor:"#d2d2d2",
                            flexDirection:"row",
                        }}
                        placeholder={"请输入手机号码"}/*当没有任何文字输入时，显示此字符串*/

                    />
                    <Image
                        style={{
                            width:25,
                            height:25,
                            resizeMode:"stretch"
                        }}
                        source={require("./assets/icon3.png")}
                    />
                </View>
                <View
                    style={[viewBorderStyle,{
                        marginTop:15,
                        height:40,
                        alignItems:"center",
                        borderRadius:45/2,/*允许为元素添加圆角*/
                        overflow:"hidden",
                        paddingLeft:10,

                    }]



                    }>
                    <Image
                        style={{
                            width:25,
                            height:25,
                            resizeMode:"stretch"
                        }}
                        source={require("./assets/icon4.png")}
                    />
                    <TextInput
                        style={{
                            width:225,
                            borderColor:"#d2d2d2",
                            flexDirection:"row",
                        }}
                        placeholder={"请输入密码"}/*当没有任何文字输入时，显示此字符串*/

                    />
                </View>
                <View
                    style={{
                        justifyContent:"center",
                        marginTop:50,
                        alignItems:"center",

                    }}
                >

                    <Image
                        style={{
                            width:300,
                            height:60,
                            resizeMode:"stretch",
                        }}
                        source={require("./assets/icon5.png")}

                    />
                    <Text
                        style={{
                            justifyContent:"center",
                            alignItems:"center",
                            position:"absolute",
                            backgroundColor:"transparent",
                            fontSize:30,
                            color:"#ffffff"
                        }}
                    >登录
                    </Text>
                </View>
                <View

                ></View>

            </View>







        )
    }
}
