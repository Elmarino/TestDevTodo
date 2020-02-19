import {createStackNavigator} from 'react-navigation-stack';

import MainScreen from '../screens/MainScreen';

// Stack Navigator of the screens available

let HomeStack = createStackNavigator(
  {
    Home: MainScreen,
  },
  {
    headerMode: 'none',
  },
);

HomeStack.navigationOptions = {
  headerVisible: false,
};

export default HomeStack;
