import { NavigationProp, useFocusEffect } from '@react-navigation/native';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import React, { useCallback, useEffect, useState } from "react";
import { Alert, Button, Platform, StyleSheet, Text, useColorScheme, View } from "react-native";
import AppButton from "./elements/EditButton";

function Mainpage({ navigation }: { navigation: NavigationProp<any> }) {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<CameraType>('back');
  const [showCamera, setShowCamera] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const colorScheme = useColorScheme();

  // Debug permission status
  useEffect(() => {
    console.log('Permission object:', permission);
    if (permission) {
      console.log('Permission granted:', permission.granted);
      console.log('Permission status:', permission.status);
      setIsLoading(false);
    }
  }, [permission]);

  useFocusEffect(
    useCallback(() => {
      console.log('Screen focused, permission granted:', permission?.granted);
      if (permission?.granted) {
        // Add a small delay for iOS
        const timer = setTimeout(() => {
          setShowCamera(true);
        }, Platform.OS === 'ios' ? 500 : 100);
        
        return () => {
          clearTimeout(timer);
          setShowCamera(false);
        };
      }
    }, [permission?.granted])
  );

  const handleRequestPermission = async () => {
    try {
      console.log('Requesting camera permission...');
      const result = await requestPermission();
      console.log('Permission result:', result);
      
      if (!result.granted) {
        Alert.alert(
          "Camera Permission Required",
          "Camera access is needed to use this feature. Please allow camera access in your device settings.",
          [
            { text: "Cancel", style: "cancel" },
            { text: "Try Again", onPress: handleRequestPermission }
          ]
        );
      }
    } catch (error) {
      console.error("Error requesting camera permission:", error);
      Alert.alert("Error", "Failed to request camera permission: " + error);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading camera...</Text>
      </View>
    );
  }

  if (!permission) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Camera permission not available</Text>
        <Button title="Retry" onPress={() => setIsLoading(true)} />
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Camera access required</Text>
        <Text style={styles.subtext}>
          This app needs camera access to work properly.
        </Text>
        <Text style={styles.debugText}>
          Permission status: {permission.status}
        </Text>
        <Button title="Grant Camera Permission" onPress={handleRequestPermission} />
      </View>
    );
  }

  return (
    <View style={styles.fullScreen}>
      <Text style={styles.debugOverlay}>
        Camera: {showCamera ? 'ON' : 'OFF'} | Facing: {facing}
      </Text>
      
      {showCamera ? (
        <CameraView 
          style={styles.camera} 
          facing={facing}
          onCameraReady={() => console.log('Camera ready!')}
        />
      ) : (
        <View style={styles.cameraPlaceholder}>
          <Text style={styles.text}>Initializing camera...</Text>
        </View>
      )}
      
      <View style={styles.buttonContainer}>
        <AppButton 
          title="Switch Camera" 
          onPress={() => {
            console.log('Switching camera from', facing, 'to', facing === 'back' ? 'front' : 'back');
            setFacing(current => (current === 'back' ? 'front' : 'back'));
          }} 
        />
        <AppButton title="Edit NPC" onPress={() => navigation.navigate('EditNPC')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#121212',
  },
  fullScreen: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
  },
  cameraPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    color: '#fff',
  },
  subtext: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: '#ccc',
  },
  debugText: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20,
    color: '#888',
  },
  debugOverlay: {
    position: 'absolute',
    top: 50,
    left: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: '#fff',
    padding: 10,
    fontSize: 12,
    zIndex: 1000,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    gap: 10,
  },
});

export default Mainpage;
