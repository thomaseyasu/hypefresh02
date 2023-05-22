import React from 'react';

import { SafeAreaView, Image, StyleSheet, StatusBar, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native';

import { AuthContext } from '../AuthContext';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Allstyle from './allstyle';

const ForgetPassword = (props) => {
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    });
    
    const { signIn } = React.useContext(AuthContext);
    const textInputChange = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        }
    }

    const ForgetPasswordHandle = (username, password) => {
        signIn(username, password);
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#fff' barStyle="light-content"/>
            <View style={styles.header}>
                <Image style={{ width: '100%', height: 80, resizeMode: 'cover', shadowColor: '#000', shadowOpacity: 1, shadowOffset: { width: 0, height: 0, }, shadowRadius: 20, resizeMode: 'contain' }}
                    source={require( '../assets/Images/hypefresh.jpg' )} />
                <Text style={styles.text_header}>Password Recovery</Text>
            </View>
        
        <Animatable.View
            animation="fadeInUpBig"
            style={styles.footer}
        >
        <Text style={styles.text_footer}>Enter Your Recovery Email Here</Text>
        <View style={styles.action}>
            <FontAwesome
                name="user-o"
                color="#05375a"
                size={20}
            />
            <TextInput
                placeholder="Email"
                placeholderTextColor='grey'
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange?
            <Animatable.View
            
                animation="bounceIn"
            >
                <Feather
                    name="check-circle"
                    color="green"
                    size={20}
                />
            </Animatable.View>
            :null}
        </View>
        

        
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {ForgetPasswordHandle(data.username, data.password)}}
                >
                <LinearGradient
                    colors={[ 'red', 'red' ]}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Send Code</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Login', {greating: 'Hello there!'})}
                    style={[styles.signIn, {
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: 'red'
                    }]}>Sign In</Text>
                </TouchableOpacity>
            </View>

        </Animatable.View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#fff'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 10
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
    },
    text_footer: {
        color: '#05375a',
        fontSize: 16,
        textAlign: 'center',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 20,
        color: '#05375a',
        alignItems: 'center',
        justifyContent: 'center',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
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
    }
  });

export default ForgetPassword;