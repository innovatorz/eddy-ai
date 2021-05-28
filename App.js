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
import { useFaceRecognition } from "./src/hooks/useFaceRecognition";
import { lightTheme } from "./src/theme/light";
import { LandingScreen } from "./src/screens/LandingScreen";
import { SubjectScreen } from "./src/screens/SubjectScreen";
import { useMemo } from "react";


// Start Backend integration using amplify
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
import { getFonts } from "./src/typography";
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});
// End

export default function App() {

  const [isLoggedIn, setLogin] = useState(false)
  const [isSplashLoading, setSplashLoading] = useState(true)

  useEffect(() => {
    sleep(2000).then(() => {
      setSplashLoading(false)
    })


    //load google fonts
    getFonts().then(() => {
      console.log('fonts loaded')
    })
  },[])

  return (
      <NavigationContainer theme={lightTheme}>
        <AuthContext.Provider>
        {isSplashLoading ?
          <SplashScreen/>  :
          <MainStack initialRouteName={isLoggedIn ? "Subject" : "Landing"} />
        }
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
