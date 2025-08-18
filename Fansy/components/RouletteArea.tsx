import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import AppButton from "./elements/EditButton";
import FloatingImage from "./elements/FloatingImage";

function RouletteArea({ navigation }: { navigation: NavigationProp<any> }) {
    return(
        <View style={{flex: 1}}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <FloatingImage />
            </View>
            <View style={{ position: 'relative', justifyContent: 'center', alignItems: 'center', elevation: 2, paddingBottom: 20}}>
                    <AppButton title="Edit NPC" onPress={() => navigation.navigate('EditNPC')} />
            </View>
        </View>
    )
}

export default RouletteArea;