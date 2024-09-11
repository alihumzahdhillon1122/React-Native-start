import { useState } from "react";
import { StyleSheet, View, FlatList, Button} from "react-native";

import GoalItem from "./componenets/GoalItem";

import GoalInput from "./componenets/GoalInput";

export default function App() {
  const[modalIsVisible, setModalIsVisible]= useState(false)
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler(){
    setModalIsVisible(true)
  }
  function endGoalHandler(){ 
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.trim().length === 0) {
      return; // Prevent adding empty goals
    }

    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { id: Math.random().toString(), value: enteredGoalText }
    ]);
    endGoalHandler()

    // setEnteredGoalText(''); // Clear the input field
    // Keyboard.dismiss(); // Dismiss the keyboard
  }

  function itemDeleteHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id );
    })
   
  }

  return (
    <View style={styles.appContainer}>
      <Button title="ADD NEW GOAL" color='#5e0acc' onPress={startAddGoalHandler}/>
     <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item) => item.id} // Unique key for each item
          renderItem={(itemData) => (
            <GoalItem value={itemData.item.value} 
            id={itemData.item.id}
            onDeleteItem={itemDeleteHandler}/>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  
  goalsContainer: {
    flex: 5,
  },
 
});
