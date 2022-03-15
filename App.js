/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   View,
   Text,
   StatusBar,
 } from 'react-native';
 import { connect } from 'react-redux';
 import AppNavigator from './src/navigators/appNavigator';
 import { setNavigator } from './src/navigators/navigationRef';
 import { Spinner } from '@components';
 
 const App = ({ mainApp }) => {
   return (
     <>
       <StatusBar barStyle="dark-content" />
       <SafeAreaView style={styles.container}>
           {global.HermesInternal == null ? null : (
             <View style={styles.engine}>
               <Text style={styles.footer}>Engine: Hermes</Text>
             </View>
           )}
             <View style={styles.spinnerContainer}>
               {mainApp.loadSpinner && <Spinner />}
             </View>
             <AppNavigator ref={navigator => { setNavigator(navigator) }} />
        </SafeAreaView>
     </>
   );
 };
 
 const mapStateToProps = ({ mainApp }) => ({ mainApp });
 
 export default connect(mapStateToProps, null)(App);
 
 const styles = StyleSheet.create({
   container: { 
     flex: 1, 
     zIndex: 0 
   },
   engine: {
     position: 'absolute',
     right: 0,
   },
   footer: {
     color: '#aaa',
     fontSize: 12,
     fontWeight: '600',
     padding: 4,
     paddingRight: 12,
     textAlign: 'right',
   },
   spinnerContainer: {
     position: 'absolute',
     zIndex: 100,
     left: 0,
     right: 0,
     top: '50%'
   }
 });
 
 