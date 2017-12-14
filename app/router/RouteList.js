import React from 'react';
import {
    View,
} from 'react-native';



import LoginView from '../recover_tenant_login';
import Recoverdetail from '../recover_tenant_detail';

export default  [
    {
        screen: LoginView,
        routeNameKey : "login"
    },
    {
        screen: Recoverdetail,
        routeNameKey : "recoverdetail"
    },
];