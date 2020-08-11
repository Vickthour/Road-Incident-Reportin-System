import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from '../home/Home.js';
import About from '../about/About.js';
import Signup from '../signup/Signup.js';
import Login from '../login/Login.js';
import Welcome from '../welcome/Welcome.js';
import Agency from '../agency/Agency.js';
import Connect from '../connect/Connect.js';
import Bye from '../bye/Bye.js';
import Test from '../test/Test.js';
import Profile from '../profile/Profile.js';
const Routes = () => (
	<Router>
		<Scene key = "root">
			<Scene key ="connect" component = {Connect} hideNavBar={true}  />
			<Scene key ="welcome" component = {Welcome} hideNavBar={true} initial={true} />
			<Scene key ="home" component = {Home} title ="Home" />
			<Scene key ="about" component = {About} title = "About" hideNavBar={true}/>
			<Scene key ="agency" component = {Agency} title = "Concerned Agencies"/>
			<Scene key ="login" component = {Login} hideNavBar={true}  />
			<Scene key ="signup" component = {Signup} hideNavBar={true}/>
			<Scene key ="bye" component = {Bye} hideNavBar={true}/>
			<Scene key ="profile" component = {Profile} title='Profile'/>
			<Scene key ="test" component = {Test} title='Test'  hideNavBar={true}/>
			
			
		</Scene>
	</Router>
);
export default Routes
