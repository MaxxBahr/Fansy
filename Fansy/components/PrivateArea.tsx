import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { View, ScrollView, useColorScheme } from "react-native";
import Contact from "./elements/Contacts";
import AppButton from "./elements/EditButton";
import { useTheme } from "../styles/ButtonStyle";

function PrivateArea({ navigation }: { navigation: NavigationProp<any> }) {
    const [contact, SetContact] = React.useState<any[]>([]);
    const theme = useTheme();

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
        <View style={[{flex: 1}, { backgroundColor: theme.background }]}>
            <ScrollView 
                style={{ flex: 1, paddingTop: 20, paddingHorizontal: 10 }}
                contentContainerStyle={{ paddingBottom: 100 }}
                showsVerticalScrollIndicator={true}
            >
                {contact.map((c) => (
                    <Contact key={c.name} name={c.name} email={c.email} phone={c.phone} />
                ))}
            </ScrollView>
            <View style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                right: 0, 
                justifyContent: 'center', 
                alignItems: 'center', 
                elevation: 2, 
                paddingVertical: 20, 
                paddingHorizontal: 10, 
                backgroundColor: theme.background,
                borderTopWidth: 1,
                borderTopColor: theme.border
            }}>
                <AppButton title="Edit NPC" onPress={() => navigation.navigate('EditNPC')} />
            </View>
        </View>
    )
}

export default PrivateArea;