import React, { Component } from 'react';
import { useState, useEffect, useRef } from 'react';
import { Camera } from 'expo-camera';
import { StyleSheet, View, Alert, Animated, Image, TextInput, Button, Text, Platform, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { render } from 'react-dom';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import ListView from 'deprecated-react-native-listview';
import { Dropdown } from 'react-native-material-dropdown-v2';
import { ScrollView } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

const cam = null;

const Stack = createStackNavigator();

function Test() {
  
  return (
  <NavigationContainer independent={true}>
    <Stack.Navigator >
      <Stack.Screen name="MainActivity" component={MainActivity}  />
      <Stack.Screen name="ShowIncidentList" component={ShowIncidentList} />
      <Stack.Screen name="EditIncident" component={EditIncident} initialRouteName={true} />
      <Stack.Screen name="Camera" component={CameraScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}




class MainActivity extends Component {

  static navigationOptions =
  {
    title: 'MainActivity',
  };

constructor(props) {

   super(props)

   this.state = {

     TextInput_Incident_Type: null,
     TextInput_Description: '',
     TextInput_Media: '',
     TextInput_Location: '',
     TextInput_Emergency: null,
     TextInput_Anonymous: null,
     image: null,

   }

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
         this.setState({ image: result.uri })
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }

 }

 InsertIncidentRecordsToServer = () =>{

      fetch('http://192.168.43.27/reporting/insert.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        type : this.state.TextInput_Incident_Type,

        description : this.state.TextInput_Description,

        media : this.state.TextInput_Media,

        location: this.state.TextInput_Location,

        emergency: this.state.TextInput_Emergency,

        anonymous: this.state.TextInput_Anonymous,

      })

      }).then((response) => response.json())
          .then((responseJson) => {

            // Showing response message coming from server after inserting records.
            Alert.alert(responseJson);
            Actions.test()

          }).catch((error) => {
            console.error(error);
          });

}

        GoTo_Show_IncidentList_Activity_Function = () =>
          {
            this.props.navigation.navigate('ShowIncidentList');
            
          }
          GoToCamera = () =>
          {
            this.props.navigation.navigate('Camera');
            
          }
          

 render(props) {


  let { cam } = this.state;

  

            let datas = [{
              value: 'Road Accident',
            }, {
              value: 'Road Robbery',
            }, {
              value: 'Bad Road Condition',
            },
            {
              value: 'Harrasement',
            },
            {
              value: 'Medical Ally',
            }
          ];
          let emer = [{
            value: 'Yes',
          }, {
            value: 'No',
          }
          ];

          let anon = [{
            value: 'Show Personal Details',
          }, {
            value: 'Hide Personal Details',
          }
          ];

         

          let { image } = this.state;

          handleChange = event => {
            this.setState({ TextInput_Incident_Type: event.target.value });
          };
   return (
    <ScrollView>
    <View style={styles.MainContainer}>
      


       <Text style={{fontSize: 23, textAlign: 'center', marginBottom: 9}}>Make A Report</Text>
 
     
      <View style={{width:'94%', alignContent:'center',marginLeft:'4%'}}>
       <Dropdown
        label='Incident Type**'
        data = {datas}
        style={styles.Dropdown}
        onChangeText={ datas => this.setState({ TextInput_Incident_Type : datas }) }
        fontSize={19}
        labelFontSize={19}
        containerStyle={{width:'94%', marginRight:'3%', paddingRight:'0%',}}
       />

      <TextInput

        multiline={true}
         
         placeholder="Enter Incident Description"

         onChangeText={ TextInputValue => this.setState({ TextInput_Description : TextInputValue }) }

         underlineColorAndroid='transparent'
         style={styles.TextInputStyleClass}
       />

       <TextInput

         placeholder="Enter Location"

         onChangeText={ TextInputValue => this.setState({ TextInput_Location : TextInputValue }) }

         underlineColorAndroid='transparent'

         style={styles.TextInputStyleClass}
       />

      <Dropdown
        label='Emergency ?**'
        data = {emer}
        onChangeText={ emer => this.setState({ TextInput_Emergency : emer }) }
        style={styles.Dropdown}
        containerStyle={{width:'94%'}}
        />

      
        <Dropdown
        label="Make Anoynymous Report?"
        data = {anon}
        onChangeText={ anon => this.setState({ TextInput_Anonymous : anon }) }
        style={styles.Dropdown}
        containerStyle={{width:'94%'}}
        />

                
          <TouchableOpacity onPress={this._pickImage}>
              <View style={styles.optionInner}>
                <Text style={{ color: 'yellow' }}>Choose Image</Text>
              </View>
          </TouchableOpacity>
            <View>
                <Image
                  source={{ uri: image }}
                  style={{ width: '90%', height: 100 ,borderRadius:5}}
                />
            </View>
            <View><Text style={{alignSelf:'center',fontWeight:'bold'}}>OR</Text></View>

        <TouchableOpacity onPress={this.GoToCamera}>
          <View style={styles.optionInner}>
            <Text  style={{ color: 'yellow' }}>Use Camera</Text>
          </View>
        </TouchableOpacity>
        <Text
          value={this.state.TextInput_Location}
          onChangeText={ cam => this.setState({ uri : cam }) }>
        </Text>
      

      <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.InsertIncidentRecordsToServer} >

        <Text style={styles.TextStyle}> Submit Incident Report </Text>

      </TouchableOpacity>

      <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.GoTo_Show_IncidentList_Activity_Function} >

        <Text style={styles.TextStyle}> Show Previous Reports </Text>

      </TouchableOpacity>
      </View>
     
