import React from "react";

import {View,Text,StyleSheet,useColorScheme} from "react-native";

function AppPro (): JSX.Element{
    const IsDarkMode = useColorScheme() === 'light'
    return(
        <View style = {Styles.container}>
            <Text style = {IsDarkMode ? Styles.darkText : Styles.whiteText}>Hello World !</Text>
            
        </View>
    );
}
const Styles = StyleSheet.create ({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteText: {
        color : '#FFFFFF'
    },
    darkText: {
        color : '#000000'
    }
})

export default AppPro;