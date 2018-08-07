import * as React from 'react';
import { Text, FlatList , StyleSheet} from 'react-native';
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
      <FlatList
        style={styles.container}
        data={props.peoples}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <PeopleListItem
              people={item}
              navigateToPeopleDetail={props.onPressItem}/>
        )}/>
        // <ScrollView style={styles.container}>
        //     {textElements}
        // </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e2f9ff"
    },

})

export default PeopleList;
