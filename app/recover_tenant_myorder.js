import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    ListView
} from 'react-native';

import {
    TabNavigator
} from 'react-navigation';

import BaseComponent from './baseComponent';
import BaseListView from './baseListComponent';

export default class extends BaseComponent {

    constructor(props) {
        super(props);

        this.state = {
            selectIdx: 0,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        }
    }


    componentDidMount() {
        let menus = [
            {
                title: "生活用品",
                status: 1

            },
            {
                title: "生活用品",
                status: 2

            },
            {
                title: "生活用品",
                status: 1

            },
            {
                title: "生活用品",
                status: 1

            },
            {
                title: "生活用品",
                status: 2
            }
        ];
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(menus)
        })
    }

    renderStatus = (stus) => {
        if (stus == 1) {
            return (
                <Text style={{
                    fontSize: 12,
                    position: "absolute",
                    right: 12,
                    bottom: 18,
                    color: app_base_color
                }}>
                    进行中
                </Text>
            )
        } else if (stus == 2) {
            return (
                <Text style={{
                    fontSize: 12,
                    position: "absolute",
                    right: 12,
                    bottom: 18,
                    color: "#b5b5b5"
                }}>
                    已完成
                </Text>
            )
        }
    }

    render() {

        return (
            <View
                style={{
                    flex: 1,
                }}
            >
                {
                    this.renderNavHeader("我的回收")
                }

                <View
                    style={{
                        height: 45,
                        backgroundColor: "#fff",
                        flexDirection: "row",
                        alignItems: "center",
                        borderBottomWidth: 1,
                        borderBottomColor: "#d2d2d2"
                    }}>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({
                                selectIdx: 0
                            });
                        }}
                        activeOpacity={1}
                        style={{
                            flex: 0.5,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <Text style={(this.state.selectIdx == 0) ? {
                            fontSize: 15,
                            color: app_base_color,
                            fontWeight: "bold"
                        } : {
                            fontSize: 15,
                            color: "#7d7d7d"
                        }}>送到回收站</Text>

                    </TouchableOpacity>
                    <View style={{
                        height: 30,
                        width: 1,
                        backgroundColor: "#eeeeee"
                    }}></View>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {
                            this.setState({
                                selectIdx: 1
                            });
                        }}
                        style={{
                            flex: 0.5,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <Text style={(this.state.selectIdx == 1) ? {
                            fontSize: 15,
                            color: app_base_color,
                            fontWeight: "bold"
                        } : {
                            fontSize: 15,
                            color: "#7d7d7d"
                        }}>预约上门</Text>

                    </TouchableOpacity>

                </View>

                <BaseListView
                    renderRecommendItem={(item, idx) => {
                        return (
                            <View style={{
                                padding: 12
                            }}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => {
                                        this.props.navigation.navigate("myOrderDetail",{
                                            item:item
                                        })
                                    }}
                                    style={{
                                        flex: 1,
                                        backgroundColor: "#fff",
                                        borderRadius: 4,
                                        overflow: "hidden",
                                        paddingLeft: 12,
                                        paddingRight: 12
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
                                        }}>订单编号:FX10000008687</Text>
                                        {
                                            this.renderStatus(item.status)
                                        }
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
                                        paddingTop: 12,
                                        paddingBottom: 20
                                    }}>
                                        <Text style={{
                                            fontSize: 15,
                                            color: "#838383"
                                        }}>
                                            备注：回收种类多，路程源回收种类多，路程源回收种类多，路程源回收种类多，路程源回收种类多，路程源
                                        </Text>
                                    </View>

                                </TouchableOpacity>

                            </View>
                        )
                    }}
                    dataSource={this.state.dataSource}
                />

            </View>
        )
    }

}