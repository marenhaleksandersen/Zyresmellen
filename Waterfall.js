import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';

export default class Waterfall extends React.Component {

  constructor(props) {
    super(props)
    if (Math.random() < 0.5) {
      this.state = { type: Math.random() < 0.5 ? 'Waterfall' : 'Shots'};
    } else {
      this.state = { type: Math.random() < 0.5 ? 'Regel' : 'Drikkevenn'};
    }
  }

  render() {
    const handlePress = () => {
      this.props.setState({screen:'Play'});
    }

    const gifs = {
        'Waterfall': require('./img/WATERFALL.gif'),
        'Shots': require('./img/SHOTS.gif'),
        'Regel': require('./img/REGEL.gif'),
        'Drikkevenn': require('./img/DRIKKEVENN.gif'),
    }

    return (
      <TouchableOpacity style={styles.container} onPress={() => handlePress()}>
         <Image
           source={gifs[this.state.type]}
           style={[styles.buttonImage, this.state.type === 'Drikkevenn' ? styles.drikkevenn : {}]}
           style={[styles.buttonImage, this.state.type === 'Waterfall' ? styles.drikkevenn : {}]}
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
    }

});
