import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/Home';
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import IssLocationScreen from './Screens/ISSLocation';
import MeteorScreen from './Screens/Meteor';

const Stack = createStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name= "Home" component={HomeScreen}/>
       <Stack.Screen name= "ISSLocation" component={IssLocationScreen}/>
       <Stack.Screen name= "Meteors" component={MeteorScreen}/>
      </Stack.Navigator>

   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
