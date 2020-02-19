import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import MainNavigator from './MainNavigator';

export default createAppContainer(
  createSwitchNavigator({
    // Calling the Main navigator
    Main: MainNavigator,
  }),
);
