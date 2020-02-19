import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
  Alert,
  Animated,
  Easing,
  Switch,
  Linking,
} from 'react-native';

import colors, {
  screen,
  defaultScreenStyles,
  shadowStyles,
} from './../../global/constants';

const Task = props => {
  let deleteTask = () => {
    props.deleteFonction(props.positionValue);
  };
  let modifyTask = () => {
    props.modifyFunction(props.positionValue);
  };
  return (
    <View style={styles.taskWrapper}>
      <Text multiline={true} style={styles.taskName}>
        {props.taskName}
      </Text>
      <View style={styles.actionsButtons}>
        <ModifyButton modify={modifyTask} />
        <DeleteButton delete={deleteTask} />
      </View>
    </View>
  );
};

const DeleteButton = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.delete();
      }}>
      <Image
        source={require('./../../assets/img/icons/delete.png')}
        resizeMode={'contain'}
        style={styles.delete}
      />
    </TouchableOpacity>
  );
};

const ModifyButton = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.modify();
      }}>
      <Image
        source={require('./../../assets/img/icons/pen.png')}
        resizeMode={'contain'}
        style={styles.delete}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  taskWrapper: {
    ...shadowStyles,
    width: screen.w - 50,
    minHeight: 50,
    paddingVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.middlePurple,
    borderRadius: 16,
    marginBottom: 10,
  },
  taskName: {
    fontSize: 24,
    marginLeft: 10,
    color: colors.appBg,
    width: screen.w / 1.8,
  },
  delete: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  actionsButtons: {
    flexDirection: 'row',
  },
});

export default Task;
