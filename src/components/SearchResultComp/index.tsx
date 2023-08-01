import React from "react";
import PostComp from "../PostComp";
import feed from "../../../config/data/feed";
import { FlatList, View } from "react-native";

interface SearchResultCompProps {
  //   post: {
  //     bed: number;
  //     bedroom: number;
  //     coordinate: object;
  //     description: string;
  //     id: string;
  //     image: string;
  //     newPrice: number;
  //     oldPrice: number;
  //     title: string;
  //     totalPrice: number;
  //     type: string;
  //   };
}

const SearchResultComp: React.FC<SearchResultCompProps> = (
  props: SearchResultCompProps
) => {
  return (
    <>
      <View>
        <FlatList
          data={feed}
          renderItem={({ item }) => <PostComp post={item} />}
        />
      </View>
    </>
  );
};

export default SearchResultComp;
