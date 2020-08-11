import React, { Component } from 'react';
import { AppRegistry, View, YellowBox } from 'react-native';
import Routes from './src/components/routes/Routes.js';
// import { Provider as PaperProvider } from 'react-native-paper';

class reporting extends Component {
   render() {
      return (

      <Routes />
    
      );
   }
}
export default reporting
AppRegistry.registerComponent('reporting', () => reporting)