import 'react-native-gesture-handler';
import * as React from 'react';


import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-community/async-storage';

//import Navigation from './src/components/Navigation';
//import DrawerNavigation from './src/components/DrawerNavigation';
//import LoginNavigation from './src/components/loginNavigation';
import AuthNavigation from './src/components/authNavigation';
import AdminNavigation from './src/components/AdminNavigation';
import Home from './src/screens/Home';
import { AuthContext } from './src/AuthContext';
import { useEffect, useState, useRef } from 'react';
import {
    View,
    Text,
    Button,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    Dimensions,
    TextInput,
    Platform,
    FlatList,
    StyleSheet,
    ScrollView,
    StatusBar,
    SafeAreaView,
    Animated,
} from 'react-native';


import Ionicons from 'react-native-vector-icons/Ionicons';

import theme from './src/screens/theme';
import themeContext from './src/screens/themeContext';

import language from './src/screens/language';
import languageContext from './src/screens/languageContext';

import header from './src/screens/header';
import headerContext from './src/screens/headerContext';

import {EventRegister} from 'react-native-event-listeners';

/*
            lookingfor = lookingfor;
            ageFrom = ageFrom;
            ageUpto = ageUpto;
            City = City;
            incomeFrom = incomeFrom;
            incomeUpto = incomeUpto;
            heightFrom = heightFrom;
            heightUpto = heightUpto;
            weightFrom = weightFrom;
            weightUpto = weightUpto;
            Loccupation = Loccupation;
            Lreligion = Lreligion;
            LmedicalStatus = LmedicalStatus;
            Lkids = Lkids;
            Lcountry = Lcountry;
            AsyncStorage.multiSet(['lookingfor', 'value1'], ['ageFrom', 'value2'], ['ageUpto', 'value1'], ['City', 'value2'], ['incomeFrom', 'value1'], ['incomeUpto', 'value2'], ['heightFrom', 'value1'], ['heightUpto', 'value2'], ['weightFrom', 'value1'], ['weightUpto', 'value2'], ['Loccupation', 'value1'], ['Lreligion', 'value2'], ['LmedicalStatus', 'value1'], ['Lkids', 'value2'], ['Lcountry', 'value1']);
            AsyncStorage.multiGet(['lookingfor', 'value1'], ['ageFrom', 'value2'], ['ageUpto', 'value1'], ['City', 'value2'], ['incomeFrom', 'value1'], ['incomeUpto', 'value2'], ['heightFrom', 'value1'], ['heightUpto', 'value2'], ['weightFrom', 'value1'], ['weightUpto', 'value2'], ['Loccupation', 'value1'], ['Lreligion', 'value2'], ['LmedicalStatus', 'value1'], ['Lkids', 'value2'], ['Lcountry', 'value1'], (err, items) => {
              console.log({ items });
            });
            */

