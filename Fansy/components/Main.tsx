import { NavigationProp } from '@react-navigation/native';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import AppButton from "./elements/EditButton";

function Mainpage({ navigation }: { navigation: NavigationProp<any> }) {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<CameraType>('back');

  if (!permission) {
    // Camera permissions are still loading
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Prüfe Kamera-Erlaubnis...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Keine Kamera-Erlaubnis! Bitte erlauben:</Text>
        <Button title="Kamera-Erlaubnis anfragen" onPress={requestPermission} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <CameraView style={{ flex: 1 }} facing={facing} />
      <View style={{ position: 'relative', justifyContent: 'center', alignItems: 'center', elevation: 2, paddingBottom: 20 }}>
        <AppButton title="Edit NPC" onPress={() => navigation.navigate('EditNPC')} />
      </View>
    </View>
  );
}

export default Mainpage;
