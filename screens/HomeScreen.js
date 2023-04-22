import {
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
import * as Animatable from "react-native-animatable";
import alanBtn from '@alan-ai/alan-sdk-web';

import {  useNavigation } from "@react-navigation/native";
import { HeroImage } from "../assets";
import "../screens/homescreen.css"
import vid from "../assets/vid3.mp4";
// import "../index.html";
import { Container, Navbar } from "react-bootstrap";
//import { useNavigation } from "react-router-dom";
import New from "./New";
import { BsFillPersonFill} from "react-icons/bs";


const HomeScreen = () => {
  const navigate = useNavigation();

  useLayoutEffect(() => {
    navigate.setOptions({
      headerShown: false,
    });
  }, []);

  
useEffect(() => {

  // const ALAN_Key = '8ccd1f91b8af8a64264eb1cfa0e9cbcd2e956eca572e1d8b807a3e2338fdd0dc/stage'

  const alanBtnInstance = alanBtn({
      key: '8ccd1f91b8af8a64264eb1cfa0e9cbcd2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        if(commandData.command === 'navigate to map'){
          //setName(commandData.data)
          const map= commandData.page;
          window.location.href='/Map'+map;
        }
        
        // if(commandData.command === 'address'){
        //   setAddress(commandData.data)
        // }
        // if(commandData.command === 'phone'){
        //   setPhone(commandData.data)
        // }
        // if(commandData.command === 'password'){
        //   setPassword(commandData.data)
        // }
      }
});
});
  return (

  
    <SafeAreaView className=" bg-beige flex-1 relative">

<nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>W</span>e
            <span>T</span>ravel
          </h2>
        </div> 

        {/* 2nd menu part  */}
        <div className="menu-link">
        <ul>

          <a className="home "  onClick={() => navigate.navigate("HomeScreen")} href="#HomeScreen">Home</a>   

          <a className="discover" onClick={() => navigate.navigate("Discover")}  href="#Discover">Discover</a>           
                        
          <a className="map" onClick={() => navigate.navigate("Map")} href="#Map">Map</a>           
           
          <a className="contact" onClick={()=> navigate.navigate("Contact")} href="#Contact">Contact</a>           
          

          <ul className="icon">
            {/* <NavLink to="/New"><BsFillPersonFill></BsFillPersonFill></NavLink> */}
            
              <a className="icon" onClick={() => navigate.navigate(New)} href="#New"><BsFillPersonFill></BsFillPersonFill>
                </a>            
          </ul>          
        </ul>
        </div> 
      
      </nav>

      {/* First Section */}
      {/* <div className="App">
        <video autoPlay loop muted >
          <source src={vid} type="video/mp4"/>
        </video>

      </div> */}

      {/* <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold">We</Text>
        </View>

        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View> */}

      {/* Second Section */}
      <View className="h1">
    
          <h3 className="head3">ADVENTURE IS WORTHWHILE</h3>

        <h2 className="head4">
        Discover New Places With Us, Adventure Awaits !
        </h2>


        

      </View>

      
      {/* Circle Section */}
      <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36 "></View>
      <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36 position-absolute"></View>

    </SafeAreaView>

    

    
    
  );
};

export default HomeScreen;
