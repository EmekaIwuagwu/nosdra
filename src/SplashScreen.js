import React, { Component } from 'react';
import { Platform,StyleSheet, View, Text , Image,ActivityIndicator,Dimensions,Modal } from 'react-native';

export default class SplashScreen extends Component {
    componentDidMount()
    {
        setTimeout(() =>{
            this.props.navigation.navigate('RegisterNewTruck');
        },4000)
    }
    

  render() {
    return (
        <View style={styles.container}>
        <Image source={{uri:'asset:/logo/b069fa0f-f1bf-4784-8ecd-41591583391f_200x200.png'}}
        style={styles.logo}
        />
        <ActivityIndicator size="large" color="blue" style={{margin:10}} />
      </View>

    );
  }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    logo:{
        width:150,
        height:150
    },
})