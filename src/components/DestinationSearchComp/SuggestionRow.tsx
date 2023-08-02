import { Entypo } from "@expo/vector-icons";
import React from "react";
import styles from "./styles";
import { FlatList, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import searchResults from "../../../config/data/search";

interface SuggestionRowProps {}

const SuggestionRow: React.FC<SuggestionRowProps> = () => {
  const navigation: any = useNavigation();

  return (
    <>
      <Pressable
        onPress={() => navigation.navigate("Guests")}
        style={styles.row}
      >
        <View style={styles.iconContainer}>
          <Entypo name="location-pin" size={30} color="black" />
        </View>
        <Text>{item.description}</Text>
      </Pressable>
      {/* <FlatList
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
      /> */}
    </>
  );
};

export default SuggestionRow;
