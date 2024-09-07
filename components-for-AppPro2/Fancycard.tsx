import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Fancycard = () => {
  return (
    <View>
    <View><Text style={styles.headingText}>Fancycard</Text></View>
    <View style={[styles.card, styles.cardElevated]}> 
        <Image source={{
            uri: 'https://th-thumbnailer.cdn-si-edu.com/KPHiwfaC7pBGVYeQOt3_RF6L4Dw=/800x450/filters:focal(1471x1061:1472x1062)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg'
        }} 
        style={styles.cardImage} />
    </View>
    <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Taj Mahal</Text>
        <Text style={styles.cardLabel}>Busy City</Text>
        <Text style={styles.cardDescription}>this is a very busy city in mughal era this city had its unique role in empired india</Text>
        <Text style={styles.cardFooter}>10 mints away</Text>


    </View>
    </View>
    
  )
}
const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight:'bold',
        paddingHorizontal: 8,
    },
    card:{
        width:350,
        height:200,
        borderRadius:10,
        marginVertical:12,
        marginHorizontal:16,


    },
    cardElevated:{
        backgroundColor:'#fff',
        elevation:5,
        shadowOffset:{
            width:1,
            height:1,
        }

    },
    cardImage:{
        height: 180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,


    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
    },
    cardTitle:{
        color:'#00000',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:6,


    },
    cardLabel:{
        color:'#00000',
        fontSize:16,
        marginBottom:4,


    },
    cardDescription:{
        color:'#74B9FF',
        fontSize:12,
        marginBottom:12,
        marginTop:6,
        flexShrink:1,
    },
    cardFooter:{
        color:'#00000',
        fontWeight:'bold',
        backgroundColor:'#0A3D62',
        width:100,
        borderWidth:1,
        borderRadius:6,
        textAlign:'center',

    },

    

})

export default Fancycard