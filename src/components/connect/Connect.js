import * as React from 'react';
import { Button, View, backgroundImage, TextInput, TouchableOpacity,StyleSheet,ScrollView, Text, Image} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import About from '../about/About.js';
import Home from '../home/Home.js';
import Agency from '../agency/Agency.js';
import Test from '../test/Test.js';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerActions } from 'react-navigation';





// function HomeScreen({ navigation }) {
//   return (
//     <Home />
//   );
// }


  
function HomeScreen({ navigation }) {
 
  return(
    
   <Home />
    
  )
}
function MapScreen({ navigation }) {
  return (
    <About />
   
  );
}
function AgencyScreen({ navigation }) {
  return (
   <Agency />
  );
}
function TestScreen({ navigation }) {
  return (
   <Test />
  );
}

function AboutScreen({ navigation }) {
  return (
        
    <View style={styles.container}> 
                  
                  
           <View style={styles.header}>
           <Icon style={{ paddingLeft:10, color:'#fff' }} onPress={() => navigation.openDrawer()}
                  name="md-menu" size={30} />
            <Text style = {styles.header_text}>ABOUT US</Text>
          </View>
    <ScrollView>
      <View style={styles.body}>
          <Image source={require('../../../assets/img/togeda.jpg')}  style={styles.logo} />
          <Text style={styles.title}>KUTELU MAN</Text>
          <Text></Text>
              <Text style={styles.title}>H/CS/18/0419</Text>
             

              <Text style={styles.content}> A incident expert system helps people to evaluate their 
                incident status and conditions and  accordingly provides them (na play oo)
                with incident and report advises. Moreover, it will help people 
                to save their time as they will not need to visit the doctor to 
                evaluate their incident
              </Text>
              
              <Text style={styles.contact}>Contact Us: +234 9696 6996</Text>

              <Text style={{marginTop:'20%',marginRight:'25%',marginLeft:'25%',fontSize:20}}>Supervised By Mr. Ajose I.</Text>
      </View>
    </ScrollView>

 </View>
   
  );
}

const Drawer = createDrawerNavigator();

export default function Connect() {

  return (
     
     <NavigationContainer>
     <Drawer.Navigator initialRouteName="Home">
       <Drawer.Screen name= 'Home' component={HomeScreen} />
       <Drawer.Screen name="Google Map" component={MapScreen} />
       <Drawer.Screen name="Agencies" component={AgencyScreen} />
       <Drawer.Screen name="Report" component={TestScreen} />
       <Drawer.Screen name="About Us" component={AboutScreen} />
     </Drawer.Navigator>
   </NavigationContainer>
    
  );
}


const styles = StyleSheet.create ({
  item:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    margin: 2,
    borderColor: '#42A5F5',
    borderWidth: 4,
    backgroundColor: '#42A5F5'
  },
    container:{
      flex: 1,
      backgroundColor:'#eee'
    },
      header:{
        width: '100%',
        height:'7%',
        backgroundColor: '#42A5F5',
        flexDirection:'row',
        borderBottomColor: "black",
        display:'flex',
        justifyContent:"space-between",
        paddingRight:'40%',
        paddingTop:'2%'
      },
      header_text:{
        fontWeight:"bold",
        fontSize: 20,
        color:'#fff'
      },
      logo:{
        justifyContent:'center',
        alignContent:'center',
        padding:15,
        maxHeight:140,
        maxWidth:'35%',
        marginLeft:'30%',
        marginRight:'30%',
        borderRadius:7,
        marginBottom:'5%'
      },
      content:{
        fontSize:18,
        marginBottom:'35%'
      },
      body:{
        width:'90%',
        marginLeft:'5%',
        marginRight:'5%',
        height:'50%',
        letterSpacing:10
      },
      title:{
        fontWeight:"bold",
        fontSize: 20,
        color:'#42A5F5',
        justifyContent:"center",
        alignItems:'center',
        marginLeft:'25%',
        marginRight:'20%',
        marginBottom:'10%'
      },
      contact:{
        fontSize:20,
        fontStyle:'italic'
      }
})


