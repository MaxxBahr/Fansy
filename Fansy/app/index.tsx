import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';
import EditNPC from '../components/EditNPC';
import Mainpage from '../components/Main';
import PrivateArea from '../components/PrivateArea';
import RouletteArea from '../components/RouletteArea';

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

  return (
      <Tab.Navigator screenOptions={{ tabBarStyle: { display: 'none' }}} initialRouteName='Main'>
        <Tab.Screen name="PrivateArea" component={PrivateArea} />
        <Tab.Screen name="Main" component={Mainpage} />
        <Tab.Screen name="RouletteArea" component={RouletteArea} />
        <Tab.Screen name="EditNPC" component={EditNPC} />
      </Tab.Navigator>
  );
}
export default App;