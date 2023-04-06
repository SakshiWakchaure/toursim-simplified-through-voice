import {
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import * as Animatable from "react-native-animatable";

import { Link, useNavigation } from "@react-navigation/native";
import { HeroImage } from "../assets";
import "../screens/homescreen.css"
import vid from "../assets/vid3.mp4";
// import "../index.html";
import { Container, Navbar } from "react-bootstrap";
// import {
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaYoutubeSquare,
// } from "react-icons/fa";

import New from "./New";
import { BsFillPersonFill} from "react-icons/bs";


const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
  
    <SafeAreaView className="bg-white flex-1 relative">

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

          <a onClick={() => navigation.navigate("HomeScreen")} href="#HomeScreen">Home</a>   

          <a onClick={() => navigation.navigate("Discover")}  href="#Discover">Discover</a>           
                        
          <a onClick={() => navigation.navigate("Map")} href="#Map">Map</a>           
           
          <a onClick={()=> navigation.navigate("Contact")} href="#Contact">Contact</a>           
          

          <ul className="icon">
            {/* <NavLink to="/New"><BsFillPersonFill></BsFillPersonFill></NavLink> */}
            
              <a onClick={() => navigation.navigate("New")} href="#New"><BsFillPersonFill></BsFillPersonFill>
                </a>

            
          </ul>

          
        </ul>

        {/* <div className="icons">
          <ul>
            <li>
              <a href="/login"><BsFillPersonFill></BsFillPersonFill>
                </a>

            </li>
          </ul>

        </div> */}
          {/* <ul>
             <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/service">services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul> */}

        </div> 
      

        {/* 3rd social media links */}
        {/* <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thapatechnical/"
                target="_thapa">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul> */}

          {/* hamburget menu start  */}
          {/* <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div> */}
      </nav>
 
      
      {/* First Section */}
      <div className="App">
        <video autoPlay loop muted >
          <source src={vid} type="video/mp4"/>
        </video>

      </div>

      {/* <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold">We</Text>
        </View>

        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View> */}

      {/* Second Section */}
      <View className="h1">
        
        {/* <Text className="h2">Enjoy the trip with</Text> */}
        {/* <h2 className="head2">Enjoy The trip with</h2> */}
        {/* <Text className="text-[#00BCC9] text-[38px] font-bold"> */}
          <h3 className="head3">ADVENTURE IS WORTHWHILE</h3>
          {/* Good Moments */}
        {/* </Text> */}

        {/* <Text className="text-[#3C6072] text-[28px]" >
          Discover New Places With Us, Adventure Awaits !
        </Text> */}

        <h2 className="head4">
        Discover New Places With Us, Adventure Awaits !
        </h2>
      </View>

      {/* Circle Section
      <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
      <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View> */}

      {/* Image container */}
      <View className="flex-1 relative items-center justify-center">
        {/* <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full object-cover mt-20"
        /> */}

      {/* <View className="vid">
        <video autoPlay loop muted>
          
          source={bgImage} 
          animation="fadeIn" */}
          {/* <Animatable.autoPlay>
            <video>
              source={bgImage}
            </video>
          </Animatable.autoPlay> */}


        {/* </video>
      </View> */}
      

        {/* <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center"
        >
          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]"
          >
            <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
