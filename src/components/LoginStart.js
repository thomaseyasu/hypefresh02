import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from '../components/Navigation';
import AuthNavigation from '../components/authNavigation';
import Allstyle from '../screens/allstyle';
//import UserContext from './src/UserContext';

const LoginStart = () => {
  const isLoggedIn = true;
  return (
    //<UserContext>
    <NavigationContainer>

        {<AuthNavigation/>}

    </NavigationContainer>
    
    //</UserContext>
  );
};
export default LoginStart;