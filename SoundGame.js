import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import Expo from 'expo';

export default class SoundGame extends React.Component {

    constructor(props) {
        super(props);
        const game = this.props.game;
        const sound = game === 'Gummihatt' ? require('./assets/gummihatt.mp3') : game === 'Mate' ? require('./assets/mate.mp3') : require('./assets/salty.mp3');
        this.state = { soundObject: new Expo.Audio.Sound(), playing: false, src: sound }
    }

  render() {
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

    resetSound = async () => {
        if (!this.state.playing) return;
        this.state.soundObject.stopAsync();
        this.state.soundObject.unloadAsync();
        await this.state.soundObject.loadAsync(this.state.src)
        await this.state.soundObject.playAsync();
    }

    end = async () => {
        if (this.state.playing) {
            this.state.soundObject.stopAsync();
            this.state.soundObject.unloadAsync();
        }
        this.props.setState({screen:'Home', difficulty: 'none'});
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}> {this.props.game} </Text>
            <Image  style={styles.headerIcon}
                            source={require('./img/music.png')}
                            resizeMode={'contain'} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => stopSound()}>
                    <Image  style={styles.icon}
                            source={require('./img/stop.png')}
                            resizeMode={'contain'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => resetSound()}>
                    <Image  style={styles.icon}
                            source={require('./img/reset.png')}
                            resizeMode={'contain'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => playSound()}>
                    <Image  style={styles.icon}
                            source={require('./img/play.png')}
                            resizeMode={'contain'} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => end()}>
                <Text style={styles.backText}> HJEM </Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    header: {
        fontSize: 60,
        fontWeight: 'bold',
    },
    headerIcon: {
        width: Dimensions.get('screen').width * 0.5,
    },
    icon: {
        width: 70,
        height: 70,
        margin: 10,
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
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
});
