import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { View, Text, Button } from "react-native";
import AppButton from "./elements/EditButton";
import Contact from "./elements/Contacts";
import { readString } from "react-native-csv";

function PrivateArea({ navigation }: { navigation: NavigationProp<any> }) {
    const [contact, SetContact] = React.useState<any[]>([]);
    React.useEffect(() => {
        SetContact([
            { name: "John Doe", email: "john.doe@example.com", phone: "123-456-7890" },
            { name: "Jane Smith", email: "jane.smith@example.com", phone: "987-654-3210" },
        ])
    }, []);

    return(
        <View style={{flex: 1}}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {contact.map((c) => (
                    <Contact key={c.name} name={c.name} email={c.email} phone={c.phone} />
                ))}
            </View>
            <View style={{ position: 'relative', justifyContent: 'center', alignItems: 'center', elevation: 2, paddingBottom: 20}}>
                    <AppButton title="Edit NPC" onPress={() => navigation.navigate('EditNPC')} />
            </View>
        </View>
    )
}

export default PrivateArea;