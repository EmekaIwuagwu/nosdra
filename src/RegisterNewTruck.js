import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View , Image, TextInput, TouchableOpacity,Alert } from 'react-native';

export default class RegisterNewTruck extends Component {
    static navigationOptions = {
        navigationOptions: {
          title: "Register New Truck",
        }
      };


  render() {
    return (
      <View style={styles.container}>
        <Image
            source={{uri:'asset:/logo/b069fa0f-f1bf-4784-8ecd-41591583391f_200x200.png'}}
         style={styles.logo} />
        <Text style={{textAlign:'left',fontSize:25,color: '#b8b9b8'}}> Register Truck</Text>
        <Text style={{textAlign:'left',fontSize:10,color: '#b8b9b8'}}> Enter All Information Correctly.</Text>
        
        <TextInput
        placeholder = "Engine No."
        onChangeText={UserID => this.setState({UserID})}
        style={styles.input}
        />
        <TextInput
        placeholder = "Chasis No."
        onChangeText={UserID => this.setState({UserID})}
        style={styles.input}
        />

        <TextInput
        placeholder = "Registration No."
        onChangeText={UserID => this.setState({UserID})}
        style={styles.input}
        />
        <TextInput
        placeholder = "Truck Owner Name"
        onChangeText={UserID => this.setState({UserID})}
        style={styles.input}
        />

<TouchableOpacity onPress={() => {FunctionLogin();}} style={styles.button}>
        <Text style={styles.loginbtn}> Register Trucks </Text>
         </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent :"center",
        alignItems:"center"
    },

    input:{
        width:300,
        margin:10,
        borderColor:'#b8b9b8',
        borderWidth: 2
    },

    button:{
        width:300,
        padding:10,
        backgroundColor:'#b8b9b8',
        alignItems: 'center'
    },

    loginbtn:{
        color:'#ffff'
    },

    logo:{
    width:100,
    height:100
    }
});