import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ResultsDetails from "./ResultsDetail";
import { withNavigation } from "react-navigation";
const ResultsList = ({ title, results, navigation }) => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => results.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ResultShow", {item})}
            >
              <ResultsDetails result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 5,
  },
  conatiner: {
    marginBottom: 10,
  },
});
export default withNavigation(ResultsList);
