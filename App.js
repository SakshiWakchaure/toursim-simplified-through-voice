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

//import Login from "./screens/Login";
import 'react-native-gesture-handler';
import 'regenerator-runtime/runtime';
import Login from "./screens/Login";
import New_sign from "./screens/New_sign";
import Contact from "./screens/Contact";

const Stack = createNativeStackNavigator();

export default function App() {
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
          
          
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>

    
  );
}
