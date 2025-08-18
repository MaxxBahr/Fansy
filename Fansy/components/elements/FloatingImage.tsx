import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import Video from "react-native-video";

export default function App() {
  const [videoIndex, setVideoIndex] = useState(0);
  const videos = [
    require("./assets/video1.mp4"),
    require("./assets/video2.mp4"),
    require("./assets/video3.mp4"),
  ];

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      if (event.translationY < -100) {
        setVideoIndex((prev) => prev + 1);
      }
    });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureDetector gesture={panGesture}>
        <Video
          source={videos[videoIndex]}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
          shouldPlay
          isLooping
        />
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: "white", fontSize: 24 },
});
