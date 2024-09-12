import { View, Text, StyleSheet, Pressable, ProgressBarAndroidBase } from 'react-native'


function GoalItem(props) {
  function handlepress() {
    props.onDeleteItem(props.id)
  }
  return (
    <View style={styles.goalItem}>
      <Pressable android_ripple={{ color: '#000000' }} onPress={handlepress}   style={({pressed}) =>[ pressed && styles.pressedItem ] } >
        
        <Text style={styles.goalText}>{props.value}</Text>
      </Pressable>
    </View>
  )
};


export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 6,
    padding:8,
    borderRadius: 6,
    backgroundColor: '#01CBC6',
  },
  pressedItem:{
    opacity:0.5
  },
  goalText: {
    color: 'white',
    padding: 8,

  }
})


// 1 - i have built the 1st basic app. where i can add my goals
// 2 - usually how we design userInterFace (UI)
// 3 - react-native talk to both platforms
// 4 - i used useState to update the UI
// 5 - FlatList and its props
// 6 - making regular react-native apps just need more practice with using components and making custom components 
// 7 - Practice will be helpful to understanding react-native
//                                                 khatam-SHud     