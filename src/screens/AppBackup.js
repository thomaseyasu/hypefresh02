import 'react-native-gesture-handler';
import * as React from 'react';


//import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-community/async-storage';

//import Navigation from './src/components/Navigation';
//import DrawerNavigation from './src/components/DrawerNavigation';
//import LoginNavigation from './src/components/loginNavigation';
import AuthNavigation from './src/components/authNavigation';
import AdminNavigation from './src/components/AdminNavigation';
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
import * as Animatable from 'react-native-animatable';
import {EventRegister} from 'react-native-event-listeners';
import Home from './src/screens/Home';

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
            'lookingfor': lookingfor,
            'ageFrom': ageFrom,
            'ageUpto': ageUpto,
            'City': City,
            'incomeFrom': incomeFrom,
            'incomeUpto': incomeUpto,
            'heightFrom': heightFrom,
            'heightUpto': heightUpto,
            'weightFrom': weightFrom,
            'weightUpto': weightUpto,
            'Loccupation': Loccupation,
            'Lreligion': Lreligion,
            'LmedicalStatus': LmedicalStatus,
            'Lkids': Lkids,
            'Lcountry': Lcountry,
            'jstate': jstate,
            'Fname': Fname,
            'Lname': Lname,
            'Phone': Phone,
            'age': age,
            'Gender': Gender,
            'Occupation': Occupation,
            'Religion': Religion,
            'MedicalStatus': MedicalStatus,
            'KidsNum': KidsNum,
            'Country': Country,
            'jsstate': jsstate,
            'city': city,
            'MonthlyIncome': MonthlyIncome,
            'height': height,
            'weight': weight,
            'Pass': Pass,
            'CPass': CPass,
            'PassHint': PassHint,
            'base64': base64,
            'fileName': fileName,
            'base642': base642,
            'fileName2': fileName2,
            'imgUri': imgUri,
            'imgUri2': imgUri2,

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


