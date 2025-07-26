import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import ButtonStyle from "../../styles/ButtonStyle";

type AppButtonProps = {
    onPress: () => void;
    title: string;
};

function AppButton({onPress, title}: AppButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} style={ButtonStyle.AppButtonContainer as any}>
            <Text style={ButtonStyle.AppButtonText as any}>{title}</Text>
        </TouchableOpacity>
    );
}

export default AppButton;