import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';
import { createStackNavigator } from 'react-navigation';



export default createStackNavigator({
  'Main': {
    screen: PeoplePage
  },
  'PeopleDetailPage': {
    screen: PeopleDetailPage,
    navigationOptions: (({ navigation }:any) => {
      const people = navigation.state.params.people;
      return (
        {
          title: people.name.first
        }
      )
    })
  }
}, {
  navigationOptions: {
    title: 'Pessoas!',
    headerTintColor:'white',
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: '#c5c5c5',
    },
   headerTitleStyle: {
    color: 'white',
    fontSize: 25,
   }
  }
});


// export default PeoplePage;