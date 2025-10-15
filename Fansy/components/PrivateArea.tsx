import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { ScrollView, View } from "react-native";
import { useTheme } from "../styles/ButtonStyle";
import Contact from "./elements/Contacts";
import AppButton from "./elements/EditButton";

function PrivateArea({ navigation }: { navigation: NavigationProp<any> }) {
    const [contact, SetContact] = React.useState<any[]>([]);
    const theme = useTheme();

    React.useEffect(() => {
        SetContact([
            { name: "@dancing_queen2024", email: "john.doe@example.com", phone: "123-456-7890" },
            { name: "@gamer_vibes99", email: "jane.smith@example.com", phone: "987-654-3210" },
            { name: "@coffee_addict_", email: "hans.meier@example.com", phone: "456-789-0123" },
            { name: "@midnight_artist", email: "peter.mueller@example.com", phone: "321-654-0987" },
            { name: "@sunshine_dreamer", email: "maria.garcia@example.com", phone: "654-321-0987" },
            { name: "@neon_butterfly", email: "sabine@example.com", phone: "543-210-9876" },
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
                    <Contact 
                        key={c.name} 
                        name={c.name} 
                        email={c.email} 
                        phone={c.phone} 
                        onMessagePress={() => navigation.navigate('Chat', { contactName: c.name })}
                    />
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
                <AppButton title="Edit Avatar" onPress={() => navigation.navigate('EditNPC')} />
            </View>
        </View>
    )
}

export default PrivateArea;