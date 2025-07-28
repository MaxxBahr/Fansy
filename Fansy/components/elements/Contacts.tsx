import React from "react";
import { View, Text, Button, Image } from "react-native";
import AppButton from "./EditButton";

function Contact({name, email, phone}: {name: string, email: string, phone: string}) {
    // const imageSource = '../images/' + name + '.png';
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20 }}>
            <Image source={ require('../images/default.png')} style={{ width: 50, height: 50 }}></Image>
            <View style={{ flex: 1 }}>
                <Text>{name}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <AppButton title="Call" onPress={() => console.log(`Calling ${name}...`)} />
                <AppButton title="Message" onPress={() => console.log(`Messaging ${name}...`)} />
            </View>
        </View>
    </View>
    );
}
export default Contact;