const [ Items, setItems ] = useState( [
        { id: 1, Ename: 'ቤት', name: 'House', key: '1', icon: 'automobile', homeContentIcon: require( './src/assets/Images/house.png' ) },
        { id: 2, Ename: 'መኪና', name: 'Car', key: '2', icon: 'home', homeContentIcon: require( './src/assets/Images/blueCar.png' ) },
        { id: 3, Ename: 'ሱቆች', name: 'Shopping', key: '3', icon: 'desktop', homeContentIcon: require( './src/assets/Images/shops.png' ) },
        { id: 4, Ename: 'ኤሌክሮኒክስ', name: 'Electronics', key: '4', icon: 'laptop', homeContentIcon: require( './src/assets/Images/electronics.jpg' ) },
        { id: 5, Ename: 'ፈርኒቸር', name: 'Furniture', key: '5', icon: 'automobile', homeContentIcon: require( './src/assets/Images/furniture.jpg' ) },
        { id: 6, Ename: 'ኮስሞቲክስ', name: 'Cosmetics Products', key: '6', icon: 'home', homeContentIcon: require( './src/assets/Images/beauty.jpg' ) },
        { id: 7, Ename: 'የወጥ ቤት እቃዎች', name: 'Kitchen Items', key: '7', icon: 'desktop', homeContentIcon: require( './src/assets/Images/kitchincab.png' ) },
        { id: 8, Ename: 'አልባሳት', name: 'Clothes', key: '9', icon: 'automobile', homeContentIcon: require( './src/assets/Images/fashions.jpg' ) },
        { id: 9, Ename: 'አስቤዛ እና የምግብ ግብአቶች', name: 'Asbeza and Foods', key: '10', icon: 'home', homeContentIcon: require( './src/assets/Images/agroFood.png' ) },
        { id: 10, Ename: 'ካፌ እና ሬስቶራንት', name: 'Cafe and Restorant', key: '11', icon: 'home', homeContentIcon: require( './src/assets/Images/caferestaurant.png' ) },
        { id: 11, Ename: 'ገስት ሀውስ', name: 'Gust House', key: '12', icon: 'desktop', homeContentIcon: require( './src/assets/Images/gust.png' ) },
        { id: 12, Ename: 'ሪል እስቴት', name: 'Real State', key: '13', icon: 'desktop', homeContentIcon: require( './src/assets/Images/realState.jpg' ) },
        { id: 13, Ename: 'ሆቴል እና ሬስቶራንት', name: 'Hotel', key: '14', icon: 'desktop', homeContentIcon: require( './src/assets/Images/HotelandRestaurant.jpg' ) },
        { id: 14, Ename: 'የቤት እንስሳት', name: 'Domestic Animals', key: '15', icon: 'desktop', homeContentIcon: require( './src/assets/Images/pits.png' ) },
        { id: 15, Ename: 'ኤክስፓት', name: 'Expat', key: '16', icon: 'desktop', homeContentIcon: require( './src/assets/Images/export.jpg' ) },
        { id: 16, Ename: 'ሌሎች', name: 'Others', key: '17', icon: 'laptop', homeContentIcon: require( './src/assets/Images/others.jpg' ) },
        { id: 17, Ename: 'ቤት', name: 'House', key: '1', icon: 'automobile', homeContentIcon: require( './src/assets/Images/house.png' ) },
        { id: 18, Ename: 'መኪና', name: 'Car', key: '2', icon: 'home', homeContentIcon: require( './src/assets/Images/blueCar.png' ) },
        { id: 19, Ename: 'ሱቆች', name: 'Shopping', key: '3', icon: 'desktop', homeContentIcon: require( './src/assets/Images/shops.png' ) },
        { id: 20, Ename: 'ኤሌክሮኒክስ', name: 'Electronics', key: '4', icon: 'laptop', homeContentIcon: require( './src/assets/Images/electronics.jpg' ) },
        { id: 21, Ename: 'ፈርኒቸር', name: 'Furniture', key: '5', icon: 'automobile', homeContentIcon: require( './src/assets/Images/furniture.jpg' ) },
        { id: 22, Ename: 'ኮስሞቲክስ', name: 'Cosmetics Products', key: '6', icon: 'home', homeContentIcon: require( './src/assets/Images/beauty.jpg' ) },
        { id: 23, Ename: 'የወጥ ቤት እቃዎች', name: 'Kitchen Items', key: '7', icon: 'desktop', homeContentIcon: require( './src/assets/Images/kitchincab.png' ) },
        { id: 24, Ename: 'አልባሳት', name: 'Clothes', key: '9', icon: 'automobile', homeContentIcon: require( './src/assets/Images/fashions.jpg' ) },
        { id: 25, Ename: 'አስቤዛ እና የምግብ ግብአቶች', name: 'Asbeza and Foods', key: '10', icon: 'home', homeContentIcon: require( './src/assets/Images/agroFood.png' ) },
        { id: 26, Ename: 'ካፌ እና ሬስቶራንት', name: 'Cafe and Restorant', key: '11', icon: 'home', homeContentIcon: require( './src/assets/Images/caferestaurant.png' ) },
        { id: 27, Ename: 'ገስት ሀውስ', name: 'Gust House', key: '12', icon: 'desktop', homeContentIcon: require( './src/assets/Images/gust.png' ) },
        { id: 28, Ename: 'ሪል እስቴት', name: 'Real State', key: '13', icon: 'desktop', homeContentIcon: require( './src/assets/Images/realState.jpg' ) },
        { id: 29, Ename: 'ሆቴል እና ሬስቶራንት', name: 'Hotel', key: '14', icon: 'desktop', homeContentIcon: require( './src/assets/Images/HotelandRestaurant.jpg' ) },
        { id: 30, Ename: 'የቤት እንስሳት', name: 'Domestic Animals', key: '15', icon: 'desktop', homeContentIcon: require( './src/assets/Images/pits.png' ) },
        { id: 31, Ename: 'ኤክስፓት', name: 'Expat', key: '16', icon: 'desktop', homeContentIcon: require( './src/assets/Images/export.jpg' ) },
        { id: 32, Ename: 'ሌሎች', name: 'Others', key: '17', icon: 'laptop', homeContentIcon: require( './src/assets/Images/others.jpg' ) },
    ] );
