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
    FlatList,
    StyleSheet,
    ScrollView,
    StatusBar,
    SafeAreaView,
} from 'react-native';
//import CheckBox from '@react-native-community/checkbox';
import { AuthContext } from '../AuthContext';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//import DatePicker from 'react-native-date-picker';

import Allstyle from './allstyle';
import Select from 'react-native-select-dropdown';
//import DropDownItem from "react-native-drop-down-item";

//import themeContext from './themeContext';

//import languageContext from './languageContext';
//import AntDesign from 'react-native-vector-icons/AntDesign';


import Entypo from 'react-native-vector-icons/Entypo';
//import CountryPicker from "react-native-country-codes-picker";
import AllCountry from "./countries+states+cities.json";



import Jcity from "./city.json";
import Jstate from "./state.json";
import Jcountry from "./country.json";


const register = ( props ) =>
{

    const [ data, setData ] = React.useState( {
        //fname: '',
        //lname: '',
        username: '',
        //lname2: '',
        //Phone: '',
        //Age: '',
        Email: '',
        Gender: '',
        //Occupation: 'Government',
        //Religion: 'Orthodox Tewahedo',
        //Medical: 'HIV (-)',
        //KidsNum: '0',
        //Country: 'Male',
        //City: 'Male',
        //Income: '',
        //Height: '',
        //Weight: '',
        password: '',
        cpassword: '',
        //passwordhint: '',

        check_textUsernameInputChange: false,
        check_textLEmailInputChange: false,
        check_textGenderInputChange: false,

        /*check_textFNameInputChange: false,
        check_textLNameInputChange: false,
        check_textPhoneInputChange: false,
        check_textAgeInputChange: false,
        check_textGenderInputChange: false,
        check_textOccupationInputChange: false,
        check_textReligionInputChange: false,
        check_textMedicalInputChange: false,
        check_textKidsNumInputChange: false,
        check_textCountryInputChange: false,
        check_textCityInputChange: false,
        check_textIncomeInputChange: false,
        check_textHeightInputChange: false,
        check_textWeightInputChange: false,
        */
        check_textPassHintInputChange: false,
        check_textpasswordInputChange: false,

        secureTextEntry: true,
        csecureTextEntry: true
    } );

    const [FNAME, setFname] = useState('');
    const [LNAME, setLname] = useState('');

    const [PHONE, setPhone] = useState('');
    const [AGE, setAge] = useState('');

    const [CITY, setCCity] = useState('');
    const [INCOME, setIncome] = useState('');

    const [HEIGHT, setHeight] = useState('');
    const [WEIGHT, setWeight] = useState('');

    const [PASS, setPassword] = useState('');
    const [CPASS, setCpassword] = useState('');
    const [PASSHINT, setPasswordhint] = useState('');
    //const [toggleCheckBox, setToggleCheckBox] = useState(false);

    const selectGender = ["Gender", "Male", "Female"];
    const selectOccupation = ["Government", "Non Government", "Private", "NGO", "Foreign Job", "Other", ];
    const selectReligion = ["Orthodox Tewahedo", "Protestant", "Muslim", "Catholic", "Waaqeffanna", "Other"];
    const selectMedicalStatus = ["HIV (-)", "HIV (+)"];
    const selectKids = ["0", "1", "2", "3", "4", "5", "more than 5"];
    //const selectCountry = [];
    //const selectCountry = ["Ethiopia", "Eritria", "Kenya", "Sudan", "Somalia", "Djibuti"];

    const [ date, setDate ] = useState( new Date() );
    const [isLoading, setisLoading] = useState(false);
    const [gender, setGender] = useState("Male");
    const [occupation, setOccupation] = useState("Government");
    const [religion, setReligion] = useState("Orthodox Tewahedo");
    const [medicalStatus, setMedicalStatus] = useState("HIV (-)");
    const [kids, setKids] = useState("0");
    const [country, setCountry] = useState([]);
    const [cntry, setCntry] = useState([]);
    const [jcntry, setJcntry] = useState([]);
    const [jstate, setJstate] = useState([]);
    const [jcity, setJcity] = useState([]);

    


    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('');
    const [countryId, setCountryId] = useState('1');
    const [stateId, setStateId] = useState('1');
    const [cityId, setCityId] = useState('1');


    const { signUp } = React.useContext( AuthContext );
    
    const textUsernameInputChange = ( val ) =>
    {
        if ( val.length != 0 )
        {
            setData( {
                ...data,
                username: val,
                //check_textLNameInputChange: true
            } );
        }
    }
    const textLEmailInputChange = ( val ) =>
    {
        if ( val.length != 0 )
        {
            setData( {
                ...data,
                Email: val,
                //check_textLNameInputChange: true
            } );
        }
    }

    const textGenderInputChange = ( val ) =>
    {
        if ( val.length != 0 )
        {
            setData( {
                ...data,
                Gender: val,
                //check_textGenderInputChange: true
            } );
        }
    }

    const handlePasswordChange = ( val ) =>
    {
        setData( {
            ...data,
            password: val
        } );
    }
    const handleCPasswordChange = ( val ) =>
    {
        setData( {
            ...data,
            cpassword: val
        } );
    }
    const updateConfirmSecureTextEntry = ( val ) =>
    {
        setData( {
            ...data,
            secureTextEntry: !data.secureTextEntry
        } );
    }
    const updateCSecureTextEntry = ( val ) =>
    {
        setData( {
            ...data,
            csecureTextEntry: !data.csecureTextEntry
        } );
    }



    const registerHandle = ( username, Email, Gender, Pass, CPass ) =>
    {
      if ( username == "" )
      {
        alert( "Please Check User Name Fields is empity!" )
      } else if ( Gender == "" )
      {
        alert( "Please Check Gender Fields is empity!" );
      } else if ( CPass == "" )
      {
        alert( "Please Check Confirm password Fields is empity!" );
      } else if ( Pass == "" )
      {
        alert( "Please Check confirm password Fields is empity!" );
      } else if ( CPass !== Pass  )
      {
        alert( "Please Check password and confirm password is not match!" );
      } else
      {
        //setisLoading(true);
        //props.navigation.navigate('uploadProfile', {Fname: Fname, Lname: Lname, Phone: Phone, age: age, Gender: Gender, Occupation: Occupation, Religion: Religion, MedicalStatus: MedicalStatus, KidsNum: KidsNum, Country: Country, jstate: jstate, city: city, MonthlyIncome: MonthlyIncome, height: height, weight: weight, Pass: Pass, CPass: CPass, PassHint: PassHint});
        signUp( username, Email, Gender, password, cpassword );
        //setisLoading(false);
    }
    }




    useEffect( () => {

    }, []);



    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='white' barStyle="light-content" />
            <View style={styles.header}>

                    <Text style={styles.text_header}>Register</Text>
                    <Text style={styles.text_header2}>Create Your HF Account!</Text>
            </View>
            {isLoading ? <View style={Allstyle.containerActivity}>
                    <Text>Please Wait!</Text>
                    <ActivityIndicator size={40} color="#fff"/>
        </View> : (
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}

            >

                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                    {/*<Text style={styles.text_footer}>User Name</Text>*/}

                    <View style={styles.action}>

                        <TextInput
                            placeholder="UserName"
                            placeholderTextColor="grey"
                            //style={styles.textInput}
                            autoCapitalize="none"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={( val ) => textUsernameInputChange( val )}
                        />

                    </View>

                    <View style={styles.action}>

                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="grey"
                            //style={styles.textInput}
                            autoCapitalize="none"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={( val ) => textLEmailInputChange( val )}
                        />

                    </View>






                    <View style={styles.actionn}>

                        <TextInput
                            placeholder="Password"
                            placeholderTextColor='grey'
                            secureTextEntry={data.secureTextEntry ? true : false}
                            //style={styles.textInput}
                            autoCapitalize="none"
                            style={styles.textInputpass}
                            autoCapitalize="none"
                            onChangeText={( val ) => handlePasswordChange( val )}
                        />
                        <TouchableOpacity
                            onPress={updateConfirmSecureTextEntry}
                        >
                            {data.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={24}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={24}
                                />
                            }
                        </TouchableOpacity>
                    </View>

                    <View style={styles.actionn}>

                        <TextInput
                            placeholder="Confirm Password"
                            placeholderTextColor='grey'
                            secureTextEntry={data.csecureTextEntry ? true : false}
                            //style={styles.textInput}
                            autoCapitalize="none"
                            style={styles.textInputpass}
                            autoCapitalize="none"
                            onChangeText={( val ) => handleCPasswordChange( val )}
                        />
                        <TouchableOpacity
                            onPress={updateCSecureTextEntry}
                        >
                            {data.csecureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={24}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={24}
                                />
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', width: '100%'}}>


                        <View style={[styles.action, {left: 0, width: '100%'}]}>


            <Select
                data={selectGender}
                containerStyle={{width: '100%', left: 0, color: '#000', borderRadius: 30, backgroundColor: '#fff',}}
                defaultValue='Gender'

                buttonStyle={styles.dropdown2BtnStyle}
                buttonTextStyle={styles.dropdown2BtnTxtStyle}
                renderDropdownIcon={isOpened => {
                  return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#FFF'} size={18} />;
                }}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown2DropdownStyle}
                rowStyle={styles.dropdown2RowStyle}
                rowTextStyle={styles.dropdown2RowTxtStyle}

                //title= 'Select Your Address'
                style={[{width: '100%', color: '#000', left: 0, borderRadius: 30, backgroundColor: '#fff',}]}
                onSelect={( val ) => {
                    //setisLoading(true);
                    //setGender(val);
                    textGenderInputChange(val);
                    }}
                //onSelect={onSelect()}
            />
            </View>
            </View>



                    <View style={styles.textPrivate}>

                        <Text style={styles.color_textPrivate}>
                            By signing up you agree to our
                        </Text>
                        <Text style={[ styles.color_textPrivate, { fontWeight: 'bold', color: 'red' } ]}>{" "}Terms of service</Text>
                        <Text style={styles.color_textPrivate}>{" "}and</Text>
                        <Text style={[ styles.color_textPrivate, { fontWeight: 'bold', color: 'red' } ]}>{" "}Privacy policy</Text>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.signIn}
                            onPress={() => {

                                //registerHandle( FNAME, LNAME, PHONE, AGE, gender, occupation, religion, medicalStatus, kids, country, jstate, CITY, INCOME, HEIGHT, WEIGHT, PASS, CPASS, PASSHINT )

                                        if ( data.username == "" )
                                          {
                                            alert( "Please Check User Name Fields is empity!" )
                                          } else if ( data.Email == "" )
                                          {
                                            alert( "Please Check Email Fields is empity!" );
                                          } else if ( data.Gender == "" )
                                          {
                                            alert( "Please Check Gender Fields is empity!" );
                                          } else if ( data.Gender == "Gender" )
                                          {
                                            alert( "Please Check Gender Fields is empity!" );
                                          } else if ( data.password == "" )
                                          {
                                            alert( "Please Check password Fields is empity!" );
                                          } else if ( data.cpassword == "" )
                                          {
                                            alert( "Please Check confirm password Fields is empity!" );
                                          } else if ( data.password !== data.cpassword  )
                                          {
                                            alert( "Please Check password and confirm password is not match!" );
                                          } else
                                          {
                                            //setisLoading(true);
                                            //registerHandle( FNAME, LNAME, PHONE, AGE, gender, occupation, religion, medicalStatus, kids, country, jstate, CITY, INCOME, HEIGHT, WEIGHT, PASS, CPASS, PASSHINT )
                                            alert("Success ");
                                            //props.navigation.navigate('uploadProfile', {Fname: FNAME, Lname: LNAME, Phone: PHONE, age: AGE, Gender: gender, Occupation: occupation, Religion: religion, MedicalStatus: medicalStatus, KidsNum: kids, Country: country, jstate: jstate, city: CITY, MonthlyIncome: INCOME, height: HEIGHT, weight: WEIGHT, Pass: PASS, CPass: CPASS, PassHint: PASSHINT});
                                            //signUp( username, Email, Gender, password, cpassword );
                                            //setisLoading(false);
                                        }

                                }}
                        >
                            <LinearGradient
                                colors={[ 'red', 'red' ]}
                                style={styles.signIn}
                            >
                                <Text style={[ styles.textSign, {
                                    color: '#fff'
                                } ]}>Sign Up</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </Animatable.View>)}
        </SafeAreaView>
    )
};
export default register;

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingBottom: 0,
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 10,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 10,
        top: 20,
    },
    text_header: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 32,
        top: 10,
    },
    text_header2: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        top: 10,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 14,
        //textAlign: 'center'
    },
    action: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 20,
        //borderBottomWidth: 2,
        //borderBottomColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionn: {
        flexDirection: 'row',
        marginTop: 20,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000',
    },
    actions: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 0,
        width: '20%'
    },
    textInput: {
        //flex: 1,
        backgroundColor: 'transparent',
        width: '100%',
        borderWidth: 2,
        color: Allstyle.container.backgroundColor,
        fontSize: 14,
        fontWeight: "bold",
        borderRadius: 10,
        paddingLeft: 20,
        //textAlign: 'center',
    },
    textInputpass: {
        //flex: 1,
        backgroundColor: 'transparent',
        width: '90%',
        color: Allstyle.container.backgroundColor,
        fontSize: 14,
        fontWeight: "bold",
        borderRadius: 10,
        paddingLeft: 10,
    },
    textInput3: {
        //flex: 1,
        backgroundColor: 'transparent',
        width: '100%',
        borderWidth: 2,
        marginTop: Platform.OS === 'ios' ? 0 : -2,
        paddingLeft: 10,
        color: Allstyle.container.backgroundColor,
        fontSize: 16,
        fontWeight: "bold",
        borderRadius: 10,
    },
    button: {
        alignItems: 'center',
        marginTop: 0
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
    shadow: {
    shadowColor: '#000',
    shadowOffset: {
    width: 0,
    height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
},
dropdown2BtnStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#444',
    borderRadius: 8,
  },
  dropdown2BtnTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dropdown2DropdownStyle: {
    backgroundColor: '#444',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  dropdown2RowStyle: {backgroundColor: '#444', borderBottomColor: '#C5C5C5'},
  dropdown2RowTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
} );
