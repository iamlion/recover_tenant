import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    TextInput,
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
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >

                <Image
                    style={{
                        width: "100%",
                        height: 350,
                    }}
                    source={require("./assets/icon7.png")}
                />

                <View
                    style={{
                        justifyContent: "center",
                        width: "100%",
                        height: 60,
                        textAlign: "left",
                    }}

                >
                    <TextInput
                        style={{
                            color: "#676767",
                            fontSize: 20,
                            paddingLeft: 10,
                        }}
                        placeholder={"修改密码"}/*当没有任何文字输入时，显示此字符串*/

                    />

                    <Image
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            width: 15,
                            height: 15,
                            position: "absolute",
                            right: 0,
                            Top: 0,
                        }}
                        source={require("./assets/icon8.png")}
                    />
                    <View
                        style={{
                            height: 1,
                            backgroundColor: "#d9d9d9",
                            width: "100%",
                        }}
                    >

                    </View>

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
                    <TextInput
                        style={{
                            color: "#676767",
                            fontSize: 20,
                            paddingLeft: 10,
                        }}
                        placeholder={"我的回收"}/*当没有任何文字输入时，显示此字符串*/

                    />

                    <Image
                        style={{
                            width: 15,
                            height: 15,
                            position: "absolute",
                            right: 0,
                            Top: 0,
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

                    <TextInput
                        style={{
                            color: "#676767",
                            fontSize: 20,
                            paddingLeft: 10,
                        }}
                        placeholder={"退出登录"}/*当没有任何文字输入时，显示此字符串*/

                    />

                    <Image
                        style={{
                            width: 15,
                            height: 15,
                            position: "absolute",
                            right: 0,
                            Top: 0,
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
                        height: 1,
                        backgroundColor: "#d9d9d9",
                        width: "100%",
                    }}
                >

                </View>

                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        top: 100,
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
                            marginTop: 15,
                            backgroundColor: "transparent",
                            color: "#ffffff",
                            fontSize: 25,
                        }}
                    >
                        Adrienne
                    </Text>


                </View>
            </View>
        )
    }
}