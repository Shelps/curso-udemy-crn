import * as React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import Line from '../components/Line';

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
           <Line label={'Email'} content={people.email} />
           <Line label={'Cidade'} content={people.location.city} />
           <Line label={'Nacionalidade'} content={people.location.city} />
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
      elevation: 2
    }
})
