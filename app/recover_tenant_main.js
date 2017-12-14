import React from 'react';
import {
    View,
    Image,
    Text,
    Platform,
    TouchableOpacity,
    ListView
} from 'react-native';

import BaseListView from './baseListComponent';

export default class extends React.Component {

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

        this.props.navigation.navigate("login", null, {
            animateStyle: "",
            isAnimated: true
        })
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
                    }}>回收</Text>
                </View>

                <View
                    style={{
                        height: 40,
                        width: "100%",
                        backgroundColor: "#fff",
                        flexDirection: "row",
                        alignItems: "center"
                    }}>

                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {
                            this.setState({
                                selectIdx: 0
                            });
                        }}
                        style={{
                            height: 40,
                            flex: 0.5,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Text style={[{
                            fontSize: 16,

                        }, {
                            color: this.state.selectIdx == 0 ? app_base_color : "#5e5e5e"
                        }]}>送到回收站</Text>
                    </TouchableOpacity>
                    <View style={{
                        height: 24,
                        width: 1,
                        backgroundColor: app_base_color
                    }}></View>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {
                            this.setState({
                                selectIdx: 1
                            });
                        }}
                        style={{
                            height: 40,
                            flex: 0.5,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Text style={[{
                            fontSize: 16,

                        }, {
                            color: this.state.selectIdx == 1 ? app_base_color : "#5e5e5e"
                        }]}>预约上门</Text>
                    </TouchableOpacity>


                </View>


                <BaseListView
                    renderRecommendItem={(item, idx) => {
                        return (
                            <View style={{
                                paddingTop: 12,
                                paddingBottom: 12,
                                paddingLeft: 12,
                                paddingRight: 12
                            }}>
                                <View style={{
                                    height: 102,
                                    width: "100%",
                                    backgroundColor: "#fff",
                                }}>

                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            paddingTop: 6,
                                            paddingBottom: 6,
                                            height: 50,
                                            width: "100%",
                                            paddingLeft: 12,
                                            paddingRight: 12,
                                        }}>
                                        <View style={{
                                            height: 10,
                                            width: 10,
                                            borderRadius: 10 / 2,
                                            overflow: "hidden",
                                            backgroundColor: "#ed697f"
                                        }}>

                                        </View>
                                        <Text style={{
                                            fontSize: 14,
                                            color: "#636363",
                                            marginLeft: 8
                                        }}>塑料瓶回收</Text>

                                    </View>
                                    <Image
                                        style={{
                                            width:"100%",
                                            height:1,
                                            tintColor:"#e2e2e2"
                                        }}
                                        source={require("./assets/dashline.png")}
                                    />
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            paddingTop: 6,
                                            paddingBottom: 6,
                                            height: 50,
                                            width: "100%",
                                            paddingLeft: 12,
                                            paddingRight: 12,
                                        }}>

                                        <View style={{
                                            flexDirection:"row",
                                            alignItems:"center",
                                            flex:0.5
                                        }}>
                                            <Text style={{
                                                fontSize:14,
                                                color:"#535353"
                                            }}>回收数量：</Text>
                                            <Text style={{
                                                fontSize:14,
                                                color:"#535353"
                                            }}>0.4公斤</Text>
                                        </View>

                                        <View style={{
                                            flexDirection:"row",
                                            alignItems:"center",
                                            flex:0.5
                                        }}>
                                            <Text style={{
                                                fontSize:14,
                                                color:"#535353"
                                            }}>地址：</Text>
                                            <Text style={{
                                                fontSize:14,
                                                color:"#535353"
                                            }}>国泰小区5栋8装</Text>
                                        </View>
                                    </View>

                                </View>
                            </View>
                        );
                        // return (
                        //     <View
                        //         style={{
                        //         padding: 12,
                        //     }}>
                        //         <TouchableOpacity
                        //             activeOpacity={1}
                        //             onPress={() => {
                        //                 this.props.navigation.navigate("myOrderDetail",{
                        //                     item:item
                        //                 })
                        //             }}
                        //             style={{
                        //                 flex: 1,
                        //                 backgroundColor: "#fff",
                        //                 borderRadius: 4,
                        //                 overflow: "hidden",
                        //                 paddingLeft: 12,
                        //                 paddingRight: 12
                        //             }}>
                        //             <View
                        //                 style={{
                        //                     height: 55,
                        //                     justifyContent: "center"
                        //                 }}
                        //             >
                        //                 <Text style={{
                        //                     fontSize: 15,
                        //                     color: "#838383"
                        //                 }}>订单编号:FX10000008687</Text>
                        //                 {
                        //                     this.renderStatus(item.status)
                        //                 }
                        //             </View>
                        //             <View style={{
                        //                 width: 20,
                        //                 height: 20,
                        //                 borderRadius: 20 / 2,
                        //                 overflow: "hidden",
                        //                 position: "absolute",
                        //                 left: -10,
                        //                 top: 45,
                        //                 backgroundColor: "#e9e9e9"
                        //             }}></View>
                        //             <View style={{
                        //                 width: 20,
                        //                 height: 20,
                        //                 borderRadius: 20 / 2,
                        //                 overflow: "hidden",
                        //                 position: "absolute",
                        //                 right: -10,
                        //                 top: 45,
                        //                 backgroundColor: "#e9e9e9"
                        //             }}></View>
                        //             <Image
                        //                 style={{
                        //                     width: kScreenWidth - 48,
                        //                     height: 1,
                        //                     resizeMode: "stretch",
                        //                     tintColor: "#9e9e9e"
                        //                 }}
                        //                 source={require("./assets/dashline.png")}
                        //             />
                        //             <View style={{
                        //                 paddingTop: 12,
                        //                 paddingBottom: 20
                        //             }}>
                        //                 <Text style={{
                        //                     fontSize: 15,
                        //                     color: "#838383"
                        //                 }}>
                        //                     备注：回收种类多，路程源回收种类多，路程源回收种类多，路程源回收种类多，路程源回收种类多，路程源
                        //                 </Text>
                        //             </View>
                        //
                        //         </TouchableOpacity>
                        //
                        //     </View>
                        // )
                    }}
                    dataSource={this.state.dataSource}
                    renderHeader={() => {
                        return (
                            <View style={{
                                paddingTop: 12,
                                paddingBottom: 12,
                                paddingLeft: 12,
                                paddingRight: 12
                            }}>
                                <View style={{
                                    height: 35,
                                    width: "100%",
                                    backgroundColor: "#fff",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center"
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
                                        color: "#4e4e4e",
                                        marginLeft: 8
                                    }}>
                                        共有3个点要回收
                                    </Text>
                                </View>
                            </View>
                        )
                    }}
                />


                {/*<View*/}
                    {/*style={{*/}
                    {/*backgroundColor:"#f0f0f0",*/}
                    {/*padding:20,*/}
                    {/*marginTop:120*/}
                {/*}}>*/}
                    {/*<View style={{*/}
                        {/*width:120,*/}
                        {/*height:120,*/}
                        {/*backgroundColor:"#f00",*/}
                        {/*zIndex:9999*/}
                    {/*}}>*/}

                    {/*</View>*/}

                    {/*<View style={{*/}
                        {/*width:150,*/}
                        {/*height:150,*/}
                        {/*backgroundColor:"#f0f",*/}
                        {/*position:"absolute",*/}
                        {/*top:0,*/}
                        {/*right:0,*/}
                        {/*// right,*/}
                        {/*// bottom:*/}
                    {/*}}>*/}

                    {/*</View>*/}
                {/*</View>*/}


            </View>
        )
    }
}