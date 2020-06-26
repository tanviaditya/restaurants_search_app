import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import { HeaderStyleInterpolators } from "react-navigation-stack";
import ResultsList from "../components/ResultsList";

import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    //price=== $ or $$ or $$$
    return results.filter((results) => {
      return results.price === price; //returning resultant array whic satisfies the given condition
    });
  };

  return (
    <ScrollView>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      <Text style={{ marginLeft: 15 }}>
        We have found {results.length} results
      </Text>
      {errorMessage ? <Text style={styles.error}> {errorMessage} </Text> : null}
      <ResultsList results={filterResultsByPrice("$")} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice("$$")} title="Big Spender" />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  screen: {
    borderWidth: 3,
    borderColor: "black",
    flex: 1,
    height: 400,
  },
  error: {
    top: 100,
    color: "red",
  },
});
export default SearchScreen;
