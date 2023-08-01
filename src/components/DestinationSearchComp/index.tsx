import React, { useState } from "react";
import styles from "./styles";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import searchResults from "../../../config/data/search";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface DestinationSearchCompProps {}

const DestinationSearchComp: React.FC<DestinationSearchCompProps> = () => {
  const [inputText, setInputText] = useState("");
  const navigation: any = useNavigation();
  return (
    <>
      <View style={styles.container}>
        {/* Input components */}
        <View style={styles.searchInputContainer}>
          <Text style={styles.arrowIcon}>
            <AntDesign name="search1" size={24} color="gray" />
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Where are you going?"
            value={inputText}
            onChangeText={setInputText}
          />
        </View>

        {/* List of destinations */}

        <FlatList
          data={searchResults}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => navigation.navigate("Guests")}
              style={styles.row}
            >
              <View style={styles.iconContainer}>
                <Entypo name="location-pin" size={30} color="black" />
              </View>
              <Text>{item.description}</Text>
            </Pressable>
          )}
        />
      </View>
    </>
  );
};

export default DestinationSearchComp;
