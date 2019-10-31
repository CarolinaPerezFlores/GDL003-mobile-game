import React from "react";
import { StyleSheet, View } from "react-native";
import Home from "./components/Home";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Home",
      score: 0
    };
  }

  startGame = () => {
    this.setState({
      page: "Game"
    });
  };

  restartGame = () => {
    this.setState({
      page: "Home"
    });
  };

  gameOver = score => {
    this.setState({
      page: "GameOver",
      score: score
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.page === "Home" ? ( <Home startGame={this.startGame} /> ) : null}
        {this.state.page === "Game" ? <Game gameOver={this.gameOver} /> : null}
        {this.state.page === "GameOver" ? (<GameOver score={this.state.score} restartGame={this.restartGame} />
        ) : null}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});