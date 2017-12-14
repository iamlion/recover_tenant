import React from 'react';
import {
    View,
    Image,
    Text,
    Platform,
    TouchableOpacity,
    ScrollView,
    TextInput
} from 'react-native';


export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menus: ["", "", ""]
        }
    }


    componentDidMount() {

    }


    render() {

        return (
            <View>

                <View
                    style={{
                        height: Platform.select({android: 44, ios: 64}),
                        paddingTop: 20,
                        backgroundColor: "#fff",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <Text style={{
                        fontSize: 18,
                        color: app_base_color,
                        fontWeight: "bold",
                    }}>正在回收</Text>
                </View>
                <ScrollView>

                    <View
                        style={{
                            height: 140,
                            width: "100%",
                            backgroundColor: "#fff"
                        }}>
                        <Text>我是地图</Text>
                    </View>

                    <View
                        style={{
                            height: 36,
                            paddingLeft: 20,
                            paddingRight: 20,
                            width: "100%",
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "#fff"
                        }}>
                        <Image
                            style={{
                                width: 13,
                                height: 18,
                                resizeMode: "stretch"
                            }}
                            source={require("./assets/messageIcon.png")}
                        />
                        <Text style={{
                            fontSize: 14,
                            color: "#7d7d7d",
                            marginLeft: 8
                        }}>
                            回收员必须在1公里内才能完成
                        </Text>

                    </View>

                    <View
                        style={{
                            width: "100%"
                        }}>
                        {
                            this.state.menus.map(() => {

                                return (
                                    <View
                                        style={{
                                            paddingLeft: 12,
                                            paddingRight: 12,
                                            paddingTop: 4,
                                            paddingBottom: 4,
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }}>
                                        <View style={{
                                            height: 55,
                                            backgroundColor: "#fff",
                                            borderRadius: 5,
                                            overflow: "hidden",
                                            width: "100%",
                                            flexDirection: "row",
                                            paddingLeft: 12,
                                            paddingRight: 12,
                                            alignItems: "center"
                                        }}>
                                            <View style={{
                                                width: 20,
                                                height: 20,
                                                borderRadius: 20 / 2,
                                                backgroundColor: "#ed697f"
                                            }}></View>
                                            <Text style={{
                                                fontSize: 16,
                                                color: "#8a8a8a",
                                                marginLeft: 15
                                            }}>塑料瓶回收</Text>

                                            <TouchableOpacity
                                                activeOpacity={1}
                                                onPress={() => {
                                                    this.setState({
                                                        showNums: true
                                                    })
                                                }}
                                                style={{
                                                    position: "absolute",
                                                    top: 0,
                                                    right: 22,
                                                    height: 55,
                                                    justifyContent: "center"
                                                }}>
                                                <Image
                                                    style={{
                                                        width: 55,
                                                        height: 40,
                                                        resizeMode: "stretch"
                                                    }}
                                                    source={require("./assets/completeIcon.png")}
                                                />

                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            })
                        }

                    </View>

                    <View
                        style={{
                            paddingLeft: 20,
                            paddingRight: 20
                        }}>


                        <View
                            style={{
                                backgroundColor: "#fff",

                            }}>
                            <View
                                style={{
                                    height: 40,
                                    flexDirection: "row",
                                    paddingLeft: 12,
                                    paddingRight: 12
                                }}>
                                <View
                                    style={{
                                        height: "100%",
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}>
                                    <Text style={{
                                        fontSize: 14,
                                        color: "#d3d3d3"
                                    }}>姓名：</Text>
                                    <Text style={{
                                        fontSize: 16,
                                        color: "#666666"
                                    }}>李先生</Text>
                                </View>
                                <View
                                    style={{
                                        height: "100%",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginLeft: 20
                                    }}>
                                    <Text style={{
                                        fontSize: 14,
                                        color: "#d3d3d3"
                                    }}>联系电话：</Text>
                                    <Text style={{
                                        fontSize: 16,
                                        color: "#666666"
                                    }}>138622xxxxxx</Text>
                                    <Image
                                    />
                                </View>
                            </View>
                            <Image
                                style={{
                                    width: "100%",
                                    height: 1,
                                    resizeMode: "stretch",
                                    tintColor: "#dbdbdb"

                                }}
                                source={require("./assets/dashline.png")}
                            />
                        </View>
                        <View
                            style={{
                                backgroundColor: "#fff",

                            }}>
                            <View
                                style={{
                                    height: 40,
                                    flexDirection: "row",
                                    paddingLeft: 12,
                                    paddingRight: 12
                                }}>
                                <View
                                    style={{
                                        height: "100%",
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}>
                                    <Text style={{
                                        fontSize: 14,
                                        color: "#d3d3d3"
                                    }}>回收饮料瓶：</Text>
                                    <Text style={{
                                        fontSize: 16,
                                        color: "#666666"
                                    }}>200个</Text>
                                </View>
                                <View
                                    style={{
                                        height: "100%",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginLeft: 20
                                    }}>
                                    <Text style={{
                                        fontSize: 14,
                                        color: "#d3d3d3"
                                    }}>回收塑料瓶：</Text>
                                    <Text style={{
                                        fontSize: 16,
                                        color: "#666666"
                                    }}>4g</Text>
                                </View>
                            </View>
                            <Image
                                style={{
                                    width: "100%",
                                    height: 1,
                                    resizeMode: "stretch",
                                    tintColor: "#dbdbdb"

                                }}
                                source={require("./assets/dashline.png")}
                            />
                        </View>
                        <View
                            style={{
                                backgroundColor: "#fff",

                            }}>
                            <View
                                style={{
                                    height: 40,
                                    flexDirection: "row",
                                    paddingLeft: 12,
                                    paddingRight: 12
                                }}>
                                <View
                                    style={{
                                        height: "100%",
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}>
                                    <Text style={{
                                        fontSize: 14,
                                        color: "#d3d3d3"
                                    }}>备注：</Text>
                                    <Text style={{
                                        fontSize: 16,
                                        color: "#666666"
                                    }}>没有电梯，步行</Text>
                                </View>
                                <View
                                    style={{
                                        height: "100%",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginLeft: 20
                                    }}>
                                    <Text style={{
                                        fontSize: 14,
                                        color: "#d3d3d3"
                                    }}>地址：</Text>
                                    <Text style={{
                                        fontSize: 16,
                                        color: "#666666"
                                    }}>国泰小区</Text>
                                </View>
                            </View>
                            <Image
                                style={{
                                    width: "100%",
                                    height: 1,
                                    resizeMode: "stretch",
                                    tintColor: "#dbdbdb"
                                }}
                                source={require("./assets/dashline.png")}
                            />
                        </View>
                        <View
                            style={{
                                backgroundColor: "#fff",

                            }}>
                            <View
                                style={{
                                    height: 40,
                                    flexDirection: "row",
                                    paddingLeft: 12,
                                    paddingRight: 12
                                }}>
                                <View
                                    style={{
                                        height: "100%",
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}>
                                    <Text style={{
                                        fontSize: 14,
                                        color: "#d3d3d3"
                                    }}>回收时间：</Text>
                                    <Text style={{
                                        fontSize: 16,
                                        color: "#666666"
                                    }}>9/28 3:00pm</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>


                {
                    this.state.showNums && (
                        <View
                            style={{
                                width: kScreenWidth,
                                height: kScreenHeight,
                                backgroundColor: "rgba(0,0,0,0.5)",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <View style={{
                                padding: 20,
                                backgroundColor: "#fff",
                                width: 220,
                                borderWidth: 3,
                                borderColor: app_base_color,
                            }}>
                                <View style={{
                                    alignItems: "center"

                                }}>
                                    <Text style={{
                                        fontSize: 16,
                                        color: app_base_color,
                                        marginTop: 8
                                    }}>确认回收数量</Text>
                                </View>


                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "flex-end",
                                        height: 32,
                                        justifyContent: "flex-start"
                                    }}>
                                    <Text style={{
                                        fontSize: 16,
                                        color: "#6b6b6b"
                                    }}>回收饮料瓶：</Text>
                                    <Text style={{
                                        fontSize: 14,
                                        color: "#999999"
                                    }}>500个</Text>
                                </View>

                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        height: 32,
                                        justifyContent: "flex-start"
                                    }}>
                                    <Text style={{
                                        fontSize: 16,
                                        color: "#6b6b6b"
                                    }}>实际回收数量：</Text>
                                    <TextInput
                                        style={{
                                            height: 28,
                                            width: 40,
                                            fontSize: 15,
                                            borderWidth: 1,
                                            borderColor: app_base_color
                                        }}
                                    />
                                    <Text style={{
                                        fontSize: 14,
                                        color: "#999999",
                                        marginLeft: 2
                                    }}>个</Text>
                                </View>

                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "flex-end",
                                        height: 32,
                                        justifyContent: "flex-start",
                                        marginTop: 12
                                    }}>
                                    <Text style={{
                                        fontSize: 16,
                                        color: "#6b6b6b"
                                    }}>回收塑料棚：</Text>
                                    <Text style={{
                                        fontSize: 14,
                                        color: "#999999"
                                    }}>4公斤</Text>
                                </View>

                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        height: 32,
                                        justifyContent: "flex-start"
                                    }}>
                                    <Text style={{
                                        fontSize: 16,
                                        color: "#6b6b6b"
                                    }}>实际回收数量：</Text>
                                    <TextInput
                                        style={{
                                            height: 28,
                                            width: 40,
                                            fontSize: 15,
                                            borderWidth: 1,
                                            borderColor: app_base_color
                                        }}
                                    />
                                    <Text style={{
                                        fontSize: 14,
                                        color: "#999999",
                                        marginLeft: 2
                                    }}>kg</Text>
                                </View>

                                <View
                                    style={{
                                        alignItems: "center",
                                        marginTop: 15
                                    }}>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        onPress={() => {
                                            this.setState({
                                                showNums: null
                                            })
                                        }}
                                        style={{
                                            fontSize: 16,
                                            color: "#fff",
                                            width: 160,
                                            height: 35,
                                            borderRadius: 35 / 2,
                                            backgroundColor: app_base_color,
                                            overflow: "hidden",
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }}>
                                        <Text style={{
                                            fontSize: 14,
                                            color: "#fff"
                                        }}>确认</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    )
                }

            </View>
        )
    }
}