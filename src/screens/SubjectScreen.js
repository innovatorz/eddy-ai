import { Button, Text } from "native-base";
import React, { useEffect } from "react";

export const SubjectScreen = ({ navigation}) => {
    return (
        <>
            <Button onPress={() => {
                navigation.navigate('Classroom')
            }}>
            <Text>Enter Classroom</Text>
            </Button>
            
             <Button onPress={() => {
                navigation.navigate('Teacher Dashboard')
            }}>
            <Text>Access Dashboard - Teacher</Text>
        </Button>
        </>
    )
}