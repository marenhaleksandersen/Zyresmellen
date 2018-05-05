import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';

export default class Rules extends React.Component {

  render() {
    const spill = this.props.gameType;
    return (
      <View style={styles.container}>
        <Image
          source={require('./img/before.png')}
          style={[styles.beforeImage]}
          resizeMode={'contain'}
        />
        <Text style={styles.text}> { regler[spill] } </Text>

        <TouchableOpacity
              onPress={() => this.props.setState({screen:'Play', game: spill})}
              style={styles.buttonBackground}>
                  <Image
                     source={require('./img/START.png')}
                     style={[styles.buttonImage]}
                     resizeMode={'contain'}
                    />
        </TouchableOpacity>
      </View>
    );
  }
}

// Her nede skriver vi styling
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingLeft: 30,
         paddingRight: 30,
        alignItems: 'center',
    },
    beforeImage: {
       width: Dimensions.get('window').width,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 40,
    },
    buttonBackground: {
        width: Dimensions.get('window').width*0.8,
        alignItems: 'center',
        marginTop: 30,

    },
    buttonImage: {
        width: Dimensions.get('window').width/3,

    },
});


const regler = {
    "Syresmellen": "Trykk på skjermen for å få en ny oppgave. Dersom du ikke fullfører oppgaven, og ingenting annet er spesifisert må du ta 3 slurker. Mobilen sendes videre til høyre etter hver oppgave.",
    "Jeg har aldri": "Tykk på skjermen for å få opp en ny påstand. Alle drikker for hver ting de har gjort.",
    "Rygg til rygg": "Velg to stykker som skal så rygg til rygg. Man drikker for en påstand dersom man tror sitt navn er svaret. Dersom kun én drikker får man ett poeng og alle andre drikker. Klarer dere tre på rad velger dere noen nye som skal opp.",
    "Pekeleken": "Alle peker på den som passer best for hver påstand. Du drikker antall pek.",
    "Flasketuten peker på": "En person starter med en oppgave og snurrer flasken. Den flaksen peker på må gjennomføre oppgaven eller chugge glasset. Deretter får denne personen velge ny oppgave.",
    "Gummihatt": "For hver gang de synger:\n gummi: klapp på låret \n hatt: klapp i hendene \n sving: pek over skuldrene \n I pausene drikker man for hver feil.",
    "Salty Dog": "Spør Henrik eller Maren.",
    "Mate": "To og to personer er mates. Et par starter å drikke første gang de synger mate og drikker helt til neste mate. Da går turen videre til neste par.",


}
