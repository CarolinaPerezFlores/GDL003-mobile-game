import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

class Home extends React.Component {
  onPressStartGame = () => {
    this.props.startGame();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Parachute Game</Text>
        <Text style={styles.desc}>
          Press the parachutes to save them!
        </Text>
        <Button
          onPress={this.onPressStartGame}
          title="Start Game"
          accessibilityLabel="Start Game"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 36,
    marginBottom: 10,
    fontWeight: "800"
  },
  desc: {
    fontSize: 16,
    marginBottom: 20
  },

});

export default Home;