import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

export default class Waterfall extends React.Component {


  render() {
    const type = 'Shots';  //Endre denne for å endre gif
    const gifs = {
        'Waterfall': require('./img/WATERFALL.gif'),
        'Shots': require('./img/SHOTS.gif'),
        'Regel': require('./img/REGEL.gif'),
        'Drikkevenn': require('./img/DRIKKEVENN.gif'),
    }

    return (
      <View style={styles.container}>
         <Image
           source={gifs[type]}
           style={[styles.buttonImage, type === 'Drikkevenn' ? styles.drikkevenn : {}]}
           resizeMode={'contain'}
         />
      </View>
    );
  }
}

// Her nede skriver vi styling
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('screen').width,
        padding: 30,
    },
    drikkevenn: {
        width: Dimensions.get('screen').width * 0.8,
    }

});
