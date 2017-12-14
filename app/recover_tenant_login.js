import React from 'react';
import {
    AppRegistry,
    View,
    Image,
    ActivityIndicator,
    TextInput,
    Text,
    Keyboard,
    TouchableOpacity
} from 'react-native'

let viewBorderStyle = {
    borderWidth: 1,
    borderColor: "#d2d2d2",
    flexDirection: "row",
}


export default class Person extends React.Component {


    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: "#ffffff",
                    // justifyContent:"center",
                    alignItems: "center", /*s水平*/
                }
                }
            >
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        marginTop: 150,

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
                    style={[viewBorderStyle, {
                        height: 40,
                        alignItems: "center",
                        borderRadius: 45 / 2, /*允许为元素添加圆角*/
                        overflow: "hidden",
                        paddingLeft: 10,

                    }]


                    }>
                    <Image
                        style={{
                            width: 25,
                            height: 25,
                            resizeMode: "stretch"
                        }}
                        source={require("./assets/icon2.png")}
                    />
                    <TextInput
                        style={{
                            width: 200,
                            borderColor: "#d2d2d2",
                            flexDirection: "row",
                        }}
                        placeholder={"请输入手机号码"}/*当没有任何文字输入时，显示此字符串*/

                    />
                    <Image
                        style={{
                            width: 25,
                            height: 25,
                            resizeMode: "stretch"
                        }}
                        source={require("./assets/icon3.png")}
                    />
                </View>
                <View
                    style={[viewBorderStyle, {
                        marginTop: 15,
                        height: 40,
                        alignItems: "center",
                        borderRadius: 45 / 2, /*允许为元素添加圆角*/
                        overflow: "hidden",
                        paddingLeft: 10,

                    }]


                    }>
                    <Image
                        style={{
                            width: 25,
                            height: 25,
                            resizeMode: "stretch"
                        }}
                        source={require("./assets/icon4.png")}
                    />
                    <TextInput
                        style={{
                            width: 225,
                            borderColor: "#d2d2d2",
                            flexDirection: "row",
                        }}
                        placeholder={"请输入密码"}/*当没有任何文字输入时，显示此字符串*/

                    />
                </View>
                <View
                    style={{
                        marginTop: 5,
                        width: 250,
                        alignItems: "flex-end",
                    }}
                >

                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={()=>{
                            this.props.navigation.navigate("forget");
                        }}
                    >
                        <Text
                            style={{
                                color: "#c3c3c3"
                            }}
                        >
                            忘记密码?
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        justifyContent: "center",
                        marginTop: 45,
                        alignItems: "center",

                    }}
                >

                    <Image
                        style={{
                            width: 300,
                            height: 80,
                            resizeMode: "stretch",
                        }}
                        source={require("./assets/icon5.png")}

                    />
                    <Text
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            backgroundColor: "transparent",
                            fontSize: 25,
                            color: "#ffffff"
                        }}
                    >登录
                    </Text>
                </View>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={()=>{
                        this.props.navigation.navigate("register");
                    }}
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: 280,
                        height: 50,
                        backgroundColor: "#ffffff",
                        borderRadius: 30,
                        overflow: "hidden",
                        borderColor: "#8fd8bd",
                        borderWidth: 1,
                    }}
                >
                    <Text
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            backgroundColor: "transparent",
                            fontSize: 25,
                            color: "#49bd90"
                        }}
                    >注册
                    </Text>
                </TouchableOpacity>


            </View>







        )
    }
}
