import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

export default function FLatCards() {
  return (
      <View>
        <Text style = {styles.headingText}> FlatCards </Text>
        <View style= {styles.container}>
          <View style={[styles.cards, styles.cardOne]}>
            <Text> Red </Text>
          </View>
          <View style={[styles.cards, styles.cardTwo]}>
            <Text> Green </Text>
          </View>
          <View style={[styles.cards, styles.cardThree]}>
            <Text> Blue </Text>
          </View>
          <View style={[styles.cards, styles.cardFour]}>
            <Text style={styles.colorTextCard}> Black </Text>
          </View>
        </View>
      </View>
      

    
    
    
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    // margin: 10

  },
  container:{
    flex:1,
    flexDirection: 'row', 
    padding: 8,  
  },
  cards:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 10,
    margin:6,

  },
  cardOne:{
    backgroundColor: 'red',
    
  },
  cardTwo:{
    backgroundColor: 'green'
  },
  cardThree:{
    backgroundColor: 'blue'
  },
  cardFour:{
    backgroundColor: 'black',
    color: 'white',
  },
  colorTextCard:{
    color: 'white'
  }
})