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
            { name: "Hans Meier", email: "hans.meier@example.com", phone: "456-789-0123" },
            { name: "Peter Müller", email: "peter.mueller@example.com", phone: "321-654-0987" },
            { name: "Maria Garcia", email: "maria.garcia@example.com", phone: "654-321-0987" },
            { name: "Sabine", email: "sabine@example.com", phone: "543-210-9876" },
        ])
    }, []);

    return(
        <View style={{flex: 1}}>
            <View style={{ flex: 1, paddingTop: 20, paddingHorizontal: 10 }}>
                {contact.map((c) => (
                    <Contact key={c.name} name={c.name} email={c.email} phone={c.phone} />
                ))}
            </View>
            <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, justifyContent: 'center', alignItems: 'center', elevation: 2, paddingVertical: 20, paddingHorizontal: 10 }}>
                    <AppButton title="Edit NPC" onPress={() => navigation.navigate('EditNPC')} />
            </View>
        </View>
    )
}

export default PrivateArea;