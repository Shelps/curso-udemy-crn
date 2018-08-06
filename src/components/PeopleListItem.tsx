import * as React from 'react';
import { View, Text, StyleSheet , Image, TouchableOpacity} from 'react-native';

interface PeoapleListItem {
    people: any,
    navigateToPeopleDetail: Function
};

const PeoapleListItem: React.SFC<PeoapleListItem> = (props) => {
    return (
        <TouchableOpacity onPress={() => {props.navigateToPeopleDetail({people: props.people});}}>
            <View style={styles.line}>
                <Image style={styles.avatar} source={{uri: props.people.picture.thumbnail}}/>
                <Text style={styles.lineText} >{`${props.people.name.first} ${props.people.name.last}`}</Text>
            </View>
        </TouchableOpacity>
        
    )
};

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
        flexDirection: 'row',
        alignItems: 'center',
    },

    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7,
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 50,
    }
})

export default PeoapleListItem;