import React from 'react';
import { TouchableOpacity, View, Text, StatusBar,StyleSheet, Image, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

const Welcome = () => {
	const goToLogin = () => {
		Actions.login()
	};
	const goToSignup = () => {
		Actions.signup()
	};

	return(
		<View style={styles.container}>
		<StatusBar hidden={true} />
			<Swiper autoplay={true} >
				<View style={styles.slides}>
					<Image
					source={require('../../../assets/img/policecar.jpg')}
					style={styles.image} 
					resizeMode='cover'
					/>
				</View>

				<View style={styles.slides}>
					<Image
					source={require('../../../assets/img/badroad.jpg')}
					style={styles.image}
					resizeMode="cover" 
					/>
				</View>
				<View style={styles.slides}>
					<Image
					source={require('../../../assets/img/Road.jpg')}
					style={styles.image}
					resizeMode='cover'
					/>
				</View>

				<View style={styles.slides}>
					<Image
					source={require('../../../assets/img/fire.jpg')}
					style={styles.image}
					resizeMode="stretch"
					/>
				</View>
			</Swiper>
		
			<View style={styles.textContainer}>
				<View style={styles.titleContainer}>
				   <Text style={styles.title}>INCIDENT REPORTING SYSTEM</Text>
				</View>
				<View style={styles.subTitleContainer}>
				   <Text style={styles.subTitle}>Tracking every incidents</Text>
				</View>
			</View>

			<View style={styles.buttonContainer}>
			  <TouchableOpacity onPress = {goToSignup}>
				<View style={styles.signupContainer}>
					<Text style={styles.signup}>Sign Up</Text>
				</View>
			  </TouchableOpacity>

			  <TouchableOpacity onPress = {goToLogin} >
				<View style={styles.loginContainer}>
					<Text style={styles.login}>Log In</Text>
				</View>
			  </TouchableOpacity>	
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width:'100%',
		height:'100%'
	},
	image: {
		width:'100%',
		height:'100%'
	},
	slides: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	textContainer: {
		position: 'absolute',
		bottom: "60%",
		marginLeft: 20,
		height: 120,
		alignItems: 'flex-start',
		justifyContent: 'center',
		width:'70%'
	},
	titleContainer: {
		width: '100%',
		height: 70,
		backgroundColor: '#3855E6',
		alignItems: 'center',
		justifyContent: 'center',
		padding:10,
		borderRadius:6
	},
	title: {
		fontSize: 20,
		color: '#FFFFFF'
	},
	subTitleContainer: {
		width: '100%',
		height: 60,
		backgroundColor: '#3855E6',
		opacity: 0.5
	},
	subTitle: {
		fontSize:17,
		color: '#FFFFFF',
		alignItems: 'center',
		justifyContent: 'center',
		padding:4,
	},
	buttonContainer: {
		position: 'absolute',
		flexDirection: 'row',
		bottom: "15%",
		width:width,
		height: '14%',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	signupContainer: {
		width: '75%',
		height: '70%',
		backgroundColor: '#FFFFFF',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft:'20%'
	},
	signup: {
		
		fontWeight: 'bold',
		fontSize: 17,
		color: '#3855E6'
	},
	loginContainer: {
		width: "75%",
		height: '70%',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: '#FFFFFF',
		borderWidth: 2,
		marginRight: '20%'
	},
	login: {
		fontWeight: 'bold',
		fontSize: 20,
		color: '#3855E6'
	}

});
export default Welcome