import React, {Component} from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, StyleSheet, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

const goToLogin = () => {
   
    Actions.login()
}
export default class Bye extends React.Component {

    render() {
        return (
   <View style={styles.container}>
        <ScrollView>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                <Image source={require('../../../assets/thumb.png')}  style={styles.logo} />
                    <Text style={{fontSize:25, fontWeight:'bold'}}> Sucessfuly SIgned Out!</Text>
                    <View onLayout={goToLogin} style={{fontSize:15,}} title="Login ? "></View>
                    
                </View>
        </ScrollView>
    </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
logo:{
    justifyContent:'center',
    alignContent:'center',
    marginTop:150,
    padding:5,
    maxHeight:150,
    maxWidth:150,
    borderColor:'#eee',
    borderRadius:8,
  }
})