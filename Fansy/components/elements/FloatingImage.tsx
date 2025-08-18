import { useVideoPlayer, VideoView } from 'expo-video';
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const [videoIndex, setVideoIndex] = useState(0);
  const videos = [
    require("./assets/video1.mp4"),
    require("./assets/video2.mp4"),
    require("./assets/video3.mp4"),
  ];

  // Create player with initial video
  const player = useVideoPlayer(videos[0], (player) => {
    player.loop = true;
    player.play();
  });

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      if (event.translationY < -100) {
        setVideoIndex((prev) => (prev + 1) % videos.length);
      }
    });

  // Update player source when videoIndex changes
  useEffect(() => {
      console.log('Video index changed to:', videoIndex);
  console.log('Loading video:', videos[videoIndex]);
    player.replace(videos[videoIndex]);
    player.play();
  }, [videoIndex, player]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureDetector gesture={panGesture}>
        <VideoView
          player={player}
          style={styles.video}
          allowsFullscreen={false}
          allowsPictureInPicture={false}
          contentFit="cover"
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
  video: {
    width: "100%",
    height: "100%",
  },
  text: { 
    color: "white", 
    fontSize: 24 
  },
});
