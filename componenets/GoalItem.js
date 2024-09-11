import {View,Text,StyleSheet} from 'react-native'


function GoalItem (props){
    return (
        <View style={styles.goalItem}>
              <Text style={styles.goalText}>{props.value}</Text>
            </View>
    )
};


export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 6,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
      },
      goalText: {
        color: 'white',
      }
})