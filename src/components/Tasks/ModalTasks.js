import React, {Component} from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  Alert,
  StyleSheet,
  TextInput,
} from 'react-native';

import colors, {
  screen,
  defaultScreenStyles,
  shadowStyles,
} from './../../global/constants';

export default class ModalTasks extends Component {
  constructor() {
    super();
    this.state = {
      taskName: '',
    };
    this.setModalInvisible = this.setModalInvisible.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  setModalInvisible() {
    if (this.state.taskName === '') {
      Alert.alert('Tâches', "Vous n'avez pas informez de tâches.");
      return false;
    }
    this.props.saveTask(this.state.taskName);
    this.setState(
      {
        taskName: '',
      },
      () => {
        this.props.closeModal();
      },
    );
  }

  closeModal() {
    this.props.closeModal();
  }

  handleText(text) {
    this.setState({taskName: text});
  }

  render() {
    let {taskName} = this.state;
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={[styles.wrapper, {backgroundColor: colors.fushia}]}>
          <Text style={styles.title}>Donnez un titre à la tâche</Text>
          <TextInput
            onChangeText={value => this.handleText(value)}
            placeholder={'Faire les courses'}
            value={taskName}
            style={styles.taskInput}
            keyboardType={'ascii-capable'}
            autoCapitalize="none"
            returnKeyType={'done'}
            placeholderTextColor={colors.middlePurple}
          />

          <View style={styles.buttons}>
            <TouchableOpacity
              style={[styles.validate, {backgroundColor: colors.cancel}]}
              onPress={this.closeModal}>
              <Text style={[styles.textButton, {color: colors.fushia}]}>
                Annuler
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.validate}
              onPress={this.setModalInvisible}>
              <Text style={styles.textButton}>Valider</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  ...defaultScreenStyles,
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 60,
    paddingHorizontal: 25,
    color: colors.appBg,
  },
  taskInput: {
    borderBottomWidth: 1,
    width: screen.w - 50,
    height: 50,
    fontSize: 24,
    color: colors.appBg,
  },
  buttons: {
    width: screen.w - 50,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  validate: {
    ...shadowStyles,
    borderRadius: 20,
    backgroundColor: colors.appBg,
    width: screen.w / 3,
    height: 59,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 16,
  },
});
