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
import HomeTabNavigator from "./HomeTabNavigator";
import GuestsPage from "../screens/GuestsPage";

const Router = () => {
  const Stack = createStackNavigator();
  // const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabNavigator} />
        <Stack.Screen
          name="Destination Search"
          component={DestinationSearchPage}
        />
        <Stack.Screen name="Guests" component={GuestsPage} />
        
      </Stack.Navigator> */}
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={"Destination Search"}
          component={DestinationSearchPage}
          options={{
            title: "Search your destination",
          }}
        />

        <Stack.Screen
          name={"Guests"}
          component={GuestsPage}
          options={{
            title: "How many people?",
          }}
        />

        <Stack.Screen
          name={"Post"}
          component={PostPage}
          options={{
            title: "Accommodation",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
