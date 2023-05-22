import React, { Component, useState, useEffect, useContext } from 'react';
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
    Alert,
    Linking
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
import themeContext from './themeContext';

import languageContext from './languageContext';




/*

                    <Text style={styles.text_footer}>User Name</Text>
                    <View style={styles.action}>

                        <Select
                        data={operation}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            if (selectedItem == 'የሚሸጥ የሚከራይ'){
                                props.navigation.navigate('salesRegister');
                            }else if(selectedItem == 'የስራ ማስታወቅያ'){
                                props.navigation.navigate('jobsRegister');
                            }else{
                                console.log('invalid selection')
                            }

                        }}
                        rowTextFromSelection={(item, index) => {
                            return item
                        }}

    onChange={handleChange}
    isMulti
    name="colors"
    options={options}
    className="basic-multi-select"
    classNamePrefix="select"
    closeMenuOnSelect={false}
    hideSelectedOptions={false}
    components={{ ValueContainer }}
    value={value}
      />
        </View>
    */





const manageUsers = ( props ) =>
{
const operation = ["የሚሸጥ የሚከራይ", "የስራ ማስታወቅያ",]
 const operation1 = ["Addis Ababa", "Amhara Region", "Afar Region", "Benshangul Region", "Debub Region", "Dire Dawa Region", "Gambela Region", "Hareri Region", "Oromia Region", "Somalia Region", "SNNP Region", "Tigrai Region", "Woliyta Region", ""]

const [userItems, setUserItems] = useState([]);
const [users, setUsers] = useState([]);
const [agents, setAgents] = useState([]);
const [admins, setAdmins] = useState([]);
const [allData, setAllData] = useState([]);
const [userDetail, setUserDetail] = useState([]);
const [userJobItems, setUserJobItems] = useState([]);
const [isLoading, setisLoading] = useState(false);
const [choice, setChoice] = useState('users');

const theme = useContext(themeContext);
const language = useContext(languageContext);



useEffect(() => {

    //getPrivateJobs();
    //getPrivateItems();
    getUserData();
    getAdminsData();
    getAgentData();


}, [])


const getUserData = async() => {
            let userToken, userToken2;
            userToken = null;
            userToken2 = null;

            setisLoading(true);
            try
            {
            userToken = await AsyncStorage.getItem( 'userToken' );
            var userToken1 = JSON.parse( userToken );
            userToken2 = userToken1.userToken;
            return fetch( 'http://businesslunch.mirtmirt.com/getAllUsers.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( {
                    'userToken2': userToken2,
                } )
            } ).then( ( response ) => response.json() )

                .then( ( responseJson ) =>
                {


                        //signIn( userName, password );
                        //alert("Your Item is Registered Successfully");
                        //props.navigation.navigate('PostNew');
                        setisLoading(false);
                        setUsers(responseJson);
                        //setAllData(responseJson);

                    /* setData( {
                        ...data,
                        username: response[ 0 ].name
                    } ); */
                } )

                .catch( ( error ) =>
                {
                    //console.error( error );
                    alert('You have no Internet connection!');
                } );
        } catch ( error )
        {
            console.log( error );
            alert( "Network Error" )
        }

}
const getAgentData = async() => {
            let userToken, userToken2;
            userToken = null;
            userToken2 = null;

            setisLoading(true);
            try
            {
            userToken = await AsyncStorage.getItem( 'userToken' );
            var userToken1 = JSON.parse( userToken );
            userToken2 = userToken1.userToken;
            return fetch( 'http://businesslunch.mirtmirt.com/getAgents.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( {
                    'userToken2': userToken2,
                } )
            } ).then( ( response ) => response.json() )

                .then( ( responseJson ) =>
                {


                        //signIn( userName, password );
                        //alert("Your Item is Registered Successfully");
                        //props.navigation.navigate('PostNew');
                        setisLoading(false);
                        setAgents(responseJson);
                        //setAllData(responseJson);

                    /* setData( {
                        ...data,
                        username: response[ 0 ].name
                    } ); */
                } )

                .catch( ( error ) =>
                {
                    //console.error( error );
                    alert('You have no Internet connection!');
                } );
        } catch ( error )
        {
            console.log( error );
            alert( "Network Error" )
        }

}
const getAdminsData = async() => {
            let userToken, userToken2;
            userToken = null;
            userToken2 = null;

            setisLoading(true);
            try
            {
            userToken = await AsyncStorage.getItem( 'userToken' );
            var userToken1 = JSON.parse( userToken );
            userToken2 = userToken1.userToken;
            return fetch( 'http://businesslunch.mirtmirt.com/getAllAdmins.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( {
                    'userToken2': userToken2,
                } )
            } ).then( ( response ) => response.json() )

                .then( ( responseJson ) =>
                {


                        //signIn( userName, password );
                        //alert("Your Item is Registered Successfully");
                        //props.navigation.navigate('PostNew');
                        setisLoading(false);
                        setAdmins(responseJson);
                        //setAllData(responseJson);

                    /* setData( {
                        ...data,
                        username: response[ 0 ].name
                    } ); */
                } )

                .catch( ( error ) =>
                {
                    //console.error( error );
                    alert('You have no Internet connection!');
                } );
        } catch ( error )
        {
            console.log( error );
            alert( "Network Error" )
        }

}
const deleteItem = async(item, index) => {
            let userToken, userToken2;
            userToken = null;
            userToken2 = null;

            setisLoading(true);
            try
            {
            userToken = await AsyncStorage.getItem( 'userToken' );
            var userToken1 = JSON.parse( userToken );
            userToken2 = userToken1.userToken;
            return fetch( 'http://businesslunch.mirtmirt.com/deleteUsers.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( {
                    'userToken2': userToken2,
                    'name': item.name,
                    'Email': item.email,
                    //'DoB': DoB,
                    'Phone': item.phone,
                    //'Gender': Gender,
                    'Age': item.age,
                    //'MaritalStatus': MaritalStatus,
                    'City': item.city,
                    'SubCity': item.subcity,
                } )
            } ).then( ( response ) => response.json() )

                .then( ( responseJson ) =>
                {


                        //signIn( userName, password );
                        //alert("Your Item is Registered Successfully");
                        //props.navigation.navigate('PostNew');
                        setisLoading(false);
                        alert(responseJson);

                    /* setData( {
                        ...data,
                        username: response[ 0 ].name
                    } ); */
                } )

                .catch( ( error ) =>
                {
                    //console.error( error );
                    alert('You have no Internet connection!');
                } );
        } catch ( error )
        {
            console.log( error );
            alert( "Network Error" )
        }

}
const deleteAdminItem = async(item, index) => {
            let userToken, userToken2;
            userToken = null;
            userToken2 = null;

            setisLoading(true);
            try
            {
            userToken = await AsyncStorage.getItem( 'userToken' );
            var userToken1 = JSON.parse( userToken );
            userToken2 = userToken1.userToken;
            return fetch( 'http://businesslunch.mirtmirt.com/deleteAdmin.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( {
                    'userToken2': userToken2,
                    'name': item.name,
                    'Email': item.email,
                    //'DoB': DoB,
                    'Phone': item.phone,
                    //'Gender': Gender,
                    'Age': item.age,
                    //'MaritalStatus': MaritalStatus,
                    'City': item.city,
                    'SubCity': item.subcity,
                } )
            } ).then( ( response ) => response.json() )

                .then( ( responseJson ) =>
                {


                        //signIn( userName, password );
                        //alert("Your Item is Registered Successfully");
                        //props.navigation.navigate('PostNew');
                        setisLoading(false);
                        alert(responseJson);

                    /* setData( {
                        ...data,
                        username: response[ 0 ].name
                    } ); */
                } )

                .catch( ( error ) =>
                {
                    //console.error( error );
                    alert('You have no Internet connection!');
                } );
        } catch ( error )
        {
            console.log( error );
            alert( "Network Error" )
        }

}
const renderUsersData = ({item, index}) => {
return(
    <View style={styles.productContainer}>

                <View style={styles.jobsProduct} >
          <View style={{
            width: '100%',
            height: '100%',
          }}>
            <View style={{ width: '100%', alignItems: 'center', flex: 1, top: 0, left: 0 }}>
              <Image style={{ width: '100%', height: 120, resizeMode: 'cover', shadowColor: '#000', shadowOpacity: 1, shadowOffset: { width: 0, height: 0, }, shadowRadius: 20, resizeMode: 'contain' }}
                source={require( '../assets/Images/profile.png' )}

              />
            </View>
            <View style={{ width: '100%', height: '100%', alignItems: 'center', flex: 1, top: 10, left: 0 }}>

                      <Text style={styles.flatItemText}>{item.name}</Text>
                      <Text style={styles.flatItemText}>{item.email}</Text>
                      <Text style={styles.flatItemText}>{item.phone}</Text>
                      <Text style={styles.flatItemText}>{item.balance}</Text>
                      <Text style={styles.flatItemText}>{item.age}</Text>
                      <Text style={styles.flatItemText}>{item.city}   :  {item.subcity}</Text>







            </View>


            <View style={{flexDirection: "row", justifyContent: "space-evenly", padding: 10,}}>
                <View style={{ width: '50%', alignItems: 'center', flex: 1, top: 0, left: 0 }}>
                          <TouchableOpacity style={styles.headerItems} onPress={() => {Platform.OS === 'android' ? Linking.openURL("tel:+251"+item.phone) : Linking.openURL("telprompt:+251"+item.phone)}}>

                                        <Feather
                                        name="phone-call"
                                        color={Allstyle.container.backgroundColor}
                                        size={30}
                                        style={{ top: 10 }}
                                    />

                                    </TouchableOpacity>



                        </View>

                    <View style={{ width: '50%', alignItems: 'center', flex: 1, top: 0, left: 0 }}>
                      <TouchableOpacity style={styles.headerItems} onPress={() => {props.navigation.navigate('Edit Item Form Three', {id: item.id, name: item.name, email: item.email, phone: item.phone, balance: item.balance, age: item.age, city: item.city, subcity: item.subcity, profile: item.profile, status: item.status})}}>

                                    <Feather
                                    name="edit"
                                    color={Allstyle.container.backgroundColor}
                                    size={30}
                                    style={{ top: 10 }}
                                />

                                </TouchableOpacity>



                    </View>
                    <View style={{ width: '50%', alignItems: 'center', flex: 1, top: 0, left: 0 }}>
                      <TouchableOpacity style={styles.headerItems} onPress={() => Alert.alert(
                'Delete !',
                'You want to delete ' + item.name + ' ?',
                [
                  {
                    text: 'Cancel',
                    onPress: () => alert( 'You have Canceled!' ),
                    style: 'No',
                  },
                  { text: 'Yes', onPress: ( val ) => deleteItem( item ) },
                ],
                { cancelable: false },
              )} >

                            <Feather
                            name="trash-2"
                            color={Allstyle.container.backgroundColor}
                            size={30}
                            style={{ top: 10 }}
                        />

                        </TouchableOpacity>


                    </View>
                    <View style={{ width: '50%', alignItems: 'center', flex: 1, top: 0, left: 0 }}>
                      <TouchableOpacity style={styles.headerItems} onPress={() => {props.navigation.navigate('Edit Item Form Five', {id: item.id, name: item.name, email: item.email, phone: item.phone, balance: item.balance, age: item.age, city: item.city, subcity: item.subcity, profile: item.profile, status: item.status})}}>

                                    <Feather
                                    name="message-square"
                                    color={Allstyle.container.backgroundColor}
                                    size={30}
                                    style={{ top: 10 }}
                                />

                                </TouchableOpacity>



                    </View>
            {/*
            <View style={{ width: '50%', alignItems: 'center', flex: 1, top: 0, left: 0 }}>
                      <TouchableOpacity style={styles.headerItems} onPress={() => {props.navigation.navigate('Items Detail Six', {id: item.id, name: item.name, email: item.email, phone: item.phone, balance: item.balance, age: item.age, city: item.city, subcity: item.subcity, profile: item.profile, status: item.status})}}>

                                    <Feather
                                    name="info"
                                    color={Allstyle.container.backgroundColor}
                                    size={30}
                                    style={{ top: 10 }}
                                />

                                </TouchableOpacity>

                    </View>

            */}
            </View>
          </View>
        </View>
      </View>)


}
const renderAgentsData = ({item, index}) => {
return(
    <View style={styles.productContainer}>

                <View style={styles.jobsProduct} >
          <View style={{
            width: '100%',
            height: '100%',
          }}>
            <View style={{ width: '100%', alignItems: 'center', flex: 1, top: 0, left: 0 }}>
              <Image style={{ width: '100%', height: 120, resizeMode: 'cover', shadowColor: '#000', shadowOpacity: 1, shadowOffset: { width: 0, height: 0, }, shadowRadius: 20, resizeMode: 'contain' }}
                source={require( '../assets/Images/profile.png' )}

              />
            </View>
            <View style={{ width: '100%', height: '100%', alignItems: 'center', flex: 1, top: 10, left: 0 }}>

                      <Text style={styles.flatItemText}>{item.name}</Text>
                      <Text style={styles.flatItemText}>{item.email}</Text>
                      <Text style={styles.flatItemText}>{item.phone}</Text>
                      <Text style={styles.flatItemText}>{item.balance}</Text>
                      <Text style={styles.flatItemText}>{item.age}</Text>
                      <Text style={styles.flatItemText}>{item.city}   :  {item.subcity}</Text>







            </View>


            <View style={{flexDirection: "row", justifyContent: "space-evenly", padding: 10,}}>
                <View style={{ width: '50%', alignItems: 'center', flex: 1, top: 0, left: 0 }}>
                          <TouchableOpacity style={styles.headerItems} onPress={() => {Platform.OS === 'android' ? Linking.openURL("tel:+251"+item.phone) : Linking.openURL("telprompt:+251"+item.phone)}}>

                                        <Feather
                                        name="phone-call"
                                        color={Allstyle.container.backgroundColor}
                                        size={30}
                                        style={{ top: 10 }}
                                    />

                                    </TouchableOpacity>



                        </View>

                    <View style={{ width: '50%', alignItems: 'center', flex: 1, top: 0, left: 0 }}>
                      <TouchableOpacity style={styles.headerItems} onPress={() => {props.navigation.navigate('Edit Item Form Three', {id: item.id, name: item.name, email: item.email, phone: item.phone, balance: item.balance, age: item.age, city: item.city, subcity: item.subcity, profile: item.profile, status: item.status})}}>

                                    <Feather
                                    name="edit"
                                    color={Allstyle.container.backgroundColor}
                                    size={30}
                                    style={{ top: 10 }}
                                />

                                </TouchableOpacity>



                    </View>
                    <View style={{ width: '50%', alignItems: 'center', flex: 1, top: 0, left: 0 }}>
                      <TouchableOpacity style={styles.headerItems} onPress={() => Alert.alert(
                'Delete !',
                'You want to delete ' + item.name + ' ?',
                [
                  {
                    text: 'Cancel',
                    onPress: () => alert( 'You have Canceled!' ),
                    style: 'No',
                  },
                  { text: 'Yes', onPress: ( val ) => deleteItem( item ) },
                ],
                { cancelable: false },
              )} >

                            <Feather
                            name="trash-2"
                            color={Allstyle.container.backgroundColor}
                            size={30}
                            style={{ top: 10 }}
                        />

                        </TouchableOpacity>


                    </View>
                    <View style={{ width: '50%', alignItems: 'center', flex: 1, top: 0, left: 0 }}>
                      <TouchableOpacity style={styles.headerItems} onPress={() => {props.navigation.navigate('Edit Item Form Five', {id: item.id, name: item.name, email: item.email, phone: item.phone, balance: item.balance, age: item.age, city: item.city, subcity: item.subcity, profile: item.profile, status: item.status})}}>

                                    <Feather
                                    name="message-square"
                                    color={Allstyle.container.backgroundColor}
                                    size={30}
                                    style={{ top: 10 }}
                                />

                                </TouchableOpacity>



                    </View>
            {/*
            <View style={{ width: '50%', alignItems: 'center', flex: 1, top: 0, left: 0 }}>
                      <TouchableOpacity style={styles.headerItems} onPress={() => {props.navigation.navigate('Items Detail Six', {id: item.id, name: item.name, email: item.email, phone: item.phone, balance: item.balance, age: item.age, city: item.city, subcity: item.subcity, profile: item.profile, status: item.status})}}>

                                    <Feather
                                    name="info"
                                    color={Allstyle.container.backgroundColor}
                                    size={30}
                                    style={{ top: 10 }}
                                />

                                </TouchableOpacity>

                    </View>

            */}
            </View>
          </View>
        </View>
      </View>)


}


