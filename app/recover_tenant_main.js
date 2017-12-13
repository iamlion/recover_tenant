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
                        backgroundColor:"#fff",
                        flexDirection:"row",
                        alignItems:"center"
                    }}>

                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={()=>{
                            this.setState({
                                selectIdx:0
                            });
                        }}
                        style={{
                            height:40,
                            flex:0.5,
                            justifyContent:"center",
                            alignItems:"center"
                        }}
                    >
                        <Text style={[{
                            fontSize:16,

                        },{
                            color:this.state.selectIdx == 0?app_base_color:"#5e5e5e"
                        }]}>送到回收站</Text>
                    </TouchableOpacity>
                    <View style={{
                        height:24,
                        width:1,
                        backgroundColor:app_base_color
                    }}></View>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={()=>{
                            this.setState({
                                selectIdx:1
                            });
                        }}
                        style={{
                            height:40,
                            flex:0.5,
                            justifyContent:"center",
                            alignItems:"center"
                        }}
                    >
                        <Text style={[{
                            fontSize:16,

                        },{
                            color:this.state.selectIdx == 1?app_base_color:"#5e5e5e"
                        }]}>预约上门</Text>
                    </TouchableOpacity>


                </View>


                <BaseListView
                    renderRecommendItem={(item, idx) => {
                        return (
                            <View></View>
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
                    renderHeader={()=>{
                        return (
                            <View style={{
                                paddingTop:12,
                                paddingBottom:12,
                                paddingLeft:12,
                                paddingRight:12
                            }}>
                                <View style={{
                                    height:35,
                                    width:"100%",
                                    backgroundColor:"#fff",
                                    flexDirection:"row",
                                    justifyContent:"center",
                                    alignItems:"center"
                                }}>
                                    <Image
                                        style={{
                                            width:10,
                                            height:18,
                                            resizeMode:"stretch"
                                        }}
                                        source={require("./assets/messageIcon.png")}
                                    />
                                    <Text style={{
                                        fontSize:12,
                                        color:"#2d2d2d"
                                    }}>
                                        共有3个点要回收
                                    </Text>
                                </View>
                            </View>
                        )
                    }}
                />

            </View>
        )
    }
}