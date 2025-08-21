import { useVideoPlayer, VideoView } from "expo-video";
import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "./EditButton";

export default function FloatingImage() {
  const videos = useMemo(
    () => [
      require("../../assets/video1.mp4"),
      require("../../assets/video2.mp4"),
    ],
    []
  );

  const [videoIndex, setVideoIndex] = useState(0);

  const changePerson = () => {
    setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  }

  // 🟢 Player nur EINMAL erstellen
  const player = useVideoPlayer(videos[0], (p) => {
    p.loop = true;
    p.play();
  });

  // 🟢 Quelle wechseln, wenn Index sich ändert
  useEffect(() => {
    player.replace(videos[videoIndex]);
    player.play();
  }, [videoIndex]);

  return (
      <View style={styles.contentContainer}>
        <VideoView
          style={styles.video}
          player={player}
          allowsFullscreen
          pointerEvents="none"
        />
        <AppButton title="Next Person" onPress={changePerson} />
      </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  video: {
    flex: 1,
    width: "40%",
    height: "50%",
    aspectRatio: 21 / 9,
  },
});
