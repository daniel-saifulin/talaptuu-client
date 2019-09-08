import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

class MainForm extends React.Component {
  state = { spent: '' }

  saveAction = () => console.log(this.state.spent)
  onInputChange = text => this.setState({ spent: text })

  render() {
    return (
      <View style={styles.mainForm}>
        <Text style={styles.header}>Заполните поля</Text>
        <TextInput
          value={this.state.spent}
          onChangeText={(text) => this.onInputChange(text)}
          keyboardType={'numeric'}
          style={styles.textInput}
          placeholder="сумма"
          underlineColorAndroid={'transparent'}
        />

        <TouchableOpacity
          onPress={this.saveAction}
          style={styles.button}>
          <Text style={styles.btnText}>Сохранить</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainForm: {
    alignSelf: 'stretch'
  },

  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1
  },

  textInput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1
  },

  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 3
  },

  btnText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});


export default MainForm