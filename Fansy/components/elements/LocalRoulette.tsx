import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../styles/ButtonStyle";
import AppButton from "./EditButton";

export default function LocalRoulette() {
  const [nearbyCount, setNearbyCount] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    // Generate random number between 5-50 for nearby persons
    const randomCount = Math.floor(Math.random() * 46) + 5;
    setNearbyCount(randomCount);
  }, []);

  const handleLocalRoulette = () => {
    console.log("Starting local roulette...");
    // Generate new random count when button is pressed
    const newCount = Math.floor(Math.random() * 46) + 5;
    setNearbyCount(newCount);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.card, borderColor: theme.border }]}>
      <Text style={[styles.nearbyText, { color: theme.text }]}>
        {nearbyCount} persons near you
      </Text>
      <AppButton 
        title="Local Roulette" 
        onPress={handleLocalRoulette}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
  },
  nearbyText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
});