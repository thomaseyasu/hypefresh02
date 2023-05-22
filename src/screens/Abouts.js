import React, { Component } from 'react';
import { useState, useEffect } from 'react';

import {
	SafeAreaView,
	TouchableOpacity,
	TouchableHighlight,
	ScrollView,
	Text, Alert,
	ImageBackground,
	View, Platform, StatusBar,
	StyleSheet,
	FlatList,
	Linking
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import themeContext from './themeContext';
import { AuthContext } from '../AuthContext';
const Abouts = () =>
{

const { signOut } = React.useContext( AuthContext );

  return (
  <SafeAreaView>
      <StatusBar backgroundColor='#fff' barStyle="light-content" />
      <View><View style={styles.button, {alignItems: 'flex-end'}}>
                <TouchableOpacity
                    style={styles.signOut}
                    onPress={() => {signOut()}}
                >
                    <LinearGradient
                        colors={[ 'white', 'white' ]}
                        style={styles.signOut}
                    >
                        <Text style={[ styles.textSign, {
                            color: 'red'
                        } ]}>Sign Out</Text>
                    </LinearGradient>
                </TouchableOpacity>


            </View>

            </View>
      <View style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{textAlign: 'center'}}>Settings Screen</Text>

      </View>

  </SafeAreaView>

  );

}

const styles = StyleSheet.create( {

    signOut: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 5,
    },

} );

export default Abouts;
