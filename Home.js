import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default class Home extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} resizeMode={'contain'} source={require('./img/img1.png')}/>
        <Image style={styles.logo} resizeMode={'contain'} source={require('./img/img2.png')}/>

        <TouchableOpacity
            style={styles.buttonBackground}
            onPress={() => this.props.setState({screen:'Menu', difficulty: 'Barnehage'})}
            >
            <Image
                source={require('./img/BARNEHAGE.png')}
                style={[styles.buttonImage, {width: screenWidth*0.5}]}
                resizeMode={'contain'}
            />
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.buttonBackground}
            onPress={() => this.props.setState({screen:'Menu', difficulty: 'Boozed'})}>
            <Image
                source={require('./img/BOOZED.png')}
                style={[styles.buttonImage, {width: screenWidth*0.40}]}
                resizeMode={'contain'}
            />
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => this.props.setState({screen:'Menu', difficulty: 'Brisen'})}
            style={styles.buttonBackground}>
            <Image
                source={require('./img/BRISEN.png')}
                style={[styles.buttonImage, {width: screenWidth*0.30}]}
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
        alignItems: 'center',
        paddingTop: 100,
    },
    logo: {
        width: Dimensions.get('window').width*0.8,
        marginTop: -60,
    },
    buttonImage: {
        width: Dimensions.get('window').width/1.5,
    },

});
