import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';

export default class Trykkespill extends React.Component {

  constructor(props) {
    super(props)
    this.state = { question: 'Hei' /*questions[Math.floor(Math.random() * questions.length )]*/ }
  }

  render() {
    const spill = this.props.game;
    const questions = categories[spill];
    const randomQuestion = () => questions[Math.floor(Math.random() * questions.length )];

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touch}
                              onPress={() => this.setState({question: randomQuestion()})}>
                <Text> { this.state.question } </Text>
                <Text> { spill } </Text>
            </TouchableOpacity>
        </View>
    );
  }
}

// Her nede skriver vi styling
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d1fffa',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30,
    },
    touch: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const categories = {
   'Syresmellen': ['Syre', 'Smellen'],
   'Jeg har aldri': ['Jeg', 'Har', 'Aldri'],
   'Rygg til rygg': ['Rygg', 'Til', 'Ryggen'],
   'Pekeleken': ['Peke', 'leken'],
};
