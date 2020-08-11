import React, { Component } from 'react';
import { Button, View, backgroundImage, StyleSheet, ImageBackground,Image, ScrollView, TextInput, TouchableOpacity, Text, Alert, _ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { BlurView } from '@react-native-community/blur';
 

	const goToLogin = () => {
		Actions.login()
	}

class Signup extends Component {
 
		constructor(props) {
		 
			super(props)
		 
			this.state = {
		 
			  UserName: '',
			  UserEmail: '',
			  UserPassword: '',
			  UserPhone: ''
		 
			}
		 
		  }
		 
		  UserRegistrationFunction = () =>{
		 
		 
		 const { UserName }  = this.state ;
		 const { UserEmail }  = this.state ;
		 const { UserPassword }  = this.state ;
		 const { UserPhone }  = this.state ;
		 
		 
		fetch('http://192.168.43.27/reporting/signup.php', {
		  method: 'POST',
		  headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
		 
			name: UserName,
		 
			email: UserEmail,
		 
			password: UserPassword,

			phone: UserPhone
		 
		  })
		 
		}).then((response) => response.json())
			  .then((responseJson) => {
		 
		// Showing response message coming from server after inserting records.
				Alert.alert(responseJson);
				Actions.login();
			  }).catch((error) => {
				console.error(error);
			  });
		 
		 
		  }
render() {		 
	return(
	<View style={styles.container}>
		<ImageBackground source={require('../../../assets/img/water.jpg')} style={styles.backgroundimage}>
		<ScrollView>
		
		 <View style={ styles.signup_form }>
		 <Image source={require('../../../assets/img/2.jpg')}  style={styles.logo} />
		 <Text style= {{ fontSize: 20, color: "#fff", textAlign: 'center', marginBottom: 35, backgroundColor: '#42A5F5',padding:8, borderRadius:15}}>Sign Up</Text>
		  <TextInput
			   style={styles.input}
			   placeholder='Enter Username'
			   autoCapitalize="none"
			   placeholderTextColor='white'
			   onChangeText={UserName => this.setState({UserName})}
          	   underlineColorAndroid='transparent'
			 />
			 <TextInput
			   style={styles.input}
			   placeholder='Enter Email'
			   autoCapitalize="none"
			   placeholderTextColor='white'
			   onChangeText={UserEmail => this.setState({UserEmail})}
			 />
			 <TextInput
			   style={styles.input}
			   placeholder='Enter Password'
			   secureTextEntry={true}
			   autoCapitalize="none"
			   placeholderTextColor='white'
			   onChangeText={UserPassword => this.setState({UserPassword})}
			 />
			 <TextInput
			   style={styles.input}
			   placeholder='Enter Phone Number'
			   autoCapitalize="none"
			   placeholderTextColor='white'
			   onChangeText={UserPhone => this.setState({UserPhone})}
			 />
			 <TouchableOpacity
			   title='Sign Up' onPress={this.UserRegistrationFunction}>
				   <View>
					   <Text style={styles.btn}>Sign Up</Text>
				   </View>

			 </TouchableOpacity>

			 <View>
				<Text onPress = {goToLogin} style={styles.login}>Click to Proceed to the Login Form</Text>
			</View>
        
		 </View>
		 </ScrollView>
	  </ImageBackground>
	</View>
	);
	}

}	

const styles = StyleSheet.create({
		container:{
		  flex: 1,
		},
		btn:{
			padding:15,
			backgroundColor: '#42A5F5',
			borderRadius: 1,
			fontWeight: 'bold',
			color: 'white',
			borderRadius:7
			
		},
		backgroundimage:{
		  width:'100%',
		  height: '100%',
		  flex:1
		},
		input: {
		  width: '90%',
		  height: 50,
		  backgroundColor: '#42A5F5',
		  marginBottom:7,
		  padding: 8,
		  color: 'white',
		  borderRadius: 14,
		  fontSize: 15,
		},
		signup_form:{
		  width:'92%',
		  marginTop:'7%',
		  justifyContent:'center',
		  alignItems:'center',
		  marginLeft:'4%',
		  marginRight: '4%',
		  marginBottom:'10%',
		},
		logo:{
		  justifyContent:'center',
		  alignContent:'center',
		  padding:9,
		  maxHeight:60,
		  maxWidth:'16%',
		  marginLeft:'42%',
		  marginRight:'42%',
		  borderRadius:7
		},
		login:{
			color:'white',
			marginTop:20,
			fontWeight:'bold'
		}
		
	  });
export default Signup
