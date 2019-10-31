import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

class GameOver extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Gameover</Text>
        <Text style={styles.score}>Score: {this.props.score}</Text>
        <Button
          onPress={this.props.restartGame}
          title="Restart"
          accessibilityLabel="Restart"
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
    fontSize: 20
  },
  score: {
    fontSize: 36
  }
});

export default GameOver;