import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';

export default class Waterfall extends React.Component {

  constructor(props) {
    super(props)
    const sound = require('./assets/LangAlarm.mp3');
    if (Math.random() < 0.5) {
      this.state = { type: Math.random() < 0.5 ? 'Waterfall' : 'Shots', soundObject: new Expo.Audio.Sound(), playing: false, src: sound};
    } else {
      this.state = { type: Math.random() < 0.5 ? 'Regel' : 'Drikkevenn', soundObject: new Expo.Audio.Sound(), playing: false, src: sound};
    }
  }

  componentDidMount() {
    this.playSound();
  }

  componentWillUnmount() {
    this.stopSound();
  }

  playSound = async () => {
    if (this.state.playing) return;
    try {
        const soundObject = this.state.soundObject;
        this.setState({ playing: true });
        await soundObject.loadAsync(this.state.src);
        await soundObject.playAsync();
    } catch (err) {
        //Error
    }
  }

  stopSound = async () => {
      if (!this.state.playing) return;
      this.setState({playing: false});
      this.state.soundObject.stopAsync();
      this.state.soundObject.unloadAsync();
  }

  render() {
    const handlePress = () => {
      this.props.setState({screen:'Play'});
    }

    const gifs = {
        'Waterfall': {src: require('./img/WATERFALL.gif'), style: styles.waterfall},
        'Shots': {src: require('./img/SHOTS.gif'), style: styles.shots},
        'Regel': {src: require('./img/REGEL.gif'), style: styles.regel},
        'Drikkevenn': {src: require('./img/DRIKKEVENN.gif'), style: styles.drikkevenn},
    }

    return (
      <TouchableOpacity style={styles.container} onPress={() => handlePress()}>
         <Image
           source={gifs[this.state.type].src}
           style={[styles.buttonImage, gifs[this.state.type].style]}
           resizeMode={'contain'}
         />
      </TouchableOpacity>
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
        width: Dimensions.get('screen').width,
        padding: 30,
    },
    drikkevenn: {
        width: Dimensions.get('screen').width * 0.8,
    }, 
    waterfall: {
      width: Dimensions.get('screen').width * 1,
    }, 
    shots: {
      width: Dimensions.get('screen').width * 1,
    },
    regel: {
      width: Dimensions.get('screen').width * 1,
    }
});
