import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const screen = {
  w: width,
  h: height,
};

const colors = {
  appBg: '#fcfcfc',
  headerHomeColor: 'rgb(255,248,236)',
  fushia: 'rgb(202, 97, 195)',
  shadow: 'rgb(73, 77, 111)',
  middlePurple: 'rgb(238, 133, 181)',
  cancel: 'rgb(70, 66, 81)',
};

export const defaultScreenStyles = {
  container: {
    flex: 1,
    backgroundColor: colors.appBg,
  },
  statusBar: {
    flex: 0,
    backgroundColor: colors.appBg,
    width: '100%',
  },
  wrapper: {
    width: screen.w,
    height: screen.h,
    alignItems: 'center',
  },
};

export const shadowStyles = {
  shadowColor: colors.shadow,
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.25,
  shadowRadius: 5,
  elevation: 5,
};

export default colors;
