/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react';
import axios from "axios";
// import { Hello } from './src/components/Hello';
import Header from '../components/Header';
import PeopleList from '../components/PeopleList';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

// export interface Props {
//   navigation: any;
// };

interface State {
  peoples: any[],
  loading: boolean,
  error: boolean
}
export default class PeoplePage extends React.Component<NavigationScreenProps, State> {

  constructor(props: NavigationScreenProps){
    super(props);

    this.state = {
      peoples: [],
      loading: false,
      error: false
    };

    this.navigationToPeopleDetail = this.navigationToPeopleDetail.bind(this);
  }

  componentDidMount(){
    this.setState({
      loading: true
    });
      axios.get("https://randomuser.me/api/?nat=BR&results=25")
      .then(res => {
        const {results} = res.data;
        this.setState({
          peoples: results,
          loading: false,
        });
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: true
        });
      });
    
  }

  navigationToPeopleDetail(people:any){
    this.props.navigation.navigate('PeopleDetailPage', people)
  }

  render() {
    return (
      <View style={styles.container}>
        {/* {this.renderLoading()} */}

        {this.state.loading?
          <ActivityIndicator size="large" color="#000" />:
          this.state.error ?
          <Text style={styles.error}>Ops, algo deu errado =(</Text> :
          <PeopleList
            peoples={this.state.peoples}
            onPressItem={this.navigationToPeopleDetail}/>
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    color: "red",
    alignSelf: 'center',
  }
})
