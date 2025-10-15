import LocalRoulette from '@/components/elements/LocalRoulette';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import EditNPC from '../components/EditNPC';
import DummyChat from '../components/elements/DummyChat';
import Mainpage from '../components/Main';
import PrivateArea from '../components/PrivateArea';
import RouletteArea from '../components/RouletteArea';
import { useTheme } from '../styles/ButtonStyle';

const Tab = createMaterialTopTabNavigator();
const style_button = StyleSheet.create({
  button: {
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 5,
    color: '#ffffff',
    textAlign: 'center',
}});

function App() {
  const theme = useTheme();
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={[{ flex: 1 }, { backgroundColor: theme.background }]}>
      <StatusBar 
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} 
        backgroundColor={theme.background} 
      />
      <Tab.Navigator 
        screenOptions={{ 
          tabBarStyle: { display: 'none' },
        }} 
        initialRouteName='Main'
      >
        <Tab.Screen name="PrivateArea" component={PrivateArea} />
        <Tab.Screen name="Main" component={Mainpage} />
        <Tab.Screen name="RouletteArea" component={RouletteArea} />
        <Tab.Screen name="EditNPC" component={EditNPC} />
        <Tab.Screen name="LocalRoulette" component={LocalRoulette} />
        <Tab.Screen name="Chat" component={DummyChat} />
      </Tab.Navigator>
    </GestureHandlerRootView>
  );
}

export default App;