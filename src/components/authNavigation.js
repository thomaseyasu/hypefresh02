import React from 'react';

import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//import IonicIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, Dimensions } from 'react-native';

import Login from '../screens/login';

import Register from '../screens/register';

import ForgetPassword from '../screens/forgetPassword';
//import { Dimensions } from 'react-native';
import Allstyle from '../screens/allstyle';


                //<Stack.Screen name="StartTwo" component={StartTwo} options={{headerShown: false}}/>
                //<Stack.Screen name="StartThree" component={StartThree} options={{headerShown: false}}/>

const fullScreenWidth = Dimensions.get('window').width;

const Stack = createStackNavigator();

export default function loginNavigation(props) {
    return (
        <NavigationContainer theme={DarkTheme}>
            <Stack.Navigator>

                {/*
                    <Stack.Screen name="StartOne" component={StartOne} options={{headerShown: false}}/>
                <Stack.Screen name="StartTwo" component={StartTwo} options={{headerShown: false}}/>
                <Stack.Screen name="StartThree" component={StartThree} options={{headerShown: false}}/>
                */}
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
                <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
