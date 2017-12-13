import React from 'react';
import {
    View,
    Text,
    Platform,
    Image,
    TouchableOpacity
} from 'react-native';

export default class extends React.Component{

    constructor(props){
        super(props)

    }


    render(){
        return (
            <View>
                <Text>继承了Base</Text>
            </View>
        )
    }

    /*
    * 渲染返回
    * */
    renderNavBack = ()=>{
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={()=>{
                    this.props.navigation.goBack();
                }}
                style={{
                    justifyContent:"center",
                    alignItems:"center",
                    flex:1
                }}
            >
                <Image
                    style={{
                        width:10,
                        height:18,
                        tintColor:app_base_color,
                        resizeMode:"stretch"
                    }}
                    source={require("./assets/back.png")}
                />
            </TouchableOpacity>
        )
    }

    /**
     * 渲染头部
     * */
     renderNavHeader = (title,isNotGoBack)=>{

         return (
             <View
                 style={{
                     height : Platform.select({ios:64,android:44}),
                     backgroundColor:"#fff",
                     paddingTop:Platform.select({ios:20,android:0}),
                     justifyContent:"center",
                     alignItems:"center",
                     borderBottomWidth:1,
                     borderBottomColor:"#d2d2d2"
                 }}
             >
                 <View style={{
                     position:"absolute",
                     left:0,
                     top:0,
                     height : Platform.select({ios:64,android:44}),
                     paddingTop:Platform.select({ios:20,android:0}),
                     minWidth:54,
                 }}>
                     {!isNotGoBack && this.renderNavBack()}
                 </View>
                 <View style={{
                     width:"65%",
                     height:"100%",
                     justifyContent:"center",
                     alignItems:"center"
                 }}>
                     <Text
                         numberOfLines={1}
                         style={{
                             fontSize:18,
                             color:app_base_color,
                             fontWeight:"bold",
                         }}
                     >
                         {title|| "undefined"}
                     </Text>
                 </View>
             </View>
         )

     }

     /**
      * 渲染自定义头部
      * */
     renderCustomNavHeader = (left,title,right)=>{

         return (
             <View
                 style={{
                     height : Platform.select({ios:64,android:44}),
                     backgroundColor:"#fff",
                     paddingTop:Platform.select({ios:20,android:0}),
                     justifyContent:"center",
                     alignItems:"center"
                 }}
             >
                 <View style={{
                     position:"absolute",
                     left:0,
                     top:0,
                     height : Platform.select({ios:64,android:44}),
                     paddingTop:Platform.select({ios:20,android:0}),
                     minWidth:54,
                 }}>
                     {left}
                 </View>
                 <View style={{
                     width:"65%",
                     height:"100%",
                     justifyContent:"center",
                     alignItems:"center"
                 }}>
                     {title}
                 </View>
                 <View style={{
                     position:"absolute",
                     right:0,
                     top:0,
                     height : Platform.select({ios:64,android:44}),
                     paddingTop:Platform.select({ios:20,android:0}),
                     minWidth:54,
                 }}>
                     {right}
                 </View>
             </View>
         )

     }


}