const renderItem = ({item, index}) => {
    //const text = index.name;
        return(

                                <Animatable.View
                                    animation="fadeInDownBig"
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '50%',
                                    }}>
                                    <View style={{
                                        width: '100%',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        top: 0, left: 0, padding: 5,
                                        backgroundColor: '#fff',
                                        borderWidth: 2,
                                        borderRadius: 15,
                                    }}>
                                        <Image style={{ width: 40, height: 30, resizeMode: 'cover', shadowColor: '#000', shadowOpacity: 1, shadowOffset: { width: 0, height: 0, }, shadowRadius: 20, alignItems: 'center', justifyContent: 'center', }} source={item.homeContentIcon} />
                                        {/*
                                        <FontAwesome
                                            name={item.icon}
                                            color="#1ed6cd"
                                            size={20}
                                            style={{ top: 10 }}
                                        />
                                    */}
                                    </View>
                                    <View style={{ width: '40%', alignItems: 'center', flex: 1, top: 0, left: 0 }}>
                                        <Text style={styles.flatItemText}>{item.name}</Text>
                                    </View>

                                </Animatable.View>
        )
    }

const scrollY = new Animated.Value(0)
const diffClamp = Animated.diffClamp(scrollY,0,200)
const translateY = diffClamp.interpolate({
    inputRange:[0,200],
    outputRange:[0,-200]
})
  return (
  <themeContext.Provider value={mode === true ? theme.dark : theme.light}>
  <languageContext.Provider value={lmode === true ? language.amharic : language.english}>
    <AuthContext.Provider value={authContext}>
      {loginState.userToken === null ?  <AuthNavigation />  : (
            <SafeAreaView style={styles.container}>
            <Animatable.View
                style={{
                   translateY:translateY,
                   //height: '30%',
                    }}>
            <View style={styles.profilecontainer}>
                <Image style={{ width: '100%', height: 150, shadowColor: '#000', shadowOpacity: 1, shadowOffset: { width: 0, height: 0, }, shadowRadius: 20, }}
                        source={require( './src/assets/Images/hfbackground.jpg' )} />
                    <Image style={{ width: '25%', height: 100, top: -50, borderRadius: 50, resizeMode: 'cover', shadowColor: '#000', shadowOpacity: 1, shadowOffset: { width: 0, height: 0, }, shadowRadius: 20, resizeMode: 'contain' }}
                        source={require( './src/assets/Images/hypefresh.jpg' )} />

            <View style={styles.profiletext}>
                <Text style={styles.ptxt}>
                    admin
                </Text>
                <Ionicons

                        name="checkmark-circle"
                        style={styles.picon}

                    />
            </View>
            </View>
            </Animatable.View>

            <FlatList

            //onScroll={onScrollEvent({ y })}
            numColumns={2}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            //getItemLayout = {getItemLayout}
            //ref={(ref) => setrefFlatList(ref)}
            data={Items}
            renderItem={renderItem}
            onScroll={(e)=>{
                    scrollY.setValue(e.nativeEvent.contentOffset.y)
                }}
                style={{flex: 1, position: 'relative'}}

                    />
            </SafeAreaView>

      )}
    </AuthContext.Provider>
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
    headerItem: {
        width: '100%',
        //height: '10%',
        //backgroundColor: '#fff',
        alignItems: 'center',
        top: 3,
        color: '#000',
        borderRadius: 30
    },
    headerItems: {
        padding: 10,
        //backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
        borderRadius: 20,
      },

  flatItemText: {
        fontSize: 10,
        width: '100%',
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
        fontWeight: '400',
        top: 0,
        fontFamily: 'verdana',
        color: '#000',


    },
    });
export default App;
