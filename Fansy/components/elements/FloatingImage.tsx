import React, { useRef, useEffect } from 'react';
import { Animated, Dimensions, Image, StyleSheet, View } from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

interface Props {
  imageSource: any; // z. B. require('./assets/image.png')
  speed?: number;   // Geschwindigkeit (je höher, desto langsamer)
}

const FloatingImage: React.FC<Props> = ({ imageSource, speed = 5000 }) => {
  const translateY = useRef(new Animated.Value(screenHeight)).current;

  const startAnimation = () => {
    translateY.setValue(screenHeight);
    Animated.timing(translateY, {
      toValue: -200, // Bildhöhe oder mehr
      duration: speed,
      useNativeDriver: true,
    }).start(() => startAnimation()); // Wiederholen
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <Animated.View style={[styles.imageContainer, { transform: [{ translateY }] }]}>
      <Image source={imageSource} style={styles.image} resizeMode="contain" />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: 'absolute',
  },
  image: {
    width: 500,
    height: 500
  },
});

export default FloatingImage;
