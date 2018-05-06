import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';

export default class Trykkespill extends React.Component {

  constructor(props) {
    super(props)
    if (this.props.currentQuestion) {
        this.state = { question: this.props.currentQuestion }
    } else {
        this.state = { question: 'Klikk for å starte' }
    }
  }

  
  render() {
      const spill = this.props.game;
      const difficulty = this.props.difficulty;
      const questions = categories[spill][difficulty];
      const randomQuestion = () => questions[Math.floor(Math.random() * questions.length )];
      
      handlePress = () => {
        if (difficulty === 'Barnehage' && Math.random() < 0.08) {
            this.props.setState({ currentQuestion: randomQuestion(), screen: 'Waterfall', difficulty: 'Barnehage'})
        } else {
            this.setState({question: randomQuestion()})
        }
      }

      return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touch}
                              onPress={() => handlePress()}>
                <Text style={styles.questionText}> { this.state.question } </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.backButton}
                onPress={() => this.props.setState({screen:'Home', difficulty: 'none'})}>
                <Text style={styles.backText}> HJEM </Text>
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
    },
    questionText: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 40,
    },
    backButton: {
        width: Dimensions.get('screen').width / 1.5,
        height: 40,
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginBottom: 20,
    },
    backText: {
        fontWeight: 'bold',
        fontSize: 15,
    },
});

