import { Button, Text, View } from "native-base";
import React from "react";

export const LandingScreen = () => {
    return (
        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
            <Text style={{ fontSize: 24, fontWeight:'700',textAlign:'center'}}>Your Class is one click away</Text>
            <Button style={{ alignSelf: 'center', marginTop: 80 }}><Text>Sign in as a Teacher</Text></Button>
             <Button style={{alignSelf:'center', marginTop:20}}><Text>Student Access Code</Text></Button>
        </View>)
}