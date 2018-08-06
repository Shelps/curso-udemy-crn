import * as React from 'react';
import { Text, View , StyleSheet} from 'react-native';
import PeopleListItem from "./PeopleListItem";

export interface Props {
    peoples: any[],
    onPressItem: Function
};

const PeopleList = (props:Props) => {

    const textElements = props.peoples.map((people,index) => {
        return (
            <PeopleListItem 
                key={index} 
                people={people} 
                navigateToPeopleDetail={props.onPressItem}/>
        )
      });

    return (
        <View style={styles.container}>
            {textElements}
        </View> 
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e2f9ff"
    },

})

export default PeopleList;