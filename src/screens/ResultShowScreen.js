import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const ResultShowScreen = ({ navigation }) => {
  const item = navigation.getParam("item"); //complete object of the clicked restaurant
  const id = item.id;
  //   console.log(item);
  return (
    <View>
      <Text> Result Show</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default ResultShowScreen;
