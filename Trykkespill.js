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
   'Syresmellen': ['Jeg har aldri drukket alkohol','Jeg har aldri spydd på fylla','Jeg har aldri spist sushi','Jeg har aldri hatt sex i en sovepose','Jeg har aldri drukket alkohol før jeg var 18','Jeg har aldri prøvd narkotika','Jeg har aldri tatovert navnet til en sexpartner','Jeg har aldri drukket rødvin','Jeg har aldri hatt en kjæreste','Jeg har aldri hatt sex i en skog','Jeg har aldri vært i Magaluf','Jeg har aldri vært kåt på læreren','Jeg har aldri hatt sex i utlandet','Jeg har aldri blitt tatt på fersken av foreldrene mine mens jeg har hatt sex','Jeg har aldri hatt sex på ett fly','Jeg har aldri hatt sex mex en svenske','Jeg har aldri gått på kino alene','Jeg har aldri barbert leggene','Jeg har aldri tisset på noen','Jeg har aldri kysset en bergenser','Jeg har aldri onanert på toalettet på skolen','Jeg har aldri har aldri svømt mens jeg var full','Jeg har aldri hatt sex på et utested','Jeg har aldri vært på glattcella','Jeg har aldri sett en fødsel','Jeg har aldri kysset en gutt','Jeg har aldri fyllekjørt','Jeg har aldri hatt en tvangstanke regelmessig','Jeg har aldri smakt moltebær','Jeg har aldri røyket','Jeg har aldri vært på strippeklubb','Jeg har aldri svart på tekstmelding under sex','Jeg har aldri spydd av karusell','Jeg har aldri hatt sex med to personer på en kveld','Jeg har aldri kastet opp på noen','Jeg har aldri slikket på en metallstolpe på vinteren','Jeg har aldri tatt en angrepille','Jeg har aldri vært i avhør','Jeg har aldri våknet opp en plass, og ikke visst hvor jeg var','Jeg har aldri mistet mobilen i do','Jeg har aldri kastet opp i noen andre sin bil','Jeg har aldri flyttet til en annen by/plass','Jeg har aldri hatt analsex','Jeg har aldri blitt utvist fra skolen','Jeg har aldri hatt sex med to personer på en uke','Jeg har aldri tatt noen sin jomfrudom','Jeg har aldri prøvd kokain','Jeg har aldri likt øl','Jeg har aldri fått bot for å tisse offentlig','Jeg har aldri hatt ett one night stand','Jeg har aldri pult en 97'er','Jeg har aldri vært utro','Jeg har aldri gått ett år uten å hatt sex','Jeg har aldri spist hest','Jeg har aldri brukket noe','Jeg har aldri kjøpt alkohol til en mindreårig','Jeg har aldri blitt arrestert','Jeg har aldri vært forelsket i noen i dette rommet','Jeg har aldri røyket hasj','Jeg har aldri hatt ett seriøst forhold','Jeg har aldri hatt oralsex','Jeg har aldri hatt sex i dusjen','Jeg har aldri hatt sex med noen som er 10 år eldre','Jeg har aldri hatt sex mens det lå noen flere i samme seng','Jeg har aldri besvimt','Jeg har aldri slått en jente','Jeg har aldri kysset noen i dette rommet','Jeg har aldri knust en glassdør','Jeg har aldri hatt sex med noen som var mer enn tre år eldre/yngre','Jeg har aldri onanert i noen andre sitt hus','Jeg har aldri hatt klamydia','Jeg har aldri rygget på en annen bil','Jeg har aldri hatt sex på badet','Jeg har aldri hatt fylleangst','Jeg har aldri hatt sex med noen uten å huske det','Jeg har aldri tatt tran','Jeg har aldri hatt kjæreste','Jeg har aldri hatt sex med kondom','Jeg har aldri hatt trekant','Jeg har aldri hatt sex uten kondom','Jeg har aldri onanert på chatroulette','Jeg har aldri hatt sex i min egen seng','Jeg har aldri brukt p-piller','Jeg har aldri hatt sex i en bil','Jeg har aldri slått hjul naken','Jeg har aldri vært i slåsskamp','Jeg har aldri drukket kiwi-vin','Jeg har aldri hatt sex med noen av det samme kjønn','Jeg har aldri brukt noens tannbørste uten å fortelle dem det','Jeg har aldri gitt ut et falskt nummer','Jeg har aldri onanert det motsatte kjønn','Jeg har aldri blitt kastet ut av et utested','Jeg har aldri hatt sex i foreldrene mine sin seng','Jeg har aldri vært forelsket','Jeg har aldri vært på Ikea','Jeg har aldri tisset i dusjen de siste tre årene','Jeg har aldri hatt sex med noen jeg ikke husker navnet på','Jeg har aldri vært på legevakten','Jeg har aldri hatt fyllesex','Jeg har aldri hatt sex mens det lå noen flere i samme rom','Jeg har aldri vært våken mer enn 2 døgn','Jeg har aldri vært i bryllup','Jeg har aldri latet som at jeg har gjort noe jeg ikke har gjort i dette spillet','Jeg har aldri drukket en hel flaske sprit på en kveld','Jeg har aldri fått karakteren seks','Jeg har aldri drømt at jeg har sex','Jeg har aldri drukket meg full alene','Jeg har aldri fått blackout på fest','Jeg har aldri vært russ','Jeg har aldri sovet i mer enn 14 timer i strekk','Jeg har aldri kjørt uten lappen (utenom lærekjøring)','Jeg har aldri bæsja på skolen','Jeg har aldri grått i fylla','Jeg har aldri smakt en kondom','Jeg har aldri brukt noen andre sin ID','Jeg har aldri sovnet på kino','Jeg har aldri fått bot','Jeg har aldri kjørt på rødt lys','Jeg har aldri sovna på fest','Jeg har aldri hatt sex med en kjendis','Jeg har aldri latt være å drikke på noe jeg har gjort i denne leken','Jeg har aldri hatt hull i tennene','Jeg har aldri stjålet noe','Jeg har aldri vært gravid','Jeg har aldri spist en hel boks med is på en dag','Jeg har aldri drukket alkohol mer enn 7 dager i strekk','Jeg har aldri ønsket meg en baby','Jeg har aldri blitt full på vin','Jeg har aldri tisset ute','Jeg har aldri baksnakka noen','Jeg har aldri skulket en skoletime','Jeg har aldri hatt sex mens det kom noen inn i rommet','Jeg har aldri prøvd dop','Jeg har aldri hatt sex uten beskyttelse','Jeg har aldri testet meg for klamydia','Jeg har aldri hatt sex med noen som var mer enn fem år eldre/yngre','Jeg har aldri brukt melanotan','Jeg har aldri sendt nakenbilde','Jeg har aldri hatt sex med noen utenlandske (untattat skandinavia)','Jeg har aldri barbert leggene.','Jeg har aldri våknet, og ikke vist hvor jeg har vært.','Jeg har aldri hatt samleie.','Jeg har aldri blitt pult/pult noen i rompa.','Jeg har aldri pult på en do.','Jeg har aldri slikket noen i rompa.','Jeg har aldri knulla lærern.','Jeg har aldri onanert på skolen','Jeg har aldri hatt sex i et klasserom.','Jeg har aldri onanert det motsatte kjønn.','Jeg har aldri hatt one night stand.','Jeg har aldri vært naken på et offentlig sted.','Jeg har aldri hatt sex offentlig.','Jeg har aldri hatt sex med noen, så lenge en venn/noen ligger ved siden av.','Jeg har aldri våknet opp sammen med en person jeg ikke vet hvem er.','Jeg har aldri hatt sex med flere enn 1 person på 1 kveld.','Jeg har aldri hatt 3 kant.','Jeg har aldri hatt 4 kant.','Jeg har aldri hatt to kuker i meg samtidig.','Jeg har aldri hatt sex med det motsatte kjønn.','Jeg har aldri hatt sex med min bestevenn.','Jeg har aldri hatt sex med noen på skolen','Jeg har aldri hatt sex på skolen',],
   'Jeg har aldri': ['Jeg', 'Har', 'Aldri'],
   'Rygg til rygg': ['Rygg', 'Til', 'Ryggen'],
   'Pekeleken': ['Peke', 'leken'],
};
