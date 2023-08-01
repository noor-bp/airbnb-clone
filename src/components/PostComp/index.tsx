import React from "react";
import styles from "./styles";
import { Image, View, Text } from "react-native";

interface PostCompProps {
  post: {
    bed: number;
    bedroom: number;
    coordinate: object;
    description: string;
    id: string;
    image: string;
    newPrice: number;
    oldPrice: number;
    title: string;
    totalPrice: number;
    type: string;
  };
}

const PostComp: React.FC<PostCompProps> = (props: PostCompProps) => {
  //   console.log(props.post);
  const post = props.post;
  return (
    <>
      <View style={styles.container}>
        {/* Image */}

        <Image
          style={styles.image}
          source={{
            uri: post.image,
          }}
        />

        {/* Bed & Bedroom */}

        <Text style={styles.bedroomsTxt}>
          {post.bed} bed {post.bedroom} bedroom
        </Text>

        {/* Old price & new price */}

        <Text style={styles.description} numberOfLines={2}>
          {post.type}. {post.title}
        </Text>

        {/* Total Price */}

        <Text style={styles.prices}>
          <Text style={styles.oldPrice}>${post.oldPrice}</Text>
          <Text style={styles.price}> ${post.newPrice}</Text> / night
        </Text>

        {/* Total price */}
        <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
      </View>
    </>
  );
};

export default PostComp;
