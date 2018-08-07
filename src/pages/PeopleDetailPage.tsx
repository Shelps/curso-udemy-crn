import * as React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

export interface PeopleDetailProps {
}

export default class PeopleDetail extends React.Component<NavigationScreenProps, any> {
  render() {

    const { people }:any = this.props.navigation.state.params;
    
    return (
      <View style={styles.container}>
         <Image 
            source={{uri: people.picture.large}}
            style={styles.avatar}>
         </Image>
         <View style={styles.detailContainer}>
          <View style={styles.line}>
            <Text style={[styles.cell, styles.cellLabel]} >Email:</Text>
            <Text style={[styles.cell, styles.cellContent]} >{people.email}</Text>
          </View>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    avatar: {
        aspectRatio: 1,
    },
    detailContainer: {
      backgroundColor: '#e2f9ff',
      marginTop: 20,
      elevation: 1
    }, 
    line: {
      flexDirection: 'row',
      paddingTop: 3,
      paddingBottom: 3,
      borderWidth: 1,
      borderColor: "#C5C5C5",
    }, 
    cell: {
      fontSize: 18,
      paddingLeft: 5,
    },
    cellLabel: {
      fontWeight: "bold" 
    },
    cellContent: {
      fontStyle: 'italic',
    }
})
