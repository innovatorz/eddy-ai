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
import { withAuthenticator, Authenticator } from 'aws-amplify-react-native'
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';

// Start Backend integration using amplify
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
import { FontDisplay } from "expo-font";
import { AddSubjectModal } from "./src/components/AddSubjectModal";
import { useModal } from "./src/hooks/useModals";

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});
// End




const App = () => {

  const [isLoggedIn, setLogin] = useState(false)
  const [isSplashLoading, setSplashLoading] = useState(true)
  const [isFontLoaded, setFontLoaded] = useState(false)

  const { modals} = useModal()

  async function enableFontExpo () {
      
      await Font.loadAsync({
       
        SemiBold: require("./src/assets/fonts/Poppins-Regular.ttf")
      })

      setFontLoaded(true)
    }

  
  useEffect(() => {

    sleep(2000).then(() => {
      setSplashLoading(false)
    })
  
  }, [])
  
  if (!isFontLoaded) {
    return
      <AppLoading
        startAsync={enableFontExpo}
        onFinish={() =>  setFontLoaded(true)}
        onError={console.warn}/>
    }

  return (
      <NavigationContainer theme={lightTheme}>
        <AuthContext.Provider>
        {isSplashLoading ?
          <SplashScreen/>  :
          <MainStack initialRouteName={"Add Subject"} />
        }
        <AddSubjectModal addSubjectModalRef={modals[0]}/>
        </AuthContext.Provider>
      </NavigationContainer>
  );

}

export default App



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
