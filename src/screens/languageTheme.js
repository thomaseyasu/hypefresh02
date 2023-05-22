import React, { Component, useState, useEffect } from 'react';
import
{
    View,
    Text,
    Button,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    FlatList,
    Alert
} from 'react-native';
//import Select,{components} from 'react-select';
import { AuthContext } from '../AuthContext';


import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import DatePicker from 'react-native-date-picker';
import Select from 'react-native-select-dropdown';
import { DataTable } from 'react-native-paper';


import AsyncStorage from '@react-native-community/async-storage';
import Allstyle from './allstyle';

const language = ( props ) =>
{
useEffect(() => {

    onSelect();
    //getPrivateItems();

}, [])

const onSelect = async() => {
try
            {
            let userToken = await AsyncStorage.getItem( 'userToken' );
            var userToken1 = JSON.parse( userToken );
            userToken2 = userToken1.userToken;
            alert(JSON.stringify(datas.path));
            }
            catch ( error )
        {
          alert( error );
        }


}

return(

)
}
export default language;