</View>
</ScrollView>
           
   );
 }
}

class ShowIncidentList extends Component {

  static navigationOptions =
  {
     title: 'ShowIncidentList',
  };
  
  constructor(props) { 

    super(props);

    this.state = {

      isLoading: true

    }
  }

 

  componentDidMount() {
    
       return fetch('http://192.168.43.27/reporting/ShowList.php')
         .then((response) => response.json())
         .then((responseJson) => {
           let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
           this.setState({
             isLoading: false,
             dataSource: ds.cloneWithRows(responseJson),
           }, function() {
             // In this block you can do something with new state.
           });
         })
         .catch((error) => {
           console.error(error);
         });
     }
    
     GetCaseIDFunction=(id, type, description, media, location, emergency, anonymous)=>{

          this.props.navigation.navigate('EditIncident', { 

            ID : id,
            TYPE : type,
            DESCRIPTION : description,
            MEDIA : media,
            LOCATION : location,
            EMERGENCY : emergency,
            ANONYMOUS : anonymous


          });

     }

     ListViewItemSeparator = () => {
       return (
         <View
           style={{
             height: .5,
             width: "100%",
             backgroundColor: "#000",
           }}
         />
       );
     }


     render() {
      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }
   
      return (
   
        <View style={styles.MainContainer_For_Show_List_Activity}>
   
          <ListView
   
            dataSource={this.state.dataSource}
   
            renderSeparator= {this.ListViewItemSeparator}
   
            renderRow={ (rowData) => <Text style={styles.rowViewContainer} 

                      onPress={this.GetCaseIDFunction.bind(
                        this,rowData.id,
                         rowData.type, 
                         rowData.description, 
                         rowData.media, 
                         rowData.location,
                         rowData.emergency,
                         rowData.anonymous
                         )} > 

                      Case Type:  {rowData.type} reported on {rowData.time} <Text> </Text><Text>status:{rowData.status} </Text>
                     <Text> Delete</Text>
                      </Text> }
   
          />
   
        </View>
      );
    }
  

}



class EditIncident extends Component {

  
  static navigationOptions =
  {
     title: 'EditIncident',
  };
  
  constructor(props) {
    
    super(props);
    
       this.state = {
    
         TextInput_Id:'',
         TextInput_Incident_Type: null,
         TextInput_Description: '',
         TextInput_Media: '',
         TextInput_Location: '',
         TextInput_Emergency: null,
         TextInput_Anonymous: null
    
       }
    
     }


     componentDidMount(){

      // Received Report Details Sent From Previous Activity and Set Into State.
      this.setState({ 
        TextInput_Id : this.props.navigation.state.params.ID,
        TextInput_Incident_Type: this.props.navigation.state.params.TYPE,
        TextInput_Description: this.props.navigation.state.params.DESCRIPTION,
        TextInput_Media: this.props.navigation.state.params.MEDIA,
        TextInput_Location: this.props.navigation.state.params.LOCATION,
        TextInput_Emergency: this.props.navigation.state.params.EMERGENCY,
        TextInput_Anonymous: this.props.navigation.state.params.ANONYMOUS,
      })

     }
  
  


