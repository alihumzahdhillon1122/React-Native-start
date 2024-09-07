import { View, Text, SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import FLatCards from './components-for-AppPro2/FLatCards'
import ElevatedCards from './components-for-AppPro2/ElevatedCards'
import Fancycard from './components-for-AppPro2/Fancycard'

const AppPro2 = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={{fontSize:30}}> Hello </Text>
          <FLatCards />
          <ElevatedCards />
          <Fancycard />
          <Fancycard />

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AppPro2