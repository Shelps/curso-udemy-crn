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
    }
})
