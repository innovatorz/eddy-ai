import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as canvas from 'canvas';
import * as faceapi from 'face-api.js';
import config from "./config"
import axios from 'axios';


export default function App() {

  const videoHeight = 480
  const videoWidth = 640
  const [initializing, setInitializing] = useState(false)
  const videoRef = useRef()
  const canvasRef = useRef()
  const { Canvas, Image, ImageData } = canvas
  faceapi.env.monkeyPatch({ Canvas, Image, ImageData })
  
  
  const { PUBLIC_URL } = process.env

  

  useEffect(() => {

      const loadModels = async () => {
    
        setInitializing(true);
        
        const net = new faceapi.SsdMobilenetv1()
        // await net.loadFromUri('./public/models')

        const MODEL_URL = './assets/models'
      
        Promise.all([faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL)])
      // Promise.all([
      //   faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
      //   faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
      //   faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
      //   faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL)
      // ]).then(startVideo)
    }
    
    loadModels()

  }, [])
  

  const startVideo = () => {
    navigator.getUserMedia({
      video: {}
    },
      (stream) => videoRef.current.srcObject = stream,
      (err) => console.log(err))
    
    
  }

  const handleVideoOnPlay = () => {
    setInterval(async() => {
      
      if (initializing) {
        setInitializing(false)
      }

      const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions).withFaceLandmarks().withFaceExpressions()

      console.log(detections)
    },100)
  }


  // startVideo()


  // startVideo()
  return (
    <div className="App">
      <span>{initializing ? 'Initializing' : 'Ready'}</span>
      <div>
        <video ref={videoRef} autoPlay muted height={videoHeight} width={videoWidth} onPlay={ handleVideoOnPlay}/>
        <canvas ref={canvasRef} />
        <h1>URI{config.PUBLIC_URL+'/models'}</h1>
      </div>
     
   </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
