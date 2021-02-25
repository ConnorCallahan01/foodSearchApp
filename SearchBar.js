import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; //this is where we get the magnifined glass ico

const SearchBar = ({ term, onTermChange, onTermSubmit}) => {
    return(
      <View style = {styles.background}>

        <Feather name = 'search' style = {styles.iconStyle}/>
        <TextInput
          autoCapitalize = "none"
          autCorrect = {false}
          style = {styles.inputStyle}
          placeholder = 'Search'
          value = {term}
          onChangeText = {newTerm => onTermChange(newTerm)}
          onEndEditing = {() => onTermSubmit()}
        />
      </View>
    );

};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0FFEE',
    height: 50,
    borderRadius: 10,
    marginHorizontal: 15,
    marginTop: 20,
    flexDirection: 'row',
    marginBottom: 10
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 40,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;
