import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./styles";

interface SearchBoxProps {}

const SearchBox: React.FC<SearchBoxProps> = () => {
  const [inputText, setInputText] = useState("");

  return (
    <>
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
    </>
  );
};

export default SearchBox;