const App = () =>
{

  /* const [ isLoading, setIsLoading] = React.useState(true);
  const [ userToken, setUserToken] = React.useState(null); */
  const [mode, setMode] = useState(false);

    const [lmode, setLMode] = useState(false);
    const [Hmode, setHMode] = useState(false);

    const [userMode, setUserMode] = useState();

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = ( prevState, action ) =>
  {
    switch ( action.type )
    {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };

      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };

      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };

      case 'REGISTER':
        return {
          ...prevState,
          name: action.id,
          userToken: action.token,
          isLoading: false,
        };

    }
  };
  const [ loginState, dispatch ] = React.useReducer( loginReducer, initialLoginState )

  const authContext = React.useMemo( () => ( {
    signIn: async ( userName, password ) =>
    {
      /* setUserToken("fgkj");
      setIsLoading(false); */
      let userToken;
      userToken = null;
      if ( userName == "" )
      {
        alert( "Please Check User Name Fields is not empity!" );
      } else if ( password == "" )
      {
        alert( "Please Check password Fields is not empity!" );
      }
      else
      {
        try
        {
          userToken = userName;
          var value = await AsyncStorage.setItem( 'userToken', JSON.stringify( { userToken: userToken } ) );

        } catch ( error )
        {
          alert( error );
        }

      }
      dispatch( { type: 'LOGIN', id: password, token: userToken } );
    },
    signOut: async () =>
    {
      /* setUserToken(null);
      setIsLoading(false); */
      try
      {
        await AsyncStorage.removeItem( 'userToken' );
      } catch ( error )
      {
        alert( error );
      }
      dispatch( { type: 'LOGOUT' } );

    },
    signUp: async ( lookingfor, ageFrom, ageUpto, City, incomeFrom, incomeUpto, heightFrom, heightUpto, weightFrom, weightUpto, Loccupation, Lreligion, LmedicalStatus, Lkids, Lcountry, jstate, Fname, Lname, Phone, age, Gender, Occupation, Religion, MedicalStatus, KidsNum, Country, jsstate, city, MonthlyIncome, height, weight, Pass, CPass, PassHint, base64, fileName, base642, fileName2, imgUri, imgUri2 ) =>
    {
      /* setUserToken("fgkj");
      setIsLoading(false); */
      let userToken;
      userToken = null;


        fetch( 'http://businesslunch.mirtmirt.com/registerFermataUser.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify( {
            'username': lookingfor,
            'ageFrom': ageFrom,
            'ageUpto': ageUpto,
            'City': City,
            'incomeFrom': incomeFrom,

          } )
        } ).then( ( response ) => response.json() )
          .then( ( responseJson ) =>
          {

            userToken = Phone;

            AsyncStorage.setItem( 'userToken', JSON.stringify( { userToken: userToken } ) );

            dispatch( { type: 'REGISTER', id: Pass, token: userToken } );
            alert(responseJson);
          } )
          .catch( ( error ) =>
          {
            //console.error( error );
            alert( "No Internet / User name or Phone number is already Existed!" )
          } );

        //alert("user Name : "+userName +" : Date of Birth : "+DoB +": userToken : "+userToken);





    },


  signUpA: async ( name, Email, Phone, Age, City, SubCity, password, cpassword, Type ) =>
    {
      /* setUserToken("fgkj");
      setIsLoading(false); */
      let userToken;
      userToken = null;
      if ( name == "" )
      {
        alert( "Please Check username Fields is not empity!" )
      } else if ( Email == "" )
      {
        alert( "Please Check Email Fields is not empity!" );
      }else if ( City == "" )
      {
        alert( "Please Check Address City Fields is not empity!" );
      } else if ( SubCity == "" )
      {
        alert( "Please Check Address Sub-City or Wereda Fields is not empity!" );
      }  else if ( Phone == "" )
      {
        alert( "Please Check phone number Fields is not empity!" );
      } else if ( Age == "" )
      {
        alert( "Please Check Age Fields is not empity!" );
      } else if ( Email == "" )
      {
        alert( "Please Check email Fields is not empity!" );
      } else if ( password == "" )
      {
        alert( "Please Check password Fields is not empity!" );
      } else if ( cpassword == "" )
      {
        alert( "Please Check confirm password Fields is not empity!" );
      } else if ( cpassword !== password  )
      {
        alert( "Please Check password and confirm password is not match!" );
      } else
      {

        fetch( 'http://businesslunch.mirtmirt.com/AddUsers.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify( {
            'name': name,
            'Email': Email,
            //'DoB': DoB,
            'Phone': Phone,
            //'Gender': Gender,
            'Age': Age,
            //'MaritalStatus': MaritalStatus,
            'City': City,
            'SubCity': SubCity,
            'password': password,
            'Type': Type,

          } )
        } ).then( ( response ) => response.json() )
          .then( ( responseJson ) =>
          {

            //userToken = name;
            //AsyncStorage.setItem( 'userToken', JSON.stringify( { userToken: userToken } ) );
            //dispatch( { type: 'REGISTER', id: password, token: userToken } );
            alert(responseJson);
          } )
          .catch( ( error ) =>
          {
            //console.error( error );
            alert( "No Internet / User already Existed!" )
          } );

        //alert("user Name : "+userName +" : Date of Birth : "+DoB +": userToken : "+userToken);

      }



    },
  } ), [] );

  useEffect( () =>
  {
    setTimeout( async () =>
    {
      //setIsLoading(false);
      let userToken, userToken2;
      userToken = null;
      userToken2 = null;
      try
      {
        userToken = await AsyncStorage.getItem( 'userToken' );
        var userToken1 = JSON.parse( userToken );
        userToken2 = userToken1.userToken;
      } catch ( error )
      {
        console.log( error );
      }
      dispatch( { type: 'RETRIEVE_TOKEN', token: userToken2 } );
    }, 1000 );
  }, [] );

  useEffect( () =>
  {
  let eeventListener = EventRegister.addEventListener("ChangeLanguage", (data) => {
            setLMode(data);
            //alert(data);
        });
        return () => {

        EventRegister.removeEventListener(eeventListener);};





  } );
  useEffect( () =>
  {
  let eeeeventListener = EventRegister.addEventListener("ChangeHeader", (data) => {
            setHMode(data);
            //alert(data);
        });
        return () => {

        EventRegister.removeEventListener(eeeeventListener);};





  } );
  useEffect( () =>
  {


        let eeeventListener = EventRegister.addEventListener("ChangeTheme", (data) => {
            setMode(data);
            //alert(data);
        });
        return () => {

        EventRegister.removeEventListener(eeeventListener);};



  } );
  useEffect( () =>
  {


        let eventListener = EventRegister.addEventListener("UserDataToken", (data) => {
            setMode(data);
            //alert(data);
        });
        return () => {

        EventRegister.removeEventListener(eventListener);};



  } );

const scrollY = new Animated.Value(0)
const diffClamp = Animated.diffClamp(scrollY,0,450)
const translateY = diffClamp.interpolate({
    inputRange:[0,450],
    outputRange:[0,-450]
})


  return (
  <themeContext.Provider value={mode === true ? theme.dark : theme.light}>
  <languageContext.Provider value={lmode === true ? language.amharic : language.english}>
  <headerContext.Provider value={Hmode === true ? header.show : header.hide}>
    <AuthContext.Provider value={authContext}>
      {loginState.userToken === null ?  <AuthNavigation />  : (

            <View
                style={styles.nav}>
                <AdminNavigation />
            </View>

      )}
    </AuthContext.Provider>
    </headerContext.Provider>
    </languageContext.Provider>
    </themeContext.Provider>

  );

}


const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    nav: {
        flex: 1,
        top: 0,

    },
    profilecontainer: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',

    },
    profiletext: {
        flexDirection: 'row',
        //textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',



    },
    ptxt: {
        color: '#000',
        textAlign: 'center',
        fontWeight: '400',
        fontSize: 24,
        top: -50,
        paddingLeft: 10,
    },
    picon: {
        color: 'red',
        textAlign: 'center',
        fontWeight: '400',
        fontSize: 24,
        top: -50,
        paddingLeft: 10,
    },
    });
export default App;
