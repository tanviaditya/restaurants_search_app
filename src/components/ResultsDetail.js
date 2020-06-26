import React from "react";
import { View, Image, Text, StyleSheet, FlatList } from "react-native";

const ResultsDetails = ({ result }) => {
  return (
    <View style={styles.section}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name} </Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  section: {
    marginLeft: 15,
  },
  image: {
    width: 200,
    height: 120,
    borderRadius: 2,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default ResultsDetails;
