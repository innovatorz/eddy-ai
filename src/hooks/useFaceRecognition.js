import * as FaceDetector from "expo-face-detector";
import { Camera } from "expo-camera";
import { useState } from "react";





export const useFaceRecognition = () => {

    const [status, setStatus] = useState()
    const [hasPermission, setHasPermission] = useState(null)
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [face, setFaces] = useState([]);

    const askCameraPermission = async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === "granted");
    }

    const faceDetected =async  ({faces}) => {
       
        setFaces({ faces });
        const options = { mode: FaceDetector.Constants.Mode.fast };

        if (faces.length > 0) {
            console.log(faces ? (faces[0].smilingProbability) : []);
        }
        
        // console.log(faces)
       
    }


    return {faceDetected, askCameraPermission, status}

}