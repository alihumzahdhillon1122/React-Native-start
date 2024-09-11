import { useState } from "react";
import { StyleSheet, View, FlatList} from "react-native";

import GoalItem from "./componenets/GoalItem";

import GoalInput from "./componenets/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.trim().length === 0) {
      return; // Prevent adding empty goals
    }

    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { id: Math.random().toString(), value: enteredGoalText }
    ]);

    // setEnteredGoalText(''); // Clear the input field
    // Keyboard.dismiss(); // Dismiss the keyboard
  }

  return (
    <View style={styles.appContainer}>
     <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item) => item.id} // Unique key for each item
          renderItem={(itemData) => (
            <GoalItem value={itemData.item.value}/>
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
    flex: 2,
  },
 
});
