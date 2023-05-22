import React, {useState, useEffect, useCallback} from 'react';

import { SafeAreaView, StyleSheet, StatusBar, Text, View, TextInput, Image, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';

import { AuthContext } from '../AuthContext';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Select from 'react-native-select-dropdown';

import Allstyle from './allstyle';

const Login = ( props ) =>
{
    const [ data, setData ] = React.useState( {
        username: '',
        checkedName: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        //isLoading: true,
        dataSource: null,
        refreshing: true,
        dataSource: [],

    } );

    const [dataSource, setDataSource] = useState([]);

    const [isLoading, setisLoading] = useState(false);
    const [stateId, setStateId] = useState('');
    const white = "#fff";
    const black = "#000";


    const { signIn } = React.useContext( AuthContext );
    const textInputChange = ( val ) =>
    {
        if ( val.length != 0 )
        {
            setData( {
                ...data,
                username: val,
                check_textInputChange: true
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
    const updateSecureTextEntry = ( val ) =>
    {
        setData( {
            ...data,
            secureTextEntry: !data.secureTextEntry
        } );
    }

    const loginHandle = ( userName, password ) =>
    {
        //this.setState( { refreshing: true } );
        if ( userName == "" )
        {
            alert( "User Name Fields is empity! Please Check." );
        } else if ( password == "" )
        {
            alert( "password Fields is empity! Please Check." );
        } else if ( password != "hypefresh2023" )
        {
            alert( "incorrect password!" );
        }
        else
        {
                alert("login success!");
                signIn( userName, password );

        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={white} barStyle="light-content" />

            <View style={styles.header}>
                <Image style={{ width: '100%', height: 80, resizeMode: 'cover', shadowColor: '#000', shadowOpacity: 1, shadowOffset: { width: 0, height: 0, }, shadowRadius: 20, resizeMode: 'contain' }}
                    source={require( '../assets/Images/hypefresh.jpg' )} />
                <Text style={styles.text_header}>Login To HypeFresh</Text>
            </View>
            {isLoading ? <View style={Allstyle.containerActivity}>
                    <Text>Please Wait!</Text>
                    <ActivityIndicator size={40} color="#000"/>
        </View> : (
            <View
                style={styles.footer}
            >
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color={black}
                        size={20}
                    />

                    <TextInput
                        placeholder="Username"
                        placeholderTextColor="grey"
                        //keyboardType = 'numeric'
                        style={styles.textInput}
                        autoCapitalize="none"
                        //maxLength={10}
                        onChangeText={( val ) => textInputChange( val )}
                    />
                    {data.check_textInputChange ?
                        <Animatable.View

                            animation="bounceIn"
                        >
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                        : null}
                </View>

                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color={black}
                        size={20}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="grey"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={( val ) => handlePasswordChange( val )}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                        style={styles.eye}
                    >
                        {data.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color="grey"
                                size={20}
                            />
                            :
                            <Feather
                                name="eye"
                                color="grey"
                                size={20}
                            />}

                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.forgetpasword}
                        onPress={() => props.navigation.navigate( 'ForgetPassword' )}

                    >

                            <Text style={[ styles.textforgetpass, {
                                color: '#000'
                            } ]}>Forget Password?</Text>
                    </TouchableOpacity>
                    </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => { loginHandle( data.username, data.password ) }}
                    >
                        <LinearGradient
                            colors={[ 'red', 'red' ]}
                            style={styles.signIn}
                        >
                            <Text style={[ styles.textSign, {
                                color: '#fff'
                            } ]}>Login</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 20,
                    backgroundColor: 'transparent',
                    marginBottom: 30,
                    height: '40%'
                }}>
                <View>
                <Text style={{fontSize: 14, fontWeight: '500',}}>Or Connect With</Text>
                </View>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 20,
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                }}>
                <TouchableOpacity
                        style={{ width: '40%'}}
                        onPress={() => { alert("Facebook Sign In Clicked") }}
                    >
                <Image style={{ width: '100%', height: 60, resizeMode: 'cover', shadowColor: '#000', shadowOpacity: 1, shadowOffset: { width: 0, height: 0, }, shadowRadius: 20, resizeMode: 'contain' }}
                    source={require( '../assets/Images/facebookIcon.png' )} />

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: '40%'}}
                        onPress={() => { alert("Google Sign In Clicked") }}
                    >
                    <Image style={{ width: '100%', height: 60, resizeMode: 'cover', shadowColor: '#000', shadowOpacity: 1, shadowOffset: { width: 0, height: 0, }, shadowRadius: 20, resizeMode: 'contain' }}
                        source={require( '../assets/Images/googleIcon.png' )} />
                    </TouchableOpacity>
                </View>
                </View>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 20,
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                }}>
                <Text>Do Not Have an Account? </Text>
                <TouchableOpacity
                        onPress={() => props.navigation.navigate( 'Register' )}

                    ><Text style={{fontWeight: 'bold', fontSize: 16}}
                        >Sign UP</Text>
                    </TouchableOpacity>
                </View>

            </View>)}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 0,
        color: '#000',
    },
    text_header: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 0,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 16,
    },
    action: {
        flexDirection: 'row',
        marginTop: 30,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000',
        paddingLeft: 20,
    },
    eye: {
        right: 20,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#000',
        fontSize: 14,
        marginLeft: 0,
        paddingLeft: 10,
        fontWeight: "bold",
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 10,
    },
    signIn: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    forgetpasword: {
        //textAlign: 'left',
        backgroundColor: 'transparent',
        width: '100%',
    },
    textforgetpass: {
        textAlign: 'right',
        padding: 5,
        marginRight: 15,
    },

dropdown2BtnStyle: {
    width: '50%',
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

export default Login;