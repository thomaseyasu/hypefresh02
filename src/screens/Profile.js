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

const Profile = () =>
{


  return (
  <SafeAreaView>
      <StatusBar backgroundColor='#fff' barStyle="light-content" />
      <View style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{textAlign: 'center'}}>Profiles Screen</Text>

      </View>

  </SafeAreaView>

  );

}
export default Profile;
