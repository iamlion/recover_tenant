import React from 'react';
import {
    View,
} from 'react-native';



import LoginView from '../recover_tenant_login';
import Recoverdetail from '../recover_tenant_detail';
import Orders from '../recover_tenant_myorder';
import OrderDetail from '../recover_client_orderdetail';
import Register from '../recover_tenant_register';
import Forget from '../recover_tenant_forget';

export default  [
    {
        screen: LoginView,
        routeNameKey : "login"
    },
    {
        screen: Recoverdetail,
        routeNameKey : "recoverdetail"
    },
    {
        screen: Orders,
        routeNameKey : "orders"
    },
    {
        screen: OrderDetail,
        routeNameKey : "myOrderDetail"
    },
    {
        screen: Forget,
        routeNameKey : "forget"
    },
    {
        screen: Register,
        routeNameKey : "register"
    },
];