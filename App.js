import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as FaceDetector from "expo-face-detector";
import { Camera } from "expo-camera";
import { MainStack } from "./src/stack-navigators/MainStack";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "./src/context-provider/AuthContext";
import { SplashScreen } from "./src/screens/SplashScreen";
import { LoginScreen } from "./src/screens/LoginScreen";
import { sleep } from "./src/utils/sleep";



export default function App() {

  const isLoggedIn = useState(false)
  const [isSplashLoading, setSplashLoading] = useState(true)
  

  useEffect(() => {
    

  }, [])
  
  const loadSplash = () => {
    return <SplashScreen />
  }

  const renderScreens = () => {
    
  

    sleep(2000).then(() => {
      setSplashLoading(false)
    })

    return isSplashLoading ? <SplashScreen/> : <MainStack/>

  }


  return (
    <NavigationContainer>
      <AuthContext.Provider>
        {renderScreens()}
      </AuthContext.Provider>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