    DeleteStudentRecord = () =>{
        
          fetch('http://192.168.43.27/reporting/del.php', {
          method: 'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({
        
            id : this.state.TextInput_Id
        
          })
        
          }).then((response) => response.text())
          .then((responseJson) => {
        
            // Showing response message coming from server after inserting records.
            Alert.alert(responseJson);
        
          }).catch((error) => {
             console.error(error);
          });

        

      }

    render() {

      return (
   
   <View style={styles.MainContainer}>
   
          <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Edit Incident Record</Text>
    
          <TextInput
            
            placeholder="Incident Type Shows Here"
            
            value={this.state.TextInput_Incident_Type}
   
            onChangeText={ TextInputValue => this.setState({ TextInput_Incident_Type : TextInputValue }) }
   
            underlineColorAndroid='transparent'
   
            style={styles.TextInputStyleClass}
          />
   
         <TextInput
            
            placeholder="Incident descripion Shows Here"

            value={this.state.TextInput_Description}
   
            onChangeText={ TextInputValue => this.setState({ TextInput_Description : TextInputValue }) }
   
            underlineColorAndroid='transparent'
   
            style={styles.TextInputStyleClass}
          />
   
         <TextInput
            
            placeholder="Media Shows Here"

            value={this.state.TextInput_Media}
   
            onChangeText={ TextInputValue => this.setState({ TextInput_Media : TextInputValue }) }
   
            underlineColorAndroid='transparent'
   
            style={styles.TextInputStyleClass}
          />
   
          <TextInput
   
            placeholder="Incident Location Shows Here"

            value={this.state.TextInput_Location}
   
            onChangeText={ TextInputValue => this.setState({ TextInput_Location : TextInputValue }) }
   
            underlineColorAndroid='transparent'
   
            style={styles.TextInputStyleClass}
          />

          <TextInput
            
            placeholder="Emergency status Shows Here"

            value={this.state.TextInput_Emergency}

            onChangeText={ TextInputValue => this.setState({ TextInput_Emergency : TextInputValue }) }

            underlineColorAndroid='transparent'

            style={styles.TextInputStyleClass}
          />

          <TextInput
            
            placeholder="Anonymoous Shows Here"

            value={this.state.TextInput_Anonymous}

            onChangeText={ TextInputValue => this.setState({ TextInput_Anonymous : TextInputValue }) }

            underlineColorAndroid='transparent'

            style={styles.TextInputStyleClass}
          />
   
          

         <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.DeleteStudentRecord} >
   
            <Text style={styles.TextStyle}> DELETE Incident RECORD </Text>
   
         </TouchableOpacity>
    
   
   </View>
              
      );
    }

}




function CameraScreen(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back);
useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={ref => {
        setCameraRef(ref) ;
   }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'flex-end'
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',

            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Switch View </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignSelf: 'center'}} onPress={async() => {
            if(cameraRef){
              let photo = await cameraRef.takePictureAsync();
              this.setState({cam : photo.uri});
              props.navigation.navigate("MainActivity",{cam: photo.uri} )
            }
          }}>
            <View style={{ 
               borderWidth: 2,
               borderColor: 'white',
               height: 50,
               width:50,
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'}}
            >
              <View style={{
                 borderWidth: 2,
                 borderColor: 'white',
                 height: 40,
                 width:40,
                 backgroundColor: 'white'}} >
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}






const styles = StyleSheet.create({

  MainContainer :{

    alignItems: 'center',
    flex:1,
    paddingTop: 30,
    backgroundColor: '#fff',
    justifyContent:'center',

  },

  MainContainer_For_Show_List_Activity :{
    
    flex:1,
    paddingTop: (Platform.OS == 'ios') ? 20 : 0,
    marginLeft: 5,
    marginRight: 5
    
    },

  TextInputStyleClass: {
  marginTop:9,
  paddingLeft:10,
  width: '94%',
  marginBottom: 7,
  height: 50,
  borderWidth: 2,
  borderColor: '#42A5F5',
  borderRadius: 5 ,
  backgroundColor:'#f1ffff',
  color:'black'
  },
  Dropdown:{
    height: 50,
    borderBottomWidth: 2,
    borderColor: '#42A5F5',
    borderRadius: 5 ,
    paddingRight:'20%',
    marginBottom:'4%'
  },

  TouchableOpacityStyle: {

    paddingTop:12,
    paddingBottom:10,
    borderRadius:5,
    marginBottom:7,
    width:'97%',
    backgroundColor: '#42A5F5'

  },

  TextStyle:{
    color:'#fff',
    textAlign:'center',
  },

  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  optionInner:{

    justifyContent:"center",
    alignItems:'center',
    backgroundColor:'grey',
    borderRadius:5
  },
  option: {
    width: '90%',
    height: '100%',
    padding: 5,

  },
  optionInner: {
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: 'grey',
    borderRadius: 5,
    paddingTop:12,
    paddingBottom:10,
    borderRadius:5,
    width: '90%',
  },
 
});


export default Test;


