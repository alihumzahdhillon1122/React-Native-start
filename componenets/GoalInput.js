import { useState } from 'react';
import {TextInput, Button, View, StyleSheet, Keyboard} from 'react-native'

function GoalInput (props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler(){
    props.onAddGoal(enteredGoalText);
    
    setEnteredGoalText('');
  }

    return (
        <View style={styles.inputContainer}>
        <TextInput 
    
          style={styles.textInput} 
          placeholder="Your course goal" 
          onChangeText={goalInputHandler} 
          value={enteredGoalText}
        />
        <Button title="ADD GOAL" onPress={addGoalHandler} />
      </View>
    )
};


export default GoalInput;


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderColor: 'red',
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#000',
        width: '70%',
        padding: 10,
        marginRight: 8,
        borderRadius: 4,
      },
})