const categories = {
   'Syresmellen': {
        'Barnehage': ['Ring noen og få dem til å si sjokoladeball på 1 minutt', 'Add den til høyre for deg sin første venn på facebook som starter på samme bokstav som deg', 'Add den rett overfor deg sin siste person på resent på snap', 'Bryt håndbakk med den du tror er svakest', 'Gi noen en lapdance, eller chug glasset ditt. Den til venstre for deg velger hvem som skal få lapdance', 'Ta en shot eller still deg på bordet og twerk i 30 sekund', 'Send melding til den siste du hadde sex med og si du har klam, eller ring moren din og si du er/har gjort noen gravid', 'Ta stein, saks, papir med en valgri person. Taperen chugger drikken sin, vinneren kan gi bort 5 slurker', 'Ha en runde suck and blow', 'Alle som har brukt smakssatt kondom ta 3 sluker', 'Ta 5 slurker hvis du har gjort det slutt med noen på SMS, hvis ikke gi dem ut', 'Alle som biter negler, ta 2 slurker', 'Jenten og gutten som har hatt flest kjærester ta 3 slurker', 'Alle som har hatt sex med flere enn den som holder mobilen, ta 3 slurker', 'Den som holder mobilen del ut en slurk for hver positive egenskap du finner ved personen rett ovenfor deg', 'Ta 4 slurker hvis du noengang har kjørt over 150km/t, hvis ikke del dem ut', 'Personen til venstre for deg må ta 5 slurker', 'Spill en runde med opp eller ned', 'Hvis du noengang har yppet til et slagsmål ta 3 slurker, hvis ikke del dem ut', 'Kategorileken, du velger kategori', 'Alle som har hatt en kjønnssykdom deler ut 3 slurker', 'Dilemma: Det dukker opp en tarantella på et tilfeldig sted i hjemmet ditt annenhver dag eller miste alt håret på kroppen hver gang du blir stukket av en mygg', 'Dilemma: Få papirkutt mellom fingrene eller tærne hver dag', 'Dilemma: Aldri klare å fokusere å fokusere på noenting eller alltid fokusere på alt', 'Dilemma: Alltid legge deg med en giftig slange i sengen eller være bundet fast til et lik 18.00-00.00 hver kveld', 'Dilemma: Være lenket fast i håndjern til charter-svein eller charter-hilde i en mnd', 'Dilemma: Aldri kunne tilegne deg mer kunnskap enn du har i dag, eller glemme alt du har fra grunnskolen og oppover', 'Dilemma: ville du vert verdens smarteste eller verdens deiligste menneske', 'Dilemma: for resten av livet ditt være blind og ukåt, eller vie resten av livet ditt som russisk soldat i en ubåt', 'Dilemma: Miste en personlig eiendel hver dag eller bli grisedenga hver julaften', 'Dilemma: Kunne snakke med dyr eller snakke alle språk i verden', 'Dilemma: Bo i kollektiv med 15 måker i 3 år eller overføre bevvistheten din til en måke i 1 år', 'Dilemma: Ville du hat kjønnslepper som øyelokk eller forhud over hode']
   },
   'Jeg har aldri': {
        'Barnehage': ['Jeg har aldri spydd på fylla', 'Jeg har aldri hatt sex i en sovepose','Jeg har aldri drukket alkohol før jeg var 18','Jeg har aldri prøvd narkotika','Jeg har aldri tatovert navnet til en sexpartner','Jeg har aldri drukket rødvin','Jeg har aldri hatt en kjæreste','Jeg har aldri hatt sex i en skog','Jeg har aldri vært i Magaluf','Jeg har aldri vært kåt på læreren','Jeg har aldri hatt sex i utlandet','Jeg har aldri blitt tatt på fersken av foreldrene mine mens jeg har hatt sex','Jeg har aldri hatt sex på ett fly','Jeg har aldri hatt sex mex en svenske','Jeg har aldri tisset på noen','Jeg har aldri kysset en bergenser','Jeg har aldri onanert på toalettet på skolen','Jeg har aldri har aldri svømt mens jeg var full','Jeg har aldri hatt sex på et utested','Jeg har aldri vært på glattcella','Jeg har aldri sett en fødsel','Jeg har aldri kysset en gutt','Jeg har aldri fyllekjørt','Jeg har aldri hatt en tvangstanke regelmessig','Jeg har aldri smakt moltebær','Jeg har aldri røyket','Jeg har aldri vært på strippeklubb','Jeg har aldri svart på tekstmelding under sex','Jeg har aldri hatt sex med to personer på en kveld','Jeg har aldri kastet opp på noen','Jeg har aldri slikket på en metallstolpe på vinteren','Jeg har aldri tatt en angrepille','Jeg har aldri vært i avhør','Jeg har aldri våknet opp en plass, og ikke visst hvor jeg var','Jeg har aldri mistet mobilen i do','Jeg har aldri kastet opp i noen andre sin bil','Jeg har aldri flyttet til en annen by/plass','Jeg har aldri hatt analsex','Jeg har aldri blitt utvist fra skolen','Jeg har aldri hatt sex med to personer på en uke','Jeg har aldri tatt noen sin jomfrudom','Jeg har aldri prøvd kokain','Jeg har aldri likt øl','Jeg har aldri fått bot for å tisse offentlig','Jeg har aldri hatt ett one night stand','Jeg har aldri pult en 97er','Jeg har aldri vært utro','Jeg har aldri gått ett år uten å hatt sex','Jeg har aldri spist hest','Jeg har aldri brukket noe','Jeg har aldri kjøpt alkohol til en mindreårig','Jeg har aldri blitt arrestert','Jeg har aldri vært forelsket i noen i dette rommet','Jeg har aldri røyket hasj','Jeg har aldri hatt ett seriøst forhold','Jeg har aldri hatt oralsex','Jeg har aldri hatt sex i dusjen','Jeg har aldri hatt sex med noen som er 10 år eldre','Jeg har aldri hatt sex mens det lå noen flere i samme seng','Jeg har aldri besvimt','Jeg har aldri slått en jente','Jeg har aldri kysset noen i dette rommet','Jeg har aldri knust en glassdør','Jeg har aldri hatt sex med noen som var mer enn tre år eldre/yngre','Jeg har aldri onanert i noen andre sitt hus','Jeg har aldri hatt klamydia','Jeg har aldri rygget på en annen bil','Jeg har aldri hatt sex på badet','Jeg har aldri hatt fylleangst','Jeg har aldri hatt sex med noen uten å huske det','Jeg har aldri tatt tran','Jeg har aldri hatt kjæreste','Jeg har aldri hatt sex med kondom','Jeg har aldri hatt trekant','Jeg har aldri hatt sex uten kondom','Jeg har aldri onanert på chatroulette','Jeg har aldri hatt sex i min egen seng','Jeg har aldri brukt p-piller','Jeg har aldri hatt sex i en bil','Jeg har aldri slått hjul naken','Jeg har aldri vært i slåsskamp','Jeg har aldri drukket kiwi-vin','Jeg har aldri hatt sex med noen av det samme kjønn','Jeg har aldri brukt noens tannbørste uten å fortelle dem det','Jeg har aldri gitt ut et falskt nummer','Jeg har aldri onanert det motsatte kjønn','Jeg har aldri blitt kastet ut av et utested','Jeg har aldri hatt sex i foreldrene mine sin seng','Jeg har aldri vært forelsket', 'Jeg har aldri tisset i dusjen de siste tre årene','Jeg har aldri hatt sex med noen jeg ikke husker navnet på','Jeg har aldri vært på legevakten','Jeg har aldri hatt fyllesex','Jeg har aldri hatt sex mens det lå noen flere i samme rom','Jeg har aldri vært våken mer enn 2 døgn','Jeg har aldri vært i bryllup','Jeg har aldri latet som at jeg har gjort noe jeg ikke har gjort i dette spillet','Jeg har aldri drukket en hel flaske sprit på en kveld','Jeg har aldri fått karakteren seks','Jeg har aldri drømt at jeg har sex','Jeg har aldri drukket meg full alene','Jeg har aldri fått blackout på fest','Jeg har aldri vært russ','Jeg har aldri sovet i mer enn 14 timer i strekk','Jeg har aldri kjørt uten lappen (utenom lærekjøring)','Jeg har aldri bæsja på skolen','Jeg har aldri grått i fylla','Jeg har aldri smakt en kondom','Jeg har aldri brukt noen andre sin ID','Jeg har aldri sovnet på kino','Jeg har aldri fått bot','Jeg har aldri kjørt på rødt lys','Jeg har aldri sovna på fest','Jeg har aldri hatt sex med en kjendis','Jeg har aldri latt være å drikke på noe jeg har gjort i denne leken','Jeg har aldri hatt hull i tennene','Jeg har aldri stjålet noe','Jeg har aldri vært gravid','Jeg har aldri spist en hel boks med is på en dag','Jeg har aldri drukket alkohol mer enn 7 dager i strekk','Jeg har aldri ønsket meg en baby','Jeg har aldri blitt full på vin','Jeg har aldri tisset ute','Jeg har aldri baksnakka noen','Jeg har aldri skulket en skoletime','Jeg har aldri hatt sex mens det kom noen inn i rommet','Jeg har aldri prøvd dop','Jeg har aldri hatt sex uten beskyttelse','Jeg har aldri testet meg for klamydia','Jeg har aldri hatt sex med noen som var mer enn fem år eldre/yngre','Jeg har aldri brukt melanotan','Jeg har aldri sendt nakenbilde','Jeg har aldri hatt sex med noen utenlandske (untattat skandinavia)','Jeg har aldri barbert leggene.','Jeg har aldri våknet, og ikke vist hvor jeg har vært.','Jeg har aldri hatt samleie.','Jeg har aldri blitt pult/pult noen i rompa.','Jeg har aldri pult på en do.','Jeg har aldri slikket noen i rompa.','Jeg har aldri knulla lærern.','Jeg har aldri onanert på skolen','Jeg har aldri hatt sex i et klasserom.','Jeg har aldri onanert det motsatte kjønn.','Jeg har aldri hatt one night stand.','Jeg har aldri vært naken på et offentlig sted.','Jeg har aldri hatt sex offentlig.','Jeg har aldri hatt sex med noen, så lenge en venn/noen ligger ved siden av.','Jeg har aldri våknet opp sammen med en person jeg ikke vet hvem er.','Jeg har aldri hatt sex med flere enn 1 person på 1 kveld.','Jeg har aldri hatt 3 kant.','Jeg har aldri hatt 4 kant.','Jeg har aldri hatt to kuker i meg samtidig.','Jeg har aldri hatt sex med det motsatte kjønn.','Jeg har aldri hatt sex med min bestevenn.','Jeg har aldri hatt sex med noen på skolen','Jeg har aldri hatt sex på skolen'],
        'Boozed': ['Jeg har aldri spydd på fylla','Jeg har aldri spist sushi','Jeg har aldri hatt sex i en sovepose','Jeg har aldri drukket alkohol før jeg var 18','Jeg har aldri prøvd narkotika','Jeg har aldri tatovert navnet til en sexpartner','Jeg har aldri drukket rødvin','Jeg har aldri hatt en kjæreste','Jeg har aldri hatt sex i en skog','Jeg har aldri vært i Magaluf','Jeg har aldri vært kåt på læreren','Jeg har aldri hatt sex i utlandet','Jeg har aldri blitt tatt på fersken av foreldrene mine mens jeg har hatt sex','Jeg har aldri hatt sex på ett fly','Jeg har aldri hatt sex mex en svenske','Jeg har aldri tisset på noen','Jeg har aldri kysset en bergenser','Jeg har aldri onanert på toalettet på skolen','Jeg har aldri har aldri svømt mens jeg var full','Jeg har aldri hatt sex på et utested','Jeg har aldri vært på glattcella','Jeg har aldri sett en fødsel','Jeg har aldri kysset en gutt','Jeg har aldri fyllekjørt','Jeg har aldri hatt en tvangstanke regelmessig','Jeg har aldri smakt moltebær','Jeg har aldri røyket','Jeg har aldri vært på strippeklubb','Jeg har aldri svart på tekstmelding under sex','Jeg har aldri spydd av karusell','Jeg har aldri hatt sex med to personer på en kveld','Jeg har aldri kastet opp på noen','Jeg har aldri slikket på en metallstolpe på vinteren','Jeg har aldri tatt en angrepille','Jeg har aldri vært i avhør','Jeg har aldri våknet opp en plass, og ikke visst hvor jeg var','Jeg har aldri mistet mobilen i do','Jeg har aldri kastet opp i noen andre sin bil','Jeg har aldri flyttet til en annen by/plass','Jeg har aldri hatt analsex','Jeg har aldri blitt utvist fra skolen','Jeg har aldri hatt sex med to personer på en uke','Jeg har aldri tatt noen sin jomfrudom','Jeg har aldri prøvd kokain','Jeg har aldri likt øl','Jeg har aldri fått bot for å tisse offentlig','Jeg har aldri hatt ett one night stand','Jeg har aldri pult en 97er','Jeg har aldri vært utro','Jeg har aldri gått ett år uten å hatt sex','Jeg har aldri spist hest','Jeg har aldri brukket noe','Jeg har aldri kjøpt alkohol til en mindreårig','Jeg har aldri blitt arrestert','Jeg har aldri vært forelsket i noen i dette rommet','Jeg har aldri røyket hasj','Jeg har aldri hatt ett seriøst forhold','Jeg har aldri hatt oralsex','Jeg har aldri hatt sex i dusjen','Jeg har aldri hatt sex med noen som er 10 år eldre','Jeg har aldri hatt sex mens det lå noen flere i samme seng','Jeg har aldri besvimt','Jeg har aldri slått en jente','Jeg har aldri kysset noen i dette rommet','Jeg har aldri knust en glassdør','Jeg har aldri hatt sex med noen som var mer enn tre år eldre/yngre','Jeg har aldri onanert i noen andre sitt hus','Jeg har aldri hatt klamydia','Jeg har aldri rygget på en annen bil','Jeg har aldri hatt sex på badet','Jeg har aldri hatt fylleangst','Jeg har aldri hatt sex med noen uten å huske det','Jeg har aldri tatt tran','Jeg har aldri hatt kjæreste','Jeg har aldri hatt sex med kondom','Jeg har aldri hatt trekant','Jeg har aldri hatt sex uten kondom','Jeg har aldri onanert på chatroulette','Jeg har aldri hatt sex i min egen seng','Jeg har aldri brukt p-piller','Jeg har aldri hatt sex i en bil','Jeg har aldri slått hjul naken','Jeg har aldri vært i slåsskamp','Jeg har aldri drukket kiwi-vin','Jeg har aldri hatt sex med noen av det samme kjønn','Jeg har aldri brukt noens tannbørste uten å fortelle dem det','Jeg har aldri gitt ut et falskt nummer','Jeg har aldri onanert det motsatte kjønn','Jeg har aldri blitt kastet ut av et utested','Jeg har aldri hatt sex i foreldrene mine sin seng','Jeg har aldri vært forelsket', 'Jeg har aldri tisset i dusjen de siste tre årene','Jeg har aldri hatt sex med noen jeg ikke husker navnet på','Jeg har aldri vært på legevakten','Jeg har aldri hatt fyllesex','Jeg har aldri hatt sex mens det lå noen flere i samme rom','Jeg har aldri vært våken mer enn 2 døgn','Jeg har aldri vært i bryllup','Jeg har aldri latet som at jeg har gjort noe jeg ikke har gjort i dette spillet','Jeg har aldri drukket en hel flaske sprit på en kveld','Jeg har aldri fått karakteren seks','Jeg har aldri drømt at jeg har sex','Jeg har aldri drukket meg full alene','Jeg har aldri fått blackout på fest','Jeg har aldri vært russ','Jeg har aldri sovet i mer enn 14 timer i strekk','Jeg har aldri kjørt uten lappen (utenom lærekjøring)','Jeg har aldri bæsja på skolen','Jeg har aldri grått i fylla','Jeg har aldri smakt en kondom','Jeg har aldri brukt noen andre sin ID','Jeg har aldri sovnet på kino','Jeg har aldri fått bot','Jeg har aldri kjørt på rødt lys','Jeg har aldri sovna på fest','Jeg har aldri hatt sex med en kjendis','Jeg har aldri latt være å drikke på noe jeg har gjort i denne leken','Jeg har aldri hatt hull i tennene','Jeg har aldri stjålet noe','Jeg har aldri vært gravid','Jeg har aldri spist en hel boks med is på en dag','Jeg har aldri drukket alkohol mer enn 7 dager i strekk','Jeg har aldri ønsket meg en baby','Jeg har aldri blitt full på vin','Jeg har aldri tisset ute','Jeg har aldri baksnakka noen','Jeg har aldri skulket en skoletime','Jeg har aldri hatt sex mens det kom noen inn i rommet','Jeg har aldri prøvd dop','Jeg har aldri hatt sex uten beskyttelse','Jeg har aldri testet meg for klamydia','Jeg har aldri hatt sex med noen som var mer enn fem år eldre/yngre','Jeg har aldri brukt melanotan','Jeg har aldri sendt nakenbilde','Jeg har aldri hatt sex med noen utenlandske (untattat skandinavia)','Jeg har aldri barbert leggene.','Jeg har aldri våknet, og ikke vist hvor jeg har vært.','Jeg har aldri hatt samleie.','Jeg har aldri blitt pult/pult noen i rompa.','Jeg har aldri pult på en do.','Jeg har aldri slikket noen i rompa.','Jeg har aldri knulla lærern.','Jeg har aldri onanert på skolen','Jeg har aldri hatt sex i et klasserom.','Jeg har aldri onanert det motsatte kjønn.','Jeg har aldri hatt one night stand.','Jeg har aldri vært naken på et offentlig sted.','Jeg har aldri hatt sex offentlig.','Jeg har aldri hatt sex med noen, så lenge en venn/noen ligger ved siden av.','Jeg har aldri våknet opp sammen med en person jeg ikke vet hvem er.','Jeg har aldri hatt sex med flere enn 1 person på 1 kveld.','Jeg har aldri hatt 3 kant.','Jeg har aldri hatt 4 kant.','Jeg har aldri hatt to kuker i meg samtidig.','Jeg har aldri hatt sex med det motsatte kjønn.','Jeg har aldri hatt sex med min bestevenn.','Jeg har aldri hatt sex med noen på skolen','Jeg har aldri hatt sex på skolen'],
        'Brisen': ['Jeg har aldri tatt en berg- og dalbane','Jeg har aldri prøvd å slanke meg','Jeg har aldri følt meg presset til noe','Jeg har aldri løyet til jobben','Jeg har aldri hatt en hamster','Jeg har aldri smakt nutella','Jeg har aldri spist en hel boks med is på en dag','Jeg har aldri drukket alkohol mer enn 7 dager i strekk','Jeg har aldri ønsket meg en baby','Jeg har aldri blitt full på vin','Jeg har aldri tisset ute','Jeg har aldri baksnakka noen','Jeg har aldri skulket en skoletime','Jeg har aldri vært redd et dyr','Jeg har aldri tatt tatovering','Jeg har aldri slått noen til blods','Jeg har aldri spist ett insekt','Jeg har aldri tatt en lærer på rumpen','Jeg har aldri rømt hjemme fra','Jeg har aldri spist tre-retters middag','Jeg har aldri besvimt','Jeg har aldri slått en jente','Jeg har aldri kysset noen i dette rommet','Jeg har aldri knust en glassdør','Jeg har aldri tatt solarium','Jeg har aldri løpt naken ute','Jeg har aldri strøket i et fag','Jeg har aldri vært utro','Jeg har aldri gått ett år uten å hatt sex','Jeg har aldri spist hest','Jeg har aldri brukket noe','Jeg har aldri kjøpt alkohol til en mindreårig','Jeg har aldri blitt arrestert','Jeg har aldri trukket tenner','Jeg har aldri vært forelsket i noen i dette rommet','Jeg har aldri blitt kallt inn til rektors kontor','Jeg har aldri røyket hasj','Jeg har aldri hatt ett seriøst forhold','Jeg har aldri likt øl','Jeg har aldri fått bot for å tisse offentlig','Jeg har aldri vært på LAN','Jeg har aldri kastet opp på noen','Jeg har aldri slikket på en metallstolpe på vinteren','Jeg har aldri tatt en angrepille','Jeg har aldri vært i avhør','Jeg har aldri våknet opp en plass, og ikke visst hvor jeg var','Jeg har aldri mistet mobilen i do','Jeg har aldri kastet opp i noen andre sin bil','Jeg har aldri flyttet til en annen by/plass', 'Jeg har aldri vært på glattcella','Jeg har aldri sett en fødsel','Jeg har aldri kysset en gutt','Jeg har aldri fyllekjørt','Jeg har aldri hatt en tvangstanke regelmessig','Jeg har aldri smakt moltebær','Jeg har aldri røyket','Jeg har aldri vært på strippeklubb']
   },
   'Rygg til rygg': {
        'Barnehage':['Hvem har ligget med den styggeste?', 'Hvem har den diggeste rompen?' , 'Hvem har flest søsken?', 'Hvem er best i senga?', 'Hvem har best alkoholtoleranse?', 'Hvem har ligget med flest?', 'Hvem har hatt flest ons?', 'Hvem ser mest på porno?', 'Hvem har hatt flest sexpartnere det siste halvåret?', 'Hvem har minst kontroll på fylla?', 'Hvem har svelget mest sæd?',
                     'Hvem liker røffest sex?', 'Hvem hadde blitt med i en pornofilm for minst penger?', 'Hvem har hatt sex med den eldste?', 'Hvem har hatt sex med den yngste?'],
        'Boozed':['Hvem kunne blitt sammen med en person lengt unna egen alder?', 'Hvem kommer til å spy i kveld?', 'Hvem har mest kroppshår?', 'Hvem kan konsumere størst mengde alkohol på en kveld?', 'Hvem har mest draget?', 'Hvem har trynet i trappa flest ganger på Lille?', 'Hvem har hatt sex med den eldste?', 'Hvem har hatt sex med den yngste?', 'Hvem hadde blitt med i en pornofilm for minst penger?', 'Hvem kommer til å ha sex i kveld?', 'Hvem er mest surrete?', 'Hvem er mest kinky?', 'Hvem har mest sex?', 'Hvem har skadet seg mest på fylla?'],
        'Brisen':['Hvem kommer til å tjene mest penger i livet?', 'Hvem mest penger på korte? ', 'Hvem er eldst mentalt? ', 'Hvem er yngst mentalt?', 'Hvem er den smarteste?', 'Hvem har vært forelsket flest ganger?', 'Hvem er fullest?', 'Hvem er penest?', 'Hvem kommer til å havne i fengsel?', 'Hvem er den dårligste sjåføren?', 'Hvem har dårligst humor?', 'Hvem har best selvtillit?', 'Hvem er mest rappkjeftet?', 'Hvem kan chugge en øl raskest?' , 'Hvem er best til å danse?', 'Hvem har strøket flest ganger på eksamen?'],
   },
   'Pekeleken': {
       'Barnehage':['Pek på den som har hatt flest ons', 'Pek på den som mest sannsynlig havner i fengsel', 'Pek på den som får den fineste kjæresten', 'Pek på den som kommer til å tjene mest penger i livet', 'Pek på den peneste/kjekkeste', 'Pek på den du tror er best i senga', 'Pek på den som oftest har sex', 'Pek på den som er mest kinky', 'Pek på den som er best å kysse', 'Pek på den som bruker mest penger på unødvendige ting', 'Pek på den største vimsen', 'Pek på den som er mest drama queen', 'Pek på den største pingla', 'Pek på den som først blir full', 'Pek på den som kommer til å ha sex i kveld', 'Pek på den som blir kastet ut av et utested i kveld', 'Pek på den som får blackout i kveld', 'Pek på den som har hatt flest sexpartnere', 'Pek på den som oftest bytter truse', 'Pek på den som er mest hipster', 'Pek på den som oftest er drita', 'Pek på den som oftest har sex', 'Pek på den med best selvtillit', 'Pek på den som hadde blitt med i en pornofilm for minst penger', 'Pek på den som har hatt sex med den eldste', 'Pek på den som har hatt sex med den yngste', 'Pek på den som har hatt sex med en mor/far', 'Pek på den som liker røffest sex', 'Pek på den som er mest høylytt i sengen', 'Pek på den som har hatt sex på den sykeste plassen', 'Pek på den som har skadet seg mest på fylla', 'Pek på den som raskest kan chugge en øl', 'Pek på den som har lagt an på dørvakten på et utested', 'Pek på den som har trynt i trappen på lille flest ganger', 'Pek på den som har kjørt i fylla', 'Pek på den som skal shotte mest i kveld', 'Pek på den som har drukket mest tequila i livet sitt', 'Pek på den som har svelget mest sæd', 'Pek på den som har flest sexleketøy', 'Pek på den som har brukt flest ulovlige rusmidler', 'Pek på den som er eldst mentalt', 'Pek på den som er yngst mentalt', 'Pek på den fulleste', 'Pek på den so har best stil', 'Pek på den kåteste', 'Pek på den som har mest draget', 'Pek på den som kan konsumere størst mengde alkohol på en kveld', 'Pek på den som har mest kroppshår', 'Pek på den som er mest rappkjefta', 'Pek på den som er flinkest å sjekke opp på byen', 'Pek på den som liker seg selv best', 'Pek på den som mest sannsynlig kommer til å eksprimentere med samme kjønn', 'Pek på den som har onanert offentlig', 'Pek på den som kommer til å spy i kveld', 'Pek på den som har minst kontroll i fylla', 'Pek på den som har brukt mest fake ID', 'Pek på den som ser mest på porno', 'Pek på den som har hatt flest sexpartnere det siste halvåret', 'Pek på den som har den skitneste loggen på pcen', 'Pek på den som kunne blitt sammen med en person lengst unna egen alder'],
       'Boozed':['Pek på den som har hatt flest ons', 'Pek på den med best karakterer', 'Pek på den som har strøket flest ganger på eksamen', 'Pek på den som mest sannsynlig havner i fengsel', 'Pek på den som har vert i flest land', 'Pek på den som kommer til å få barn først', 'Pek på den som får den fineste kjæresten', 'Pek på den som kommer til å tjene mest penger i livet', 'Pek på den du tror er best i senga', 'Pek på den som oftest har sex', 'Pek på den som er best å danse', 'Pek på den dårligste sangeren', 'Pek på den som bruker mest penger på unødvendige ting', 'Pek på den største vimsen', 'Pek på den største pingla', 'Pek på den som blir kastet ut av et utested i kveld', 'Pek på den som får blackout i kveld', 'Pek på den som oftest bytter truse', 'Pek på den som har brutt flest lover', 'Pek på den som oftest kjører for fort', 'Pek på den som oftest er drita', 'Pek på den som oftest har sex', 'Pek på den med best selvtillit', 'Pek på den som har hatt sex med den eldste', 'Pek på den som har hatt sex med en mor/far', 'Pek på den som hadde blitt med i en pornofilm for minst penger', 'Pek på den som har skadet seg mest på fylla', 'Pek på den som raskest kan chugge en øl', 'Pek på den som har lagt ann på dørvakten på et utested', 'Pek på den som har trynt i trappen på lille flest ganger', 'Pek på den som har kjørt i fylla', 'Pek på den som skal shotte mest i kveld', 'Pek på den som har drukket mest tequila i livet sitt', 'Pek på den som er eldst mentalt', 'Pek på den som er yngst mentalt','Pek på den fulleste', 'Pek på den so har best stil', 'Pek på den som har mest draget', 'Pek på den som kan konsumere størst mengde alkohol på en kveld', 'Pek på den som er mest rappkjefta', 'Pek på den som er flinkest å sjekke opp på byen', 'Pek på den som liker seg selv best', 'Pek på den som kommer til å spy i kveld', 'Pek på den som har minst kontroll i fylla', 'Pek på den som har brukt mest fake ID', 'Pek på den som har hatt flest sexpartnere det siste halvåret', 'Pek på den som har den skitneste loggen på pcen', 'Pek på den som kunne blitt sammen med en person lengst unna egen alder'],
       'Brisen':['Pek på den med best karakterer', 'Pek på den som har strøket flest ganger på eksamen', 'Pek på den som mest sannsynlig havner i fengsel', 'Pek på den som har vert i flest land', 'Pek på den som kommer til å få barn først', 'Pek på den som får den fineste kjæresten', 'Pek på den som kommer til å tjene mest penger i livet', 'Pek på den som er best å danse', 'Pek på den dårligste sangeren', 'Pek på den som bruker mest penger på unødvendige ting', 'Pek på den største vimsen', 'Pek på den som blir kastet ut av et utested i kveld', 'Pek på den som får blackout i kveld', 'Pek på den som blir mest flau av å bli pekt på', 'Pek på den som spiser mest fjorland', 'Pek på den som har brutt flest lover', 'Pek på den som oftest kjører for fort', 'Pek på den med best selvtillit', 'Pek på den som har skadet seg mest på fylla', 'Pek på den som raskest kan chugge en øl', 'Pek på den som har lagt ann på dørvakten på et utested', 'Pek på den som har trynt i trappen på lille flest ganger', 'Pek på den som skal shotte mest i kveld', 'Pek på den som har drukket mest tequila i livet sitt', 'Pek på den som er eldst mentalt', 'Pek på den som er yngst mentalt', 'Pek på den fulleste', 'Pek på den so har best stil', 'Pek på den smarteste', 'Pek på den sterkeste', 'Pek på den som hadde vunnet hunger games', 'Pek på den med høyest IQ', 'Pek på den som kan konsumere størst mengde alkohol på en kveld', 'Pek på den som er mest rappkjefta', 'Pek på den som liker seg selv best', 'Pek på den med finest hårsveis', 'Pek på den med finest dialekt', 'Pek på den som har minst kontroll i fylla', 'Pek på den som har brukt mest fake ID', 'Pek på den med dårligst humor', 'Pek på den dårligste sjåføren'],
    }
};
