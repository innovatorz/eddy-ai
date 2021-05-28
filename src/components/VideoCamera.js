import { Camera } from "expo-camera";
import { Text, View } from "native-base";
import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import * as FaceDetector from "expo-face-detector";
import { useFaceRecognition } from "../hooks/useFaceRecognition";


export const VideoCamera = ({ width, height, borderRadius, marginLeft}) => {

    const { faceDetected,  status } = useFaceRecognition()
    

   
    return (
        <>
        <View style={{width:width,height:height,overflow:'hidden',marginLeft:marginLeft,borderRadius:borderRadius}}>
      
          <Camera
        style={styles.camera, {width:width,height:height}}
        onFacesDetected={faceDetected}
        faceDetectorSettings={{
          mode: FaceDetector.Constants.Mode.fast,
          detectLandmarks: FaceDetector.Constants.Landmarks.all,
          runClassifications: FaceDetector.Constants.Classifications.all,
          minDetectionInterval: 1000,
          tracking: true,
        }}
        type={'front'}
      >
        {/* <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={styles.text}> Flip </Text>
            <Text style={styles.text}> {status} </Text>
          </TouchableOpacity>
        </View> */}
                </Camera>
  </View>
    </>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    overflow:'hidden'
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
