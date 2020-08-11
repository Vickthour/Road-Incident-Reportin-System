import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { TouchableOpacity, Text, View, Button, Image, StyleSheet, StatusBar} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

const gotoBye = () => {
    Actions.bye()
}
export default class Profile extends Component {
    state = {
        image: null,
      };
       
      componentDidMount() {
        this.getPermissionAsync();
      }
    
      getPermissionAsync = async () => {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      };
    
      _pickImage = async () => {
        try {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          if (!result.cancelled) {
            this.setState({ image: result.uri });
          }
    
          console.log(result);
        } catch (E) {
          console.log(E);
        }
      };
    
      render() {
        let { image } = this.state;

    return(
        <View style={styles.container}>
            <View style={styles.body}>
              <Image
               source={{ uri: image }} 
               style={{ width: 120, height: '25%' ,borderRadius:5,marginLeft:'30%',marginRight:'30%',borderWidth:5,borderColor:'#fff'}}
                />
                <View style={{justifyContent:"center",alignItems:'center'}}>
                    <Text style={{fontWeight:'bold',fontSize:21,color:'#fff'}}>Name :: Olabanji Victor O.</Text>
                    <Text style={{fontWeight:'bold',fontSize:21,color:'#fff'}}>Sex :: Male</Text>

                </View>

                        <TouchableOpacity style={styles.optionInner} onPress={this._pickImage}>
                            <View>
                                <Text style={{ color: '#fff' }}>Upload Profile Photo</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{height:'30%'}}></View>
                       

                        <View style={styles.logout}>
                            <Button title="Click here to Logout" onPress={gotoBye} />
                            <View>
                                 <Text style={{fontWeight:'bold',fontSize:11,color:'#fff'}}>Thanks for using our reporting Application</Text>

                        </View>
                        </View>             
            </View>
            


            
        </View>
    );
}

}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        width:'100%',
        height:'100%',
    },
    body:{
        height:'100%',
        width:'100%',
        backgroundColor:'green',
        alignItems:"center",
        justifyContent:"center"
    },
    logout:{
        height:'1%'
      },
      option: {
        width: '100%',
        height: '10%',
        padding: 5,
    
      },
      optionInner: {
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#42A5F5',
        borderRadius: 10,
        marginBottom:'2%',
        width:'50%',
        height:'12%',
        marginRight:'30%',
        marginLeft:'20%'
      },
})