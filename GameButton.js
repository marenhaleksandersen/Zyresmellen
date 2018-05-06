import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class GameButton extends React.Component {

  render() {
    const gameType = this.props.game;
    const diff = this.props.difficulty;
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.props.setState({screen:'Rules', gameType: gameType, difficulty: diff })}>
         <Text style={styles.buttonText}> {this.props.children} </Text>
     </TouchableOpacity>
    );
  }
}

// Her nede skriver vi styling
const styles = StyleSheet.create({
    button: {
        marginTop: 35,


    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 20,

    },
});
