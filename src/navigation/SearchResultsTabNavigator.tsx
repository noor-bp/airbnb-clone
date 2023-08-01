import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchResultPage from "../screens/SearchResultPage";
import HomePage from "../screens/HomePage";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const SearchResultsTabNavigator: React.FC = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#f15454",
        // tabBarInactiveTintColor: "gray",
        tabBarIndicatorStyle: {
          backgroundColor: "#f15454",
        },
      }}
    >
      <Tab.Screen name={"list"} component={SearchResultPage} />
      <Tab.Screen name={"map"} component={SearchResultPage} />
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
