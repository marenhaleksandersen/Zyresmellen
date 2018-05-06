import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import Expo from 'expo';

export default class Alarm extends React.Component {

  constructor(props) {
    super(props)
    this.state = { playing: false, soundObject: new Expo.Audio.Sound(), src: require('./assets/KortAlarm.wav') }
  }

  componentDidMount() {
    this.playSound();
  }

  componentWillUnmount() {
    this.stopSound();
  }

  playSound = async () => {
    try {
        const soundObject = this.state.soundObject;
        await soundObject.loadAsync(this.state.src);
        await soundObject.playAsync();
    } catch (err) {
        //Error
    }
  }
  
  stopSound = async () => {
    this.state.soundObject.stopAsync();
    this.state.soundObject.unloadAsync();
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.props.setState({screen:'Menu', difficulty: 'Barnehage'})}>
        <Image
         source={require('./img/WARNING.png')}
         style={[styles.buttonImage,]}
         resizeMode={'contain'}
        />
        <Text style={styles.textStyle}> Du har valgt barnehage! Dette kan medføre konsekvenser som falle ned fra gjerder, bli kastet ut av byen, havne i fyllearresten og mye mer. Vi fraskriver oss herved ansvaret for alle konsekvenser dette kan medbringe. </Text>
        <Text style={[styles.textStyle, styles.klikkVidere]}> Trykk for å fortsette </Text>
      </TouchableOpacity>
    );
  }
}

// Her nede skriver vi styling
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c10101',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('screen').width,
        padding: 30,
    },
    buttonImage: {
         width: Dimensions.get('window').width/1.5,
         marginTop: -90,
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 40,
        color: 'white',
    },
    klikkVidere: {
      marginTop: 80,
    }
});
