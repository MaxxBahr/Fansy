/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, useColorScheme } from 'react-native';
import Mainpage from './components/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PrivateArea from './components/PrivateArea';
import RouletteArea from './components/RouletteArea';
import EditNPC from './components/EditNPC';

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
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarStyle: { display: 'none' }}} initialRouteName='Main'>
        <Tab.Screen name="PrivateArea" component={PrivateArea} />
        <Tab.Screen name="Main" component={Mainpage} />
        <Tab.Screen name="RouletteArea" component={RouletteArea} />
        <Tab.Screen name="EditNPC" component={EditNPC} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
