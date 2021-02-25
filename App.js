import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import SearchScreen from './scr/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator({
  //an object that lists out all the different routes our app has
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
    }
  }
);

export default createAppContainer(navigator);
