import React from "react";
import { View, Text } from "react-native";

function Contact({name, email, phone}: {name: string, email: string, phone: string}) {
    return (
        <View style={{ padding: 10 }}>
            <Text>Name: {name}</Text>
            <Text>Email: {email}</Text>
            <Text>Phone: {phone}</Text>
        </View>
    );
}
export default Contact;