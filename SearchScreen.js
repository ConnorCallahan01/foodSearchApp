/* @flow weak */

import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import UseResults from '../hooks/UseResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({navigation}) => {
  const [termInBar, setTermInBar] = useState('');
  const [searchApi, results, errorMessage] = UseResults();

  const filterResultsByPrice = (price) => {
    // price == $ || $$ || $$$
    return results.filter(results => {
      return results.price === price;
    });
  }


    return(
      <View style = {{flex: 1}}>
        <SearchBar
          term = {termInBar}
          onTermChange={(newTerm) => setTermInBar(newTerm)}
          onTermSubmit = {() => searchApi(termInBar)} //this is where the helper function is used
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}

          <ScrollView>
            <ResultsList
              results={filterResultsByPrice('$')}
              title = "Cost Effective"
              navigation = {navigation}
            />
            <ResultsList
              results={filterResultsByPrice('$$')}
              title = "Bit Pricer"
              navigation = {navigation}
            />
            <ResultsList
              results={filterResultsByPrice('$$$')}
              title = "Big Spender"
              navigation = {navigation}
            />
          </ScrollView>
      </View>
)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchScreen;
