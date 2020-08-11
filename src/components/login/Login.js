import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { AppRegistry, Button, View, backgroundImage, StyleSheet, ImageBackground,ScrollView, Image, TextInput, TouchableOpacity, Text, Alert} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';


const goToSignup = () => {
  Actions.signup()
}
 
// Creating Login Activity.
class Login extends Component {

  // Setting up Login Activity title.
  // static navigationOptions =
  //  {
  //     title: 'LoginActivity',
  //  };
 
constructor(props) {
 
    super(props)
 
    this.state = {
 
      UserEmail: '',
      UserPassword: ''
 
    }
 
  }
 
UserLoginFunction = () =>{
 
 const { UserEmail }  = this.state ;
 const { UserPassword }  = this.state ;
 
 
fetch('http://192.168.43.27/reporting/login.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    email: UserEmail,
 
    password: UserPassword
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {

        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {

            //Then open Profile activity and send user email to profile activity.
            // this.props.navigation.navigate('Second', { Email: UserEmail });
            Alert.alert(responseJson);
            Actions.connect();

        }
        else{

          Alert.alert(responseJson);
          Actions.signup();
        }

      }).catch((error) => {
        console.error(error);
      });
 
 
  }
 
  render() {
    return (
 
 <View style={styles.container}>
<ImageBackground source={require('../../../assets/img/water.jpg')} style={styles.backgroundimage}>
  <ScrollView>
    <View style={styles.loginForm}>
    <Image source={require('../../../assets/img/2.jpg')}  style={styles.logo} />
      <Text style= {{ fontSize: 20, color: "#fff", textAlign: 'center',marginBottom:'15%',  backgroundColor: '#42A5F5',padding:12, borderRadius:12 }}>LOGIN</Text>
        
        <TextInput
          style={styles.input}
          placeholder='Enter Email'
          autoCapitalize="none"
          placeholderTextColor='#fff'
          onChangeText={UserEmail => this.setState({UserEmail})}
          underlineColorAndroid='transparent'
        />
  
        <TextInput
          style={styles.input}
          placeholder='Enter Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='#fff'
          onChangeText={UserPassword => this.setState({UserPassword})}
        />
  
        <TouchableOpacity onPress={this.UserLoginFunction}>
          <View style={styles.btn}><Text style={{color:'white'}}>Login</Text></View>
        </TouchableOpacity>
        <View>
			    	<Text onPress = {goToSignup} style={{color:'white',marginTop:15}}>Click to Proceed to the Login Form</Text>
			  </View>
  </View>
  </ScrollView>
  </ImageBackground>
 
</View>
            
    );
  }
}

const styles = StyleSheet.create({
 
container :{
flex:1,
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
  marginBottom:10,
  padding: 8,
  borderRadius: 14,
  fontSize: 15,
  color: 'white'
},
loginForm:{
  width:'92%',
  marginTop:'15%',
  justifyContent:'center',
  alignItems:'center',
  marginLeft:'4%',
  marginRight: '4%',
},
btn:{
     padding:15,
			backgroundColor: '#42A5F5',
			borderRadius: 7,
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
}
})
export default Login;
