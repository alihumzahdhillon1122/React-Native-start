import { useState } from 'react';
import { TextInput, Button, View, StyleSheet, Keyboard, Modal, Image} from 'react-native'

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
        <Image style={styles.image} source={require('../assets/images/goal.jpg')}/>
        <TextInput

          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD GOAL" onPress={addGoalHandler} color='#67E6DC'/>
          </View >
          <View style={styles.button}>
          <Button title='Cancel'  onPress={props.onCancel} color='#F5BCBA'/>
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
    padding:16,  
    backgroundColor:'#F3B63A'
  },
  image:{
    width:100,
    height:100,
    margin:10,
    borderRadius:5
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#EAF0F1',
    backgroundColor: 'red',
    color:'red',
    borderRadius:6,
    width: '85%',
    padding: 16,
    color:'#EAF0F1'
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