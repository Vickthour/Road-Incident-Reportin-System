import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Button, Image, StyleSheet, StatusBar,ScrollView, ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import { DrawerActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import connect from '../connect/Connect.js'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { ceil } from 'react-native-reanimated';

const goToTest = () => {
  Actions.test()
}
const goToProfile = () => {
  Actions.profile()
}

const Drawer = createDrawerNavigator();


export default class Home extends React.Component {

  render() {
    return (
    
      <View style={styles.container}>
        <StatusBar hidden={false} />
        <View style={styles.header}>
        <Icon style={{ paddingLeft:10, color:'#fff' }}  onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                  name="md-menu" size={30} />
          <Text style={styles.header_text}>Home</Text>
          <TouchableOpacity onPress={goToProfile}>
            <View>
              <Image source={require('../../../assets/user.png')} style={styles.header_icon} />
            </View>
          </TouchableOpacity>
        </View>
      <ScrollView>
      
        <View style={styles.body}>
          <View style={{height:'40%',width:'100%'}}>
              <Swiper autoplay={true} showsPagination={false}>
                <View style={styles.slides}>
                  <Image
                  source={require('../../../assets/img/d.jpg')}
                  style={styles.image} 
                  resizeMode={"contain"}
                  />
                </View>

                <View style={styles.slides}>
                  <Image
                  source={require('../../../assets/img/badroad.jpg')}
                  style={styles.image} 
                  resizeMode={"contain"}
                  />
                </View>
                <View style={styles.slides}>
                  <Image
                  source={require('../../../assets/img/baby.jpg')}
                  style={styles.image}
                  resizeMode={"contain"}
                  />
                </View>

                <View style={styles.slides}>
                  <Image
                  source={require('../../../assets/img/b.jpg')}
                  style={styles.image}
                  resizeMode='contain'
                  />
                </View>
              </Swiper>
          </View>

          <View style={styles.SlideText}>
            <Text style={{fontSize:21,alignSelf:"center",fontWeight:'bold',color:"#f1ffff",paddingLeft:7, borderLeftWidth:5, borderColor:'#42A5F5', textShadowColor: '#42A5F5',}}>WELCOME TO REPOSTORY</Text>

              <TouchableOpacity style={styles.optionInner} onPress={goToTest}>
                  <View>
                      <Text style={{ color: '#fff',padding:'10%',}}>Make A Report</Text>
                    </View>
              </TouchableOpacity>
           </View>

           <View style={{width:'100%'}}>
             <Text style={{alignSelf:"center",fontWeight:'bold', fontSize:21,color:'#fff'}}>Road Incident Reproting System</Text>
             <Text style={{fontSize:19, padding:10,marginLeft:4,fontSize:20,color:'#fff'}}>Nowadays vehicles are increasing day by day in town and cities roads. It is a well-known problem to manage traffics on the roads in towns and cities. A lot of accident occurs on the road due to careless driving and Technical faults in vehicles. The main problem of traffic authorities is to manage the traffic on the road for the smooth functioning of vehicles that can reduce the accident and violation on the road. There is a tremendous demand from traffic authorities to develop a system that can helps to avoid the accident and keep the accident report data and also maintain the accident report data. The main objective of this paper is to model a Traffic Accident Reporting System (TARS) through UML using GIS to solve the above problem. Authors are also proposed the sequence and activity diagram for the above proposed model.</Text>
       
           </View>


        </View>

        </ScrollView>

  
      </View>
    );
  }

 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#42A5F5'

  },

  header: {
    width: '100%',
    height: '8%',
    backgroundColor: '#42A5F5',
    borderBottomColor: "black",
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: '3%',
    marginBottom:'0.1%'

  },
  header_text: {
    fontWeight: "bold",
    fontSize: 22,
    color: '#fff',
    maxWidth: '15%',
    marginRight: '65%',
    marginLeft: '3%',
    display: 'flex',
    maxHeight:'100%'

  },
  header_icon: {
    maxHeight: '50%',
    padding: 3,
    maxHeight: '100%',
    maxWidth: '30%',
    marginRight: '1%',
    borderRadius: 7
  },
  body:{
    width:'100%',
    height:'15%',
    alignItems:"center",
    backgroundColor:'#42A5F5'

  },
  image: {
		maxWidth:'100%',
    maxHeight:'50%',
    borderWidth:5,
	},
	slides: {
    alignItems: 'center',
    height:'50%',
    alignContent:'center',
    width:'100%',
    marginBottom:'0%'

  },
  SlideText:{
    width:'100%',
    paddingLeft:'3%',
    paddingRight:'3%',
    fontSize:30,
    marginTop:'0%',
    marginBottom:'20%',
    position:'relative',
    bottom:15
  },
  optionInner: {
    position:"relative",
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#42A5F5',
    borderRadius: 10,
    marginTop:'1%',
    width:'50%',
    height:'30%',
    marginRight:'25%',
    marginLeft:'25%',
    bottom:6

    
  },
})


