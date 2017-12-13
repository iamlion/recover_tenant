import React from 'react';
import {


} from 'react-native';
import {
    ProjectCore,
    registerStackRouter,
    registerTabRouter
} from 'react-native-mzcore';

// 引入tab标签页
import TabList from './router/TabList';
// 引入路由
import RouteList from './router/RouteList';

require("./constant");

export default class extends React.Component {

    constructor(props){
        super(props);

        //注册tab标签页面
        registerTabRouter(TabList);
        //注册路由器
        registerStackRouter(RouteList);

    }


    render(){
        return (
            <ProjectCore
                disableYellowBox={true}
                tabBarConfig={{
                    labelStyle:{
                        fontSize:12
                    },
                    activeTintColor:app_base_color,
                    // inactiveTintColor:"#fff"
                }}
            />
        )
    }

}