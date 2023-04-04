import React ,{useState} from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Discover from "./screens/Discover";
import ItemScreen from "./screens/ItemScreen";
import Map from "./screens/Map";
import Login from "./screens/Login";
import 'react-native-gesture-handler';
// import { BrowserRouter, Route,Link, redirect } from "react-router-dom";
//import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    
   
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Discover" component={Discover} />
          <Stack.Screen name="ItemScreen" component={ItemScreen} />
          <Stack.Screen name="Map" component={Map}/>
          <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>

    
  );
}
