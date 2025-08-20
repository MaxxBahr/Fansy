import { NavigationProp, useFocusEffect } from '@react-navigation/native';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import React, { useCallback, useState } from "react";
import { Button, Text, View } from "react-native";
import AppButton from "./elements/EditButton";

function Mainpage({ navigation }: { navigation: NavigationProp<any> }) {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<CameraType>('back');
  const [showCamera, setShowCamera] = useState(true);

  // Kamera nur anzeigen, wenn der Screen fokussiert ist
  useFocusEffect(
    useCallback(() => {
      setShowCamera(true);  // Screen fokussiert → Kamera an
      return () => {
        setShowCamera(false); // Screen verlassen → Kamera aus
      };
    }, [])
  );

  if (!permission) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Prüfe Kamera-Erlaubnis...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Keine Kamera-Erlaubnis! Bitte erlauben:</Text>
        <Button title="Kamera-Erlaubnis anfragen" onPress={requestPermission} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {showCamera && <CameraView style={{ flex: 1 }} facing={facing} />}
      <View style={{ position: 'absolute', bottom: 20, width: '100%', justifyContent: 'center', alignItems: 'center', elevation: 2 }}>
        <AppButton title="Edit NPC" onPress={() => navigation.navigate('EditNPC')} />
      </View>
    </View>
  );
}

export default Mainpage;
