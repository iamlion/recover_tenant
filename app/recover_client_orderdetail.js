import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    ListView
} from 'react-native';

import BaseComponent from './baseComponent';

export default class extends BaseComponent {

    constructor(props){
        super(props);

    }


    render(){

        let config = this.props.navigation.state.params.item || {};
        return (
            <View
                style={{
                    flex:1,
                }}
            >
                {
                    this.renderNavHeader("订单详情")
                }

                <View style={{
                    padding: 12
                }}>
                    <View
                        style={{
                            backgroundColor: "#fff",
                            borderRadius: 4,
                            overflow: "hidden",
                            paddingLeft: 12,
                            paddingRight: 12,
                        }}>
                        <View
                            style={{
                                height: 55,
                                justifyContent: "center"
                            }}
                        >
                            <Text style={{
                                fontSize: 15,
                                color: "#838383"
                            }}>订单编号：100028</Text>
                        </View>
                        <View style={{
                            width: 20,
                            height: 20,
                            borderRadius: 20 / 2,
                            overflow: "hidden",
                            position: "absolute",
                            left: -10,
                            top: 45,
                            backgroundColor: "#e9e9e9"
                        }}></View>
                        <View style={{
                            width: 20,
                            height: 20,
                            borderRadius: 20 / 2,
                            overflow: "hidden",
                            position: "absolute",
                            right: -10,
                            top: 45,
                            backgroundColor: "#e9e9e9"
                        }}></View>
                        <Image
                            style={{
                                width: kScreenWidth - 48,
                                height: 1,
                                resizeMode: "stretch",
                                tintColor: "#9e9e9e"
                            }}
                            source={require("./assets/dashline.png")}
                        />
                        <View style={{
                            marginTop: 20,
                            marginBottom:20
                        }}>

                            <View
                                style={{
                                flexDirection:"row"
                            }}>
                                <View style={{
                                    flex:0.5,
                                    flexDirection:"row",
                                }}>
                                    <Text style={{
                                        fontSize:15,
                                        color:"#838383"
                                    }}>姓名:</Text>
                                    <Text style={{
                                        fontSize:14,
                                        color:"#505050"
                                    }}>李先生</Text>
                                </View>
                                <View style={{
                                    flex:0.5,
                                    flexDirection:"row",
                                    alignItems:"flex-end",
                                }}>
                                    <Text style={{
                                        fontSize:15,
                                        color:"#838383"
                                    }}>回收内容:</Text>
                                    <Text style={{
                                        fontSize:14,
                                        color:"#505050",
                                        minWidth:45
                                    }}>饮料瓶</Text>
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection:"row",
                                    marginTop:12
                                }}>
                                <View style={{
                                    flex:0.5,
                                    flexDirection:"row",
                                }}>
                                    <Text style={{
                                        fontSize:15,
                                        color:"#838383"
                                    }}>预计数量:</Text>
                                    <Text style={{
                                        fontSize:14,
                                        color:"#696969"
                                    }}>¥ 0.4公斤</Text>
                                </View>
                                <View style={{
                                    flex:0.5,
                                    flexDirection:"row",
                                    alignItems:"flex-end",
                                }}>
                                    <Text style={{
                                        fontSize:15,
                                        color:"#838383"
                                    }}>回收时间:</Text>
                                    <Text style={{
                                        fontSize:14,
                                        color:"#696969",
                                        minWidth:45
                                    }}>2017/9/29</Text>
                                </View>
                            </View>
                        </View>

                    </View>
                </View>

            </View>
        )
    }

}