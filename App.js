import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Home from './Home';
import Menu from './Menu';
import Rules from './Rules';
import Trykkespill from './Trykkespill';
import Alarm from './Alarm';
import Waterfall from './Waterfall';
import SoundGame from './SoundGame';
import Flasketuten from './Flasketuten';

export default class App extends React.Component {


   constructor(props) {
    super(props)
    this.state = { screen: 'Home', difficulty: 'none', game: 'none' }
   }

  render() {
    const trykkeSpill = "Syresmellen, Jeg har aldri, Rygg til rygg, Pekeleken";
    const musikkSpill = "Mate, Salty Dog, Gummihatt";
    return (
      <View style={styles.container}>
        { this.state.screen === 'Play' && this.state.game === 'Flasketuten' && <Flasketuten setState={(s) => this.setState(s)} /> }
        { this.state.screen === 'Home' && <Home setState={(s) => this.setState(s) } /> }
        { this.state.screen === 'Menu' && <Menu difficulty={this.state.difficulty} setState={s => this.setState(s)} />}
        { this.state.screen === 'Rules' && <Rules gameType={this.state.gameType} setState={s => this.setState(s)} />}
        { this.state.screen === 'Play' && trykkeSpill.indexOf(this.state.game) >= 0 && <Trykkespill setState={s => this.setState(s)} game={this.state.game} difficulty={this.state.difficulty} currentQuestion={this.state.currentQuestion}/> }
        { this.state.screen === 'Play' && musikkSpill.indexOf(this.state.game) >= 0 && <SoundGame setState={s => this.setState(s)} game={this.state.game} /> }
        { this.state.screen === 'Alarm' && <Alarm setState={s => this.setState(s)}/> }
        { this.state.screen === 'Waterfall' && <Waterfall setState={s => this.setState(s)}/> }
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
        justifyContent: 'flex-start',
    },
});
