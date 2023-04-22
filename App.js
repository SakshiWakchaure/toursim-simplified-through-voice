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
import New from "./screens/New";
import { BrowserRouter, Router} from "react-router-dom";
//import Login from "./screens/Login";
import { Link } from "react-router-dom";
import 'react-native-gesture-handler';
import 'regenerator-runtime/runtime';
import Login from "./screens/Login";
import New_sign from "./screens/New_sign";
import Contact from "./screens/Contact";
import Speech from "./screens/Speech";
import { recognition } from "./api/VoiceRecognization";
//import { useNavigation, redirect, Route, Routes } from "react-router-dom";
import { useNavigation} from "@react-navigation/native";
import SpeechRecognition,{useSpeechRecognition} from "react-speech-recognition";
import { useFocusEffect } from "@react-navigation/native";
import { useLayoutEffect } from "react";
//import { Navigate, useNavigate } from "react-router-dom";
//import {useHistory} from 'react-router-dom';
import { useRef } from "react";
console.reportErrorsAsExceptions = false;
const Stack = createNativeStackNavigator();
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function App() {

      const [transcript, setTranscript] = useState('');

 
  return (
    
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
                  
          <Stack.Screen name="Home" component={HomeScreen} />
          
          <Stack.Screen name="Discover" component={Discover} />
         
          <Stack.Screen name="ItemScreen" component={ItemScreen} />
          
          <Stack.Screen name="New" component={New}></Stack.Screen>
          <Stack.Screen name="Map" component={Map}/>
          <Stack.Screen name="New_sign" component={New_sign}></Stack.Screen>
          <Stack.Screen name="Contact" component={Contact}></Stack.Screen>
          <Stack.Screen name="Speech" component={Speech}></Stack.Screen>
          
          
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>

    
  );
}


