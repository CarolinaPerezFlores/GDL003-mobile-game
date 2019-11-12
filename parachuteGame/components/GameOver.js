import React from "react";
import { StyleSheet, View, Text, Button, ImageBackground } from "react-native";

class GameOver extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <ImageBackground
          style={styles.backgroundImage}
          source={require('../images/imagesPinetree.jpg')}>
        <Text style={styles.title}>Gameover</Text>
        <Text style={styles.score}>Score: {this.props.score}</Text>
        <Button
          onPress={this.props.restartGame}
          title="Restart"
          accessibilityLabel="Restart"
        />
        </ImageBackground>
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
    fontSize: 20,
    color: "white"
  },
  score: {
    fontSize: 36,
    color: "white"
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: "center",
    justifyContent: "center"
    // flexDirection: 'row',
    }
});

export default GameOver;