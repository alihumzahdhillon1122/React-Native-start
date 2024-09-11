import { useState } from 'react';
import { TextInput, Button, View, StyleSheet, Keyboard, Modal } from 'react-native'

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);

    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType='slide'  >

      <View style={styles.inputContainer}>
        <TextInput

          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD GOAL" onPress={addGoalHandler} />
          </View >
          <View style={styles.button}>
          <Button title='Cancel'  onPress={props.onCancel}/>
          </View>
        </View>
      </View>
    </Modal>
  )
};


export default GoalInput;


const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    padding:16,
    borderBottomWidth: 1,
    borderColor: 'red',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#000',
    width: '70%',
    padding: 8,
  },
  buttonContainer: {
    marginTop:16,
    flexDirection: 'row'
  },
  button:{
    width:100 ,
    marginHorizontal:8
  }
})