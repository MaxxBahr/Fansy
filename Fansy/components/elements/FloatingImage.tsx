import { useVideoPlayer, VideoView } from "expo-video";
import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../styles/ButtonStyle";
import AppButton from "./EditButton";

export default function FloatingImage() {
  const videos = useMemo(
    () => [
      require("../../assets/video1.mp4"),
      require("../../assets/video2.mp4"),
    ],
    []
  );

  const userNames = ["Zelix45", "JaneDoe99"];

  const [videoIndex, setVideoIndex] = useState(0);
  const theme = useTheme();

  const changePerson = () => {
    setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  }

  const handleDislike = () => {
    console.log(`Disliked ${userNames[videoIndex]}`);
    changePerson();
  }

  const handleLike = () => {
    console.log(`Liked ${userNames[videoIndex]}`);
    changePerson();
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
      <View style={[styles.contentContainer, { backgroundColor: theme.background }]}>
        <View style={styles.videoContainer}>
          <VideoView
            style={styles.video}
            player={player}
            allowsFullscreen
            pointerEvents="none"
          />
          <Text style={styles.userName}>{userNames[videoIndex]}</Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.actionButton, styles.dislikeButton]} onPress={handleDislike}>
            <Text style={styles.buttonText}>✕</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.actionButton, styles.likeButton]} onPress={handleLike}>
            <Text style={styles.buttonText}>♥</Text>
          </TouchableOpacity>
        </View>
        
        <AppButton title="Skip to Next" onPress={changePerson} />
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
  videoContainer: {
    flex: 1,
    width: "40%",
    height: "50%",
    position: "relative",
  },
  video: {
    flex: 1,
    width: "100%",
    height: "100%",
    aspectRatio: 21 / 9,
  },
  userName: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "white",
    padding: 8,
    borderRadius: 5,
    fontSize: 16,
    fontWeight: "bold",
    zIndex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    marginVertical: 20,
  },
  actionButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  dislikeButton: {
    backgroundColor: "#ff4458",
  },
  likeButton: {
    backgroundColor: "#42c767",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
