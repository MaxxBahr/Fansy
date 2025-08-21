import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { generateText } from "../OpenAPIService";
import AppButton from "./elements/EditButton";

function EditNPC() {
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState("");

    const presets = [
        "red hair",
        "blue eyes",
        "tall and athletic",
        "wearing a wizard hat",
        "with a robotic arm",
        "dressed in medieval armor",
    ];

    const handleGenerate = async () => {
        try {
            const text = await generateText(prompt);
            setResult(text);
        } catch (error) {
            console.error("Error generating text:", error);
        }
    }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Design Your Character</Text>
      <View style={styles.inputContainer}>
          <Text style={styles.presetButtonWrapper}>Choose Preset:</Text>
        <View style={styles.presetContainer}>
          {presets.map((preset, index) => (
            <AppButton key={index} title={preset} onPress={() => setPrompt((prev) => `${prev} ${preset}`)} />
          ))}
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter your prompt"
          value={prompt}
          onChangeText={setPrompt}
        />
        <AppButton title="Generate Text" onPress={handleGenerate} />
      </View>
      {result && <Text style={styles.result}>{result}</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    inputContainer: {
        marginBottom: 24,
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 20,
        marginBottom: 8,
    },
    result: {
        marginTop: 24,
        fontSize: 16,
        padding: 20,
    },
    presetContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
    marginBottom: 16,
    },
    presetButtonWrapper: {
    width: '48%',            
    marginBottom: 10,         
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default EditNPC;