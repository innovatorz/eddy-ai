import { Camera } from "expo-camera";
import { Text, View } from "native-base";
import React, { useEffect } from "react";

import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useFaceRecognition } from "../hooks/useFaceRecognition";
import { VideoCamera } from "../components/VideoCamera";

export const ClassroomScreen = () => {

  const { askCameraPermission } = useFaceRecognition()
  const classroomData = [{ name: "Joe", type: "teacher" }, { name: "Joe", type: "student" },{ name: "Joe", type: "student" },{ name: "Joe", type: "student" },{ name: "Joe", type: "student" }]

  useEffect(() => {
    askCameraPermission()
  }, [])
  
  const renderHeader = () => {
    return (
      <Text>Main Teacher</Text>
    )
  }

  const renderItem = () => {
    return (
      <VideoCamera width={88} height={88} borderRadius={44} marginLeft={4}/>
    )
  }

  const numColumns=4
  
    return (
      <View style={styles.container}>
        {/* <VideoCamera width={120} height={ 120} /> */}
        <FlatList
          data={classroomData}
          contentContainerStyle={{alignItems:'center',flex:1}}
          keyExtractor={(item, index) => item + index}
          ListHeaderComponent={renderHeader}
          renderItem={renderItem}
          numColumns={numColumns}
        />

    </View>)
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
