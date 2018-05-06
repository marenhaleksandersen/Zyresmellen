import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Animated, Easing } from 'react-native';


export default class Flasketuten extends React.Component {

    constructor(props) {
        super(props);
        this.spinValue = new Animated.Value(0)
        this.state = {spinning: false}
    }

    componentDidMount () {

    }

    spin (dur) {
        this.spinValue.setValue(0)
         Animated.timing(
              this.spinValue,
                {
                toValue: 1,
                duration: dur,
                easing: Easing.linear
                }
            ).start(() => this.spin())
    }

    render () {
        const spin = this.spinValue.interpolate({
          inputRange: [0, 1],
          outputRange: this.state.stop ? [this.state.stop, this.state.stop] : ['0deg', '360deg']
        })

        handlePress = () => {
            if (this.state.spinning) return;
            this.setState({ spinning: true, stop: undefined })
            this.spin(250);

            setTimeout(() => { 
                this.setState({stop: Math.floor(Math.random() * 360)+'deg', spinning: false})
            }, 4000);
            
        }
        

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.container} onPress={() => handlePress()}>
                    <Animated.Image
                    style={{
                        width: 200,
                        height: 300,
                        transform: [{rotate: spin}] }}
                        source={require('./img/champagne.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => this.props.setState({screen:'Home', difficulty: 'none'})}>
                    <Text style={styles.backText}> HJEM </Text>
                </TouchableOpacity>
            </View>
        )
      }
}
    
Flasketuten.defaultProps = {
    hasPulse: true,
    growTo: 1.3,
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d1fffa',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('screen').width,
        padding: 30,
    },
    image: {
        width: 200,
        height: 200,
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
