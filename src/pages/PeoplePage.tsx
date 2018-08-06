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
  View
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

// export interface Props {
//   navigation: any;
// };

interface State {
  peoples: any[],
}
export default class PeoplePage extends React.Component<NavigationScreenProps, State> {

  constructor(props: NavigationScreenProps){
    super(props);

    this.state = {
      peoples: []
    };

    this.navigationToPeopleDetail = this.navigationToPeopleDetail.bind(this);
  }

  componentDidMount(){
    axios.get("https://randomuser.me/api/?nat=BR&results=5")
      .then(res => {
        const {results} = res.data;
        this.setState({
          peoples: results
        });
      })
      .catch(err => {
      })
  }

  navigationToPeopleDetail(people:any){
    this.props.navigation.navigate('PeopleDetailPage', people)
  }

  render() {
    return (
      <View>
        <PeopleList 
          peoples={this.state.peoples}
          onPressItem={this.navigationToPeopleDetail}/>
      </View>
    );
  }
}
