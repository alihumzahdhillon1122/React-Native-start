import { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function CounterApp() {
  // State to hold the current count
  const [count, setCount] = useState(0);

  // Function to handle incrementing the count
  function incrementHandler() {
    setCount(count + 1); // Increment the count by 1
  }

  // Function to handle decrementing the count
  function decrementHandler() {
    setCount(count - 1); // Decrement the count by 1
  }

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>Count: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={incrementHandler} />
        <Button title="Decrement" onPress={decrementHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
});