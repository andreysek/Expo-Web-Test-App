import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

const App = () => {
  const [background, setBackground] =
    useState("white");

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color +=
        letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handlePress = () => {
    const randomColor = getRandomColor();
    setBackground(randomColor);
  };

  return (
    <TouchableWithoutFeedback
      onPress={handlePress}
    >
      <View
        style={[
          styles.container,
          { background },
        ]}
      >
        <Text style={styles.text}>
          Hello there
        </Text>
        <Text style={styles.color}>hexCode {background}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 44,
    color: "black",
  },
  color: {
    fontSize: 36,
    color: 'black',
    marginTop: 10,
  },
});

export default App;
