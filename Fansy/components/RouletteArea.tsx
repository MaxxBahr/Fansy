import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { View, useColorScheme } from "react-native";
import AppButton from "./elements/EditButton";
import FloatingImage from "./elements/FloatingImage";
import { useTheme } from "../styles/ButtonStyle";

function RouletteArea({ navigation }: { navigation: NavigationProp<any> }) {
    const theme = useTheme();

    return(
        <View style={[{flex: 1}, { backgroundColor: theme.background }]}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <FloatingImage />
            </View>
            <View style={{ position: 'relative', justifyContent: 'center', alignItems: 'center', elevation: 2, paddingBottom: 20, backgroundColor: theme.background }}>
                    <AppButton title="Edit NPC" onPress={() => navigation.navigate('EditNPC')} />
            </View>
        </View>
    )
}

export default RouletteArea;