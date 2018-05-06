import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

export default class Alarm extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <Image
         source={require('./img/WARNING.png')}
         style={[styles.buttonImage,]}
         resizeMode={'contain'}
        />
        <Text style={styles.textStyle}> Du har valgt barnehage! Dette kan medføre konsekvenser som falle ned fra gjerder, bli kastet ut av byen, havne i fyllearresten og mye mer. Vi fraskriver oss herved ansvaret for alle konsekvenser dette kan medbringe. </Text>
      </View>
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
    }
});
