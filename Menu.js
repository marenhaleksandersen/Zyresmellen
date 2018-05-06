import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import GameButton from './GameButton';

export default class Menu extends React.Component {
  render() {
    const diff = this.props.difficulty;
    const bhg = (diff === 'Barnehage')  //true/false
    const boozed = (diff === 'Boozed')  //true/false
    const brisen = (diff === 'Brisen')  //true/false

    return (
      <ScrollView>
        <View style={styles.container}>
          {bhg && <Image
                source={require('./img/BARNEHAGE.png')}
                style={[styles.buttonImage]}
                resizeMode={'contain'}
           />}

           {boozed && <Image
              source={require('./img/BOOZED.png')}
              style={[styles.buttonImage]}
              resizeMode={'contain'}
           />}

           {brisen && <Image
               source={require('./img/BRISEN.png')}
               style={[styles.buttonImage]}
               resizeMode={'contain'}
           />}

             { bhg && <GameButton game='Syresmellen' setState={this.props.setState} difficulty={diff}> 🍻 Syresmellen </GameButton> }
             <GameButton game='Jeg har aldri' setState={this.props.setState} difficulty={diff}> 🎉 Jeg har aldri </GameButton>
             <GameButton game='Rygg til rygg' setState={this.props.setState} difficulty={diff}> 👯 Rygg til rygg</GameButton>
             <GameButton game='Pekeleken' setState={this.props.setState} difficulty={diff}> 👉🏼 Pekeleken</GameButton>
             <GameButton game='Flasketuten' setState={this.props.setState} difficulty={diff}> 🍾 Flasketuten peker på </GameButton>
             <GameButton game='Gummihatt' setState={this.props.setState} difficulty={diff}> 🎶 Gummihatt </GameButton>
             <GameButton game='Salty Dog' setState={this.props.setState} difficulty={diff}> 🎶 Salty Dog </GameButton>
             <GameButton game='Mate' setState={this.props.setState} difficulty={diff}> 🎶 Mate </GameButton>

            <View style={styles.bottomButtonsContainer}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => this.props.setState({screen:'Home', difficulty: 'none'})}>
                    <Text style={styles.backText}> HJEM </Text>
                </TouchableOpacity>
            </View>
         </View>
      </ScrollView>
    );
  }
}

// Her nede skriver vi styling
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d1fffa',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 40,
        paddingBottom: 30,
    },
    bottomButtonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: Dimensions.get('screen').width,
        alignSelf: 'flex-end',
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    backButton: {
        width: Dimensions.get('screen').width / 1.5,
        height: 40,
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: 30,
    },
    backText: {
        fontWeight: 'bold',
        fontSize: 15,
    },

    startImage: {
        width: Dimensions.get('window').width/1.5,
    },
    buttonImage: {
        width: Dimensions.get('window').width/1.5,
    },
});
