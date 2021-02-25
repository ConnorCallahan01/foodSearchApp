                //useState
import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {

  switch(action.colorToChange){
    case 'red':
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : {...state, red: state.red + action.amount};
      // if(state.red + action.amount > 255 || state.red + action.amount < 0){
      //   return state;
      // }
      // return {...state, red: state.red + action.amount};
    case 'green':
      return state.green + action.amount > 255 || state.green + action.amount < 0
        ? state
        : {...state, green: state.green + action.amount};
      // if(state.green + action.amount > 255 || state.green + action.amount < 0){
      //   return state;
      // }
      // return {...state, green: state.green + action.amount};
    case 'blue':
      return state.blue + action.amount > 255 || state.green + action.amount < 0
        ? state
        : {...state, blue: state.blue + action.amount};
      // if(state.blue + action.amount > 255 || state.green + action.amount < 0){
      //   return state;
      // }
      // return {...state, blue: state.blue + action.amount};
    default:
      return state; //always return state as default
  }

};

const SquareScreen = () => {
  // The code in comments was the first way of writing the code.
  // (It works, but reducers work better)
  //
  // const [red, setRed] = useState(0);
  // const [green, setGreen] = useState(0);
  // const [blue, setBlue] = useState(0);

  // const setColor = (color, change) => {
  //   switch(color){
  //     case 'red':
  //       red + color > 255 || red + color < 0 ? null : setRed(red + change);
  //       return;
  //     case 'green':
  //       green + color > 255 || green + color < 0 ? null : setGreen(green + change);
  //       return;
  //     case 'blue':
  //       blue + color > 255 || blue + color < 0 ? null : setBlue(blue + change);
  //       return;
  //   }
  // }

  const [state, runMyReducer] = useReducer(reducer, {red: 0, green: 0, blue: 0})
  const { red, green, blue } = state;


  return <View>
    <ColorCounter
      color = "Red"
      // onIncrease = {() => setColor('red', COLOR_INCREMENT)}
      // onDecrease = {() => setColor('red', -1 * COLOR_INCREMENT)}

      onIncrease = {() => runMyReducer({colorToChange: 'red', amount: COLOR_INCREMENT})}
      onDecrease = {() => runMyReducer({colorToChange: 'red', amount: -1*COLOR_INCREMENT})}
    />
    <ColorCounter
      color = "Green"
      // onIncrease = {() => setColor('green', COLOR_INCREMENT)}
      // onDecrease = {() => setColor('green', -1 * COLOR_INCREMENT)}

      onIncrease = {() => runMyReducer({colorToChange: 'green', amount: COLOR_INCREMENT})}
      onDecrease = {() => runMyReducer({colorToChange: 'green', amount: -1*COLOR_INCREMENT})}
    />
    <ColorCounter
      color = "Blue"
      // onIncrease = {() => setColor('blue', COLOR_INCREMENT)}
      // onDecrease = {() => setColor('blue', -1 * COLOR_INCREMENT)}

      onIncrease = {() => runMyReducer({colorToChange: 'blue', amount: COLOR_INCREMENT})}
      onDecrease = {() => runMyReducer({colorToChange: 'blue', amount: -1*COLOR_INCREMENT})}
    />
    <View
      style = {{
        height: 150,
        width:150,
        backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`
      }}
    />
  </View>

}

const styles = StyleSheet.create({});

export default SquareScreen;
