import React, { useState } from "react";
import styles from "./styles";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import searchResults from "../../../config/data/search";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import SearchBox from "./SearchBox";
import SuggestionRow from "./SuggestionRow";

interface DestinationSearchCompProps {}

const DestinationSearchComp: React.FC<DestinationSearchCompProps> = () => {
  const [inputText, setInputText] = useState("");
  const navigation: any = useNavigation();
  return (
    <>
      <View style={styles.container}>
        {/* Input components */}
        <View style={{ height: 200 }}>
          <GooglePlacesAutocomplete
            placeholder="Where are you going?"
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
            }}
            styles={{
              textInput: styles.textInput2,
            }}
            query={{
              key: "AIzaSyCuyNNQbJcq2x9nH6xNVORus9fUp690KJo",
              language: "en",
            }}
            renderRow={(item) => <SearchBox item={item} />}
          />
        </View>
        {/* <SearchBox /> */}

        {/* List of destinations */}
        <SuggestionRow />
      </View>
    </>
  );
};

export default DestinationSearchComp;
