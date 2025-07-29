import React, { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";
import { NavigationProp } from '@react-navigation/native';
import AppButton from "./elements/EditButton";
import { Camera, useCameraDevices } from 'react-native-vision-camera';

function Mainpage({ navigation }: { navigation: NavigationProp<any> }) {
  const devices = useCameraDevices();
  const device = devices.find(device => device.position === 'back');

  const [hasPermission, setHasPermission] = useState(false);
  const [checkedPermission, setCheckedPermission] = useState(false);

  useEffect(() => {
    (async () => {
      const status = await Camera.getCameraPermissionStatus();
      console.log("Current status:", status);
      if (status === 'granted') {
        setHasPermission(true);
      }
      setCheckedPermission(true);
    })();
  }, []);

  const handleRequestPermission = async () => {
    const newStatus = await Camera.requestCameraPermission();
    console.log("New status:", newStatus);
    if (newStatus === 'granted' || newStatus === 'denied') {
      setHasPermission(true);
    }
  };

  if (!checkedPermission) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Prüfe Kamera-Erlaubnis...</Text>
      </View>
    );
  }

  if (!hasPermission) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Keine Kamera-Erlaubnis! Bitte erlauben:</Text>
        <Button title="Kamera-Erlaubnis anfragen" onPress={handleRequestPermission} />
      </View>
    );
  }

  if (!device) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Lade Kamera...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} device={device} isActive={true} />
      <View style={{ position: 'relative', justifyContent: 'center', alignItems: 'center', elevation: 2, paddingBottom: 20 }}>
        <AppButton title="Edit NPC" onPress={() => navigation.navigate('EditNPC')} />
      </View>
    </View>
  );
}

export default Mainpage;
