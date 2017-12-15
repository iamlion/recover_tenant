import React from 'react';
import {
    View,
    Image,
    Text,
    TextInput,
    ScrollView,
} from 'react-native';


/**
 * 忘记密码
 * */
import BaseComponent from './baseComponent'

export default class extends BaseComponent {

    constructor(props){
        super(props);
    }


    componentDidMount() {

    }


    render(){

        return (


            <View>
                {this.renderNavHeader("忘记密码")}
                <ScrollView
                    style={{
                        backgroundColor:'#ffffff',
                        height:'100%',
                    }}
                >


                <View
                    style={{
                        alignItems:'center',
                    }}
                >

                    <TextInput
                        placeholder={'请输入手机号'}
                        style={{
                            fontSize:16,
                            color:'#959595',
                            marginTop:70,
                            marginRight:170,
                        }}
                    />
                    <View
                        style={{
                            height:1,
                            width:'80%',
                            backgroundColor:'#1eb17b',
                            marginTop:10,
                        }}
                    >

                    </View>

                    <View
                    style={{
                        flexDirection:'row',
                    }}
                >
                    <TextInput
                        placeholder={'请输入验证码'}
                        style={{
                            fontSize:16,
                            color:'#959595',
                            paddingTop:50,
                        }}
                    />

                        <Text
                            style={{
                                fontSize:14,
                                paddingTop:50,
                                marginLeft:100,
                                color:'#bcbcbc'
                            }}
                        >获取验证码</Text>

                </View>

                    <View
                        style={{
                            height:1,
                            width:'80%',
                            backgroundColor:'#1eb17b',
                            marginTop:10,
                        }}
                    >
                    </View>

                    <View
                        style={{
                            flexDirection:'row',
                            marginTop:50,
                        }}
                    >

                        <TextInput
                            placeholder={'请输入新密码'}
                            style={{
                                fontSize:16,
                                marginRight:75,
                                color:'#959595'
                            }}
                        />
                        <Image
                            style={{
                                width:30,
                                height:20,
                                marginLeft:65,
                            }}
                            source={require('./assets/tupian.jpg')}/>
                    </View>

                    <View
                        style={{
                            height:1,
                            width:'80%',
                            backgroundColor:'#1eb17b',
                            marginTop:10,
                        }}
                    >
                    </View>

                    <View
                        style={{
                            flexDirection:'row',
                            marginTop:50,
                        }}
                    >
                        <TextInput
                            placeholder={'请重新输入新密码'}
                            style={{
                                fontSize:16,
                                marginRight:60,
                                color:'#959595'
                            }}
                        />

                        <Image
                            style={{
                                width:30,
                                height:20,
                                marginLeft:45,
                            }}
                            source={require('./assets/tupian.jpg')}/>

                    </View>


                    <View
                        style={{
                            height:1,
                            width:'80%',
                            backgroundColor:'#1eb17b',
                            marginTop:10,
                        }}
                    >
                    </View>

                    <View
                        style={{
                            marginTop:50,
                            width:170,
                            height:50,
                            borderRadius:30,
                            borderWidth:1,
                            justifyContent:"center",
                            alignItems:"center",
                            overflow:"hidden",
                            borderColor:'#1eb17b'
                        }}
                    >
                        <Image
                            style={{
                                width:170,
                                height:150,
                            }}
                            source={require('./assets/icon5.png')}/>

                        <Text
                            style={{
                                position:'absolute',
                                backgroundColor:'transparent',
                                fontSize:20,
                                color:'#ffffff'
                            }}
                        >登录</Text>

                    </View>



                </View>
                </ScrollView>

            </View>


        )
    }
}