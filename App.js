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

  // const navRef= useRef();
  //const navigate = Navigate();
 // const navigation = useNavigation();
  
  // // useLayoutEffect(() => {
  // //   navigate.setOptions({
  // //     headerShown: false,
  // //   });
  // // }, []);
     // const navigate = useNavigate();
      const [transcript, setTranscript] = useState('');
  //     const [transcript, setTranscript] = useState('');


  useEffect(() => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.onresult = (event) => {
      const last = event.results.length - 1;
      const command = event.results[last][0].transcript;
      setTranscript(command);
      console.log(command);
    };

    recognition.start();

    return () => {
      recognition.stop();
    };
  }, []);


  useEffect(() => {
    
    switch (transcript.toLowerCase()) {
      case 'home':
        //navigate('/HomeScreen');
        break;
      case 'Discover':
       // navigate('/Discover');
        break;
        case 'Map':
       //   navigate('/Map');
          break;
      case 'contact':
      //  navigate('/contact');
        break;

        case 'login':
      //    navigate('/New');
          break;
      default:
        break;
    }
  
  }, [transcript]);



  // console.log(recognition)
  // recognition.start()

  // recognition.onresult=(event)=>{
  
  //   const command =event.results[0][0].transcript;
  //     console.log(command);
    
  //   if(command.includes("navigate to") || command.includes("go to")){
      
  //      if(command.includes("homepage") || command.includes("indexpage")){
  //         //navigate.push("/HomeScreen")
  //          //navigate.push("/HomeScreen")
  //         //navigation.push()
  //            console.log(command);
  //       }
  //       else if(command.includes("Discover") || command.includes("Discover page")){
  //   //    navigate.push("/Discover")
  //             console.log(command);
  //     }
  //       else if(command.includes("Map") || command.includes("Map page")){
  //   //    navigate.push("/Map")
  //             console.log(command);
  //     }
  //       else if(command.includes("Contact") || command.includes("Contact page")){
  //   //    navigate.push("/Contact")
  //             console.log(command);
  //     }
  //       else if(command.includes("Sign up") || command.includes("Sign up page")){
  //   //    navigate.push("/New")
  //             console.log(command);
  //     }
  //  }
  // }

  // recognition.onend=()=>{
  //   recognition.start()

  // }
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


  //   <BrowserRouter>
  //   <Routes>
  //   <Route path="HomeScreen" exact element={<HomeScreen/>}/>
  //   <Route path="Discover" element={< Discover/>} />
  //   <Route path="ItemScreen" element={<ItemScreen/>} />
  //   <Route path="New" element={<New/>} />
  //   <Route path="Map"  element={<Map/>} />
  //   <Route path="Login" element={<Login/>} />
  //   <Route path="New_sign"element={<New_sign/>} />
  //   <Route path="Contact" element={<Contact/>} />
  //   <Route path="Speech" element={<Speech/>} />
  //   </Routes>
  // </BrowserRouter>

    
  );
}


// import React, { useState } from "react";
// import { StatusBar } from "expo-status-bar";
// import { SafeAreaView, Text, View } from "react-native";
// import { TailwindProvider } from "tailwindcss-react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from "./screens/HomeScreen";
// import Discover from "./screens/Discover";
// import ItemScreen from "./screens/ItemScreen";
// import Map from "./screens/Map";
// import New from "./screens/New";
// import Login from "./screens/Login";
// import New_sign from "./screens/New_sign";
// import Contact from "./screens/Contact";
// import Speech from "./screens/Speech";
// import { recognition } from "./api/VoiceRecognization";
// import { useFocusEffect, useNavigation } from "@react-navigation/native"; // Import useNavigation hook

// import { useLayoutEffect } from "react";
// import { Navigate, useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// const Stack = createNativeStackNavigator();

// export default function App() {
//   console.log(recognition);
//   recognition.start();

//   const navigation = useNavigation(); // Use useNavigation hook at top level

//   recognition.onresult = (event) => {
//     const command = event.results[0][0].transcript;

//     if (command.includes("navigate to") || command.includes("go to")) {
//       if (command.includes("homepage") || command.includes("indexpage")) {
//         navigateTo("Home"); // Call navigateTo function
//       } else if (command.includes("Discover") || command.includes("Discover page")) {
//         navigateTo("Discover"); // Call navigateTo function
//       } else if (command.includes("Map") || command.includes("Map page")) {
//         navigateTo("Map"); // Call navigateTo function
//       } else if (command.includes("Contact") || command.includes("Contact page")) {
//         navigateTo("Contact"); // Call navigateTo function
//       } else if (command.includes("Sign up") || command.includes("Sign up page")) {
//         navigateTo("New"); // Call navigateTo function
//       }
//     }
//   };

//   recognition.onend = () => {
//     recognition.start();
//   };

//   // Define navigateTo function
//   const navigateTo =
//     (navigation, screenName) => {
//       navigation.navigate(screenName);
//     }; // Use navigation object directly
  

//   return (
//     <TailwindProvider>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={HomeScreen} />
//           <Stack.Screen name="Discover" component={Discover} />
//           <Stack.Screen name="ItemScreen" component={ItemScreen} />
//           <Stack.Screen name="New" component={New}></Stack.Screen>
//           <Stack.Screen name="Map" component={Map} />
//           <Stack.Screen name="New_sign" component={New_sign}></Stack.Screen>
//           <Stack.Screen name="Contact" component={Contact}></Stack.Screen>
//           <Stack.Screen name="Speech" component={Speech}></Stack.Screen>
//         </Stack.Navigator>
//       </NavigationContainer>
//     </TailwindProvider>
//   );
// }

