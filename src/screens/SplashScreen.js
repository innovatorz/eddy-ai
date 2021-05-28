import { Button, Text, View } from "native-base";
import React, { useEffect } from "react";
import { Image } from "react-native";

export const SplashScreen = ({ navigation }) => {
    
    return (
        <>
            <View style={{alignItems:'center',flex:1,justifyContent:'center'}}>
                <Image source={require('../assets/eddy-logo.png')} />
                </View>
        </>
    )
}