const renderAdminsData = ({item, index}) => {
return(
    <View style={styles.productContainer}>

         <View style={styles.jobsProduct} >
          <View style={{
            width: '100%',
            height: '100%',
          }}>
            <View style={{ width: '100%', alignItems: 'center', flex: 1, top: 0, left: 0 }}>
              <Image style={{ width: '100%', height: 120, resizeMode: 'cover', shadowColor: '#000', shadowOpacity: 1, shadowOffset: { width: 0, height: 0, }, shadowRadius: 20, resizeMode: 'contain' }}
                source={require( '../assets/Images/profile.png' )}

              />
            </View>
            <View style={{ width: '100%', height: '100%', alignItems: 'center', flex: 1, top: 10, left: 0 }}>

                      <Text style={styles.flatItemText}>{item.name}</Text>
                      <Text style={styles.flatItemText}>{item.email}</Text>
                      <Text style={styles.flatItemText}>{item.phone}</Text>
                      <Text style={styles.flatItemText}>{item.balance}</Text>
                      <Text style={styles.flatItemText}>{item.age}</Text>
                      <Text style={styles.flatItemText}>{item.city}   :  {item.subcity}</Text>







            </View>


	<View style={{flexDirection: "row", justifyContent: "space-evenly", padding: 10,}}>

            <View style={{ width: '50%', alignItems: 'center', flex: 1, top: 0, left: 0 }}>
                          <TouchableOpacity style={styles.headerItems} onPress={() => {Platform.OS === 'android' ? Linking.openURL("tel:+251"+item.phone) : Linking.openURL("telprompt:+251"+item.phone)}}>

                                        <Feather
                                        name="phone-call"
                                        color={Allstyle.container.backgroundColor}
                                        size={30}
                                        style={{ top: 10 }}
                                    />

                                    </TouchableOpacity>



                        </View>
            <View style={{ width: '50%', alignItems: 'center', flex: 1, top: 0, left: 0 }}>
                      <TouchableOpacity style={styles.headerItems} onPress={() => {props.navigation.navigate('Edit Item Form Four', {id: item.id, name: item.name, email: item.email, phone: item.phone, balance: item.balance, age: item.age, city: item.city, subcity: item.subcity, profile: item.profile, status: item.status})}}>

                                    <Feather
                                    name="edit"
                                    color={Allstyle.container.backgroundColor}
                                    size={30}
                                    style={{ top: 10 }}
                                />

                                </TouchableOpacity>



                    </View>
                    <View style={{ width: '50%', alignItems: 'center', flex: 1, top: 0, left: 0 }}>
                      <TouchableOpacity style={styles.headerItems} onPress={() => Alert.alert(
                'Delete!',
                'You want to delete ' + item.name + ' ?',
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log( 'No Pressed' ),
                    style: 'No',
                  },
                  { text: 'Yes', onPress: ( val ) => deleteAdminItem( item ) },
                ],
                { cancelable: false },
              )}>

                                    <Feather
                                    name="trash-2"
                                    color={Allstyle.container.backgroundColor}
                                    size={30}
                                    style={{ top: 10 }}
                                />

                                </TouchableOpacity>

                    </View>
                    <View style={{ width: '50%', alignItems: 'center', flex: 1, top: 0, left: 0 }}>
                      <TouchableOpacity style={styles.headerItems} onPress={() => {props.navigation.navigate('Edit Item Form Five', {id: item.id, name: item.name, email: item.email, phone: item.phone, balance: item.balance, age: item.age, city: item.city, subcity: item.subcity, profile: item.profile, status: item.status})}}>

                                    <Feather
                                    name="message-square"
                                    color={Allstyle.container.backgroundColor}
                                    size={30}
                                    style={{ top: 10 }}
                                />

                                </TouchableOpacity>



                    </View>

	</View>
          </View>
        </View>
      </View>)


}



    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <StatusBar backgroundColor='#ffa000' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={[styles.text_header, {alignItems: 'center', justifyContent: 'center', textAlign: 'center'}]}>{language.lang === "eng" ? "Manage Users!" : "አሁኑኑ ይመዝግቡት!"}</Text>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-evenly", padding: 10, marginBottom: 10}}>


                        {/*
                            {userDetail.status === 'user' ? <Text>Null</Text> : (
                        <TouchableOpacity style={styles.headerItems} onPress = {()=> alert('Right button press')}>

                                    <Feather
                                    name="settings"
                                    color="#fff"
                                    size={30}
                                    style={{ top: 5 }}
                                />

                                </TouchableOpacity>

                        )}

                        */}
                        <TouchableOpacity style={styles.headerItems} onPress = {()=> props.navigation.navigate('Add Users')}>

                                    <MaterialIcons
                                    name="add-task"
                                    color="#fff"
                                    size={30}
                                    style={{ top: 5 }}
                                />

                                </TouchableOpacity>



                    </View>




            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <View>

                <View style={{flexDirection: "row", justifyContent: "space-evenly", padding: 10, marginBottom: 0, backgroundColor: Allstyle.container.backgroundColor, borderBottomRightRadius: 20, borderBottomLeftRadius: 20}}>

                        {/*<TouchableOpacity onPress = {()=> alert('Right button press')}>

                            <Image style={{ width: 40, height: 40, marginEnd: 15, resizeMode: 'cover', shadowColor: '#000', shadowOpacity: 1, shadowOffset: { width: 0, height: 0, }, shadowRadius: 20, resizeMode: 'contain' }}
                                source={require( '../assets/Images/instagram.jpg' )}/>

                        </TouchableOpacity>*/}
                        <TouchableOpacity style={{backgroundColor: choice == 'users' ?  '#fff' : 'grey', width: '33%', textAlignVertical: 'center', alignItems: 'center', padding: 5, borderRadius: 15, borderColor: Allstyle.container.backgroundColor, borderWidth: 1}} onPress = {()=> setChoice('users')}>

                                    <Text style={{ color: choice == 'users' ?  '#0a55ba' : '#fff', fontWeight: '500', fontSize: 12,}}>{language.lang === "eng" ? "Users" : "ተጠቃሚዎች"}</Text>

                                </TouchableOpacity>

                                <TouchableOpacity style={{backgroundColor: choice == 'agents' ?  '#fff' : 'grey', width: '33%', textAlignVertical: 'center', alignItems: 'center', padding: 5, borderRadius: 15, borderColor: Allstyle.container.backgroundColor, borderWidth: 1}} onPress = {()=> setChoice('agents')}>

                                    <Text style={{ color: choice == 'agents' ?  '#0a55ba' : '#fff', fontWeight: '500', fontSize: 12,}}>{language.lang === "eng" ? "Agents" : "ኤጀንቶች"}</Text>

                                </TouchableOpacity>
                        <TouchableOpacity style={{fontWeight: '500', backgroundColor: choice == 'admins' ?  '#fff' : 'grey', width: '33%', textAlignVertical: 'center', alignItems: 'center', padding: 5, borderRadius: 15, borderColor: Allstyle.container.backgroundColor, borderWidth: 1}} onPress = {()=> setChoice('admins')}>

                                    <Text style={{ color: choice == 'admins' ?  '#0a55ba' : '#fff', fontWeight: '500', fontSize: 12,}}>{language.lang === "eng" ? "Admins" : "ተቆጣጣሪዎች"}</Text>

                                </TouchableOpacity>


                    </View>
                {isLoading ? <View style={Allstyle.containerActivity}>
                    <Text>{language.lang === "eng" ? "Scroll Down the Screen" : "በጣት ስክሪኑን ወደታች ይሳቡት"}</Text>
                    <ActivityIndicator size={40} color="#fff"/>
        </View> :  (
                /*
                if (choice){
                return <FlatList
                    numColumns=2
                    keyExtractor={( item, index ) => index}
                    data={userItems}
                    renderItem={renderProductItems}
                  />

                } else {

                    return <FlatList
                    //numColumns=2
                    keyExtractor={( item, index ) => index}
                    data={userJobItems}
                    renderItem={renderJobItems}
                  />

                }
                */

                <View style={{width: '100%', height: '93%'}}>
                <FlatList

                  numColumns={2}
                  //data={userItems}

                  data={choice == 'admins' ? admins : choice == 'agents' ? agents : users}
                  //data={if (choice) {return admins}}


                  refreshing={isLoading}
                  onRefresh={choice == 'admins' ? getAdminsData : choice == 'users' ? getUserData : getAgentData}
                  keyExtractor={( item, index ) => index}
                  renderItem={({ item, index }) => {
                      if (choice == 'admins') {
                        return renderAdminsData({ item });
                      } else if(choice == 'agents') {
                        return renderAgentsData({ item });
                      }
                        return renderUsersData({ item });
                      }}
                  //renderItem={choice ? {renderJobItems} : {renderProductItems}}

        />
        </View>
)}


                </View>

            </Animatable.View>
        </View>
    )
};
export default manageUsers;

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: Allstyle.container.backgroundColor,
        width: '100%',
        height: '100%'
    },
    productContainer: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingBottom: 10,
        width: '100%',
        height: '20%'
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 10,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 0,
        width: '100%',
        height: '20%',
        paddingBottom: 100

    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    text_footer: {
        color: '#1ed6cd',
        fontSize: 14
    },
    action: {
        flexDirection: 'row',
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 0
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -2,
        paddingLeft: 10,
        color: '#1ed6cd',
    },
    button: {
        alignItems: 'center',
        marginTop: 5
    },
    signIn: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    },

  product: {
    width: '100%',
    height: 350,
    fontSize: 12,
    marginVertical: 10,
    marginTop: 0,
    paddingLeft: 10,
    paddingTop: 8,
    paddingBottom: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderTopColor: 'black',
    borderBottomColor: 'black',
    textAlignVertical: 'bottom',
    backgroundColor: 'white',

  },
  jobsProduct: {
    width: '100%',
    height: 450,
    fontSize: 12,
    marginVertical: 5,
    marginTop: 0,
    paddingLeft: 10,
    paddingTop: 8,
    paddingBottom: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderTopColor: 'black',
    borderBottomColor: 'black',
    textAlignVertical: 'bottom',
    backgroundColor: 'white',

  },
  flatItemText: {

    width: '100%',
    fontFamily: 'verdana',
    alignItems: 'center',
    color: Allstyle.container.backgroundColor,
    top: 0,
  },

} );
