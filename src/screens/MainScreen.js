import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';

import colors, {
  screen,
  defaultScreenStyles,
  shadowStyles,
} from './../global/constants';

import ModalTasks from './../components/Tasks/ModalTasks';
import Task from './../components/Tasks/Task';

//Android does not manage Alert.prompt()
import prompt from 'react-native-prompt-android';

export default class MainScreen extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      tasksList: [],
    };

    this.openModal = this.openModal.bind(this);
    this.close = this.close.bind(this);
    this.addTasks = this.addTasks.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.modifyTaskName = this.modifyTaskName.bind(this);
  }

  openModal() {
    this.setState({
      modalVisible: true,
    });
  }

  close() {
    this.setState({
      modalVisible: false,
    });
  }

  addTasks(task) {
    this.setState(previousState => ({
      tasksList: [...previousState.tasksList, task],
    }));
  }

  deleteTask(index) {
    let list = [...this.state.tasksList];
    list.splice(index, 1);
    this.setState({
      tasksList: list,
    });
  }

  modifyTaskName(index) {
    prompt(
      'Intitulé de la tâche',
      'Modifiez la tâche',
      [
        {
          text: 'Annuler',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: value => this.modifyCard(value, index),
        },
      ],
      {
        cancelable: false,
      },
    );
  }

  modifyCard(value, index) {
    let list = [...this.state.tasksList];

    Object.keys(list).forEach(i => {
      if (parseInt(i) === index) {
        list[index] = value;
        return true;
      }
    });

    this.setState({
      tasksList: list,
    });
  }

  render() {
    let {modalVisible} = this.state;

    let listOfTask = this.state.tasksList.map((task, index) => {
      return (
        <Task
          key={index}
          positionValue={index}
          taskName={task}
          deleteFonction={this.deleteTask}
          modifyFunction={this.modifyTaskName}
        />
      );
    });

    return (
      <View style={styles.container}>
        {/* Displaying a modal to create a new task*/}
        <ModalTasks
          visible={modalVisible}
          closeModal={this.close}
          saveTask={this.addTasks}
        />
        <SafeAreaView style={styles.statusBar} />
        <SafeAreaView style={styles.wrapperContent}>
          <StatusBar hidden={true} />
          <Text style={styles.title}>Tâches</Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.tasksContainer}>
            {listOfTask}
          </ScrollView>
          <TouchableOpacity onPress={this.openModal} style={styles.addButton}>
            <Image
              source={require('./../assets/img/icons/plus.png')}
              resizeMode={'contain'}
              style={styles.plusIcon}
            />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...defaultScreenStyles,
  wrapperContent: {
    width: screen.w,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  addButton: {
    ...shadowStyles,
    padding: 10,
    borderRadius: screen.w / 20 + 10,
    backgroundColor: colors.appBg,
    width: screen.w / 7,
    height: screen.w / 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    width: screen.w / 15,
    height: screen.w / 15,
  },
  tasksContainer: {
    marginBottom: 30,
    height: (screen.h * 2) / 3,
    width: screen.w - 50,
  },
  taskWrapper: {
    ...shadowStyles,
    width: screen.w - 50,
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.middlePurple,
    borderRadius: 16,
    marginBottom: 10,
  },
  taskName: {
    fontSize: 24,
    padding: 10,
    color: colors.appBg,
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
