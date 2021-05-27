import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as FaceDetector from 'expo-face-detector';
// import * as canvas from 'canvas';
// import * as faceapi from 'face-api.js';
// import config from "./config"
// import axios from 'axios';
import { Camera} from 'expo-camera'


export default function App() {

  const [hasPermission, setHasPermission] = useState(null)
  const [type,setType] = useState(Camera.Constants.Type.back)
  const [face,setFaces] = useState([]) 

  const videoRef = useRef()
  const canvasRef = useRef()

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();

    // const loadModels = async () => {
    //   const MODEL_URL = "./src/models"

    //   await Promise.all([
    //     faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL)
    //   ])
    // }
 
    // loadModels()

  },[])
  
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const faceDetected = async ({ faces }) => {
    setFaces({ faces })
    const options = { mode: FaceDetector.Constants.Mode.fast };
    console.log(faces ? faces[0].smilingProbability :[] )
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        // faceDetectorSettings={{
        //   mode: FaceDetector.Constants.Mode.fast,
        //   detectLandMarks: FaceDetector.Constants.Landmarks.none,
        //   minDetectionInterval: 100,
        //   tracking: true,
        // }}
        
        onFacesDetected={faceDetected}
        faceDetectorSettings={{
          mode: FaceDetector.Constants.Mode.fast,
          detectLandmarks: FaceDetector.Constants.Landmarks.all,
          runClassifications: FaceDetector.Constants.Classifications.all,
          minDetectionInterval: 5000,
          tracking: true
        }}
        type={'front'}
      >
        <View style={styles.buttonContainer}>
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
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
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
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});