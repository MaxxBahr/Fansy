import React from "react";
import { Image, Text, View } from "react-native";
import AppButton from "./EditButton";
import { useTheme } from "../../styles/ButtonStyle";

function Contact({name, email, phone}: {name: string, email: string, phone: string}) {
    const theme = useTheme();
    
    return (
        <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            padding: 20,
            backgroundColor: theme.card,
            marginBottom: 10,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: theme.border
        }}>
            <Image source={ require('../images/default.png')} style={{ width: 50, height: 50 }}></Image>
            <View style={{ flex: 1 }}>
                <Text style={{ color: theme.text, fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>{name}</Text>
                <Text style={{ color: theme.text, fontSize: 12, marginBottom: 10 }}>{email}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <AppButton title="Call" onPress={() => console.log(`Calling ${name}...`)} />
                    <AppButton title="Message" onPress={() => console.log(`Messaging ${name}...`)} />
                    <AppButton title="Request character" onPress={() => console.log(`Requesting specific character from ${name}...`)} />
                </View>
            </View>
        </View>
    );
}
export default Contact;