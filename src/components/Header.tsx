import * as React from 'react';
import {
    Text,
    View,
    StyleSheet
  } from 'react-native';

export interface Props {
    title: string
}

const Header = (props: Props) => (
    <View style={style.container}>
        <Text style={style.title}>{props.title}</Text>
    </View>
);

const style = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        alignItems:'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 50,
        color: '#fff'
    }
});

export default Header;




