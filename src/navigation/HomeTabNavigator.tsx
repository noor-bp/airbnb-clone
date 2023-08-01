import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Link, Stack } from "expo-router";

// import DestinationSearchPage from "../screens/DestinationSearchPage";
import HomePage from "../screens/HomePage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import PostPage from "../screens/PostPage";
import SearchResultPage from "../screens/SearchResultPage";
import DestinationSearchPage from "../screens/DestinationSearchPage";
import ExploreNavigator from "./ExploreNavigator";

const HomeTabNavigator: React.FC = () => {
  // const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === "Explore") {
            iconName = focused ? "ios-search" : "search-outline";
            return <Ionicons name={iconName} size={25} color={color} />;
          } else if (route.name === "Saved") {
            iconName = focused ? "heart" : "heart-o";
            return <FontAwesome name={iconName} size={25} color={color} />;
          } else if (route.name === "Airbnb") {
            iconName = focused ? "airbnb" : "airbnb";
            return <FontAwesome5 name={iconName} size={25} color={color} />;
          } else if (route.name === "Messages") {
            iconName = focused ? "message-square" : "message-square";
            return <Feather name={iconName} size={25} color={color} />;
          } else if (route.name === "Profile") {
            iconName = focused ? "user-circle" : "user-circle";
            return <FontAwesome5 name={iconName} size={25} color={color} />;
          }

          // You can return any component that you like here!
        },
        tabBarActiveTintColor: "#f15454",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 50,
        },
        tabBarItemStyle: {
          margin: 5,
        },
      })}
    >
      <Tab.Screen
        name="Explore"
        component={ExploreNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Saved"
        component={HomePage}
        options={{
          headerTitleAlign: "center",
          headerStatusBarHeight: 40,
          headerStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
      <Tab.Screen
        name="Airbnb"
        component={HomePage}
        options={{
          headerTitleAlign: "center",
          headerStatusBarHeight: 40,
          headerStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
      <Tab.Screen
        name="Messages"
        component={HomePage}
        options={{
          headerTitleAlign: "center",
          headerStatusBarHeight: 40,
          headerStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomePage}
        options={{
          headerTitleAlign: "center",
          headerStatusBarHeight: 40,
          headerStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default HomeTabNavigator;
