import React from "react";
import { Text, View } from "react-native";
import { NavigationProp } from '@react-navigation/native';
import AppButton from "./elements/EditButton";
function Mainpage({ navigation }: { navigation: NavigationProp<any> }) {
    return(
        <View style={{flex: 1}}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Main Page</Text>
            </View>
            <View style={{ position: 'relative', justifyContent: 'center', alignItems: 'center', elevation: 2, paddingBottom: 20}}>
                    <AppButton title="Edit NPC" onPress={() => navigation.navigate('EditNPC')} />
            </View>
        </View>
    )
}

export default Mainpage;
