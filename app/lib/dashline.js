import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class DashLine extends React.Component {

    constructor(props){
        super(props);
    }


    render() {
        var len = Math.ceil(this.props.width / 4);
        var arr = [];
        for (let i = 0; i < len; i++) {
            arr.push(i);
        }

        return <View style={styles.dashLine}>
            {
                arr.map((item, index) => {
                    return <Text style={styles.dashItem} key={'dash' + index}> </Text>
                })
            }
        </View>
    }
}

const styles = StyleSheet.create({
    dashLine: {
        flexDirection: 'row',
    },
    dashItem: {
        height: 1,
        width: 2,
        marginRight: 2,
        flex: 1,
        backgroundColor: '#ddd',
    }
})