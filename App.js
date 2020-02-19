import 'react-native-gesture-handler';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './src/navigation/MainNavigator';

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  // App Navigator no manage start of the app depending of auth
  return <AppNavigator />;
};

export default App;
