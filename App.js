// import {StyleSheet, Text, View, Button } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View>

//         <Text style={styles.headerText}>Another piece of text</Text>
//       </View>
//       <Text style={styles.headerText}>Hello world</Text>
//       <Button title='Tap Me!' style={styles.button}/>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',

//   },
//   headerText:{
//       margin: 20,
//     borderWidth:2,
//     paddingTop:4,
//     paddingLeft:4,
//     borderColor:'#D63031'
//   },
//   button:{}
// });









import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
export default function app() {
  const [enteredGoalText, setEnterGoalText] = useState('')
  const [courseGoals, setCourseGoal] = useState([])
  function goalInputHandler(enteredText){
    setEnterGoalText(enteredText)
  }

  function addgoalhandler(){
    setCourseGoal((currentCourseGoals) => [...courseGoals,enteredGoalText])
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="your course goal" onChangeText={goalInputHandler}/>
        <Button  title="ADD GOAL" onPress={addgoalhandler}/>
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => <Text key={goal}>{goal}</Text>)}
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  appContainer:{
    flex:1,

    paddingTop:50,
    paddingHorizontal:16,
  },
  inputContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:24,
    borderBottomWidth:1,
    borderColor:'red'


  },
  textInput:{
    borderWidth:1,
    borderColor:'#000',
    width:'70%',
    padding:10,
    marginRight:8,
    borderRadius:4,

  },
  goalsContainer:{
    flex:3
  }
  

  
  
});


