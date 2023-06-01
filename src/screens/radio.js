import React, { Component } from 'react';
import { useState, useEffect } from 'react';

import {
	SafeAreaView,
	TouchableOpacity,
	TouchableHighlight,
	ScrollView,
	Text, Alert,
	ImageBackground,
	View, Platform,
	StyleSheet,
	FlatList,
	Linking, ActivityIndicator,
} from 'react-native';

import { Image } from 'react-native-animatable';

import * as Animatable from 'react-native-animatable';

const Button = ( { title, onPress } ) => (
    <TouchableOpacity onPress={onPress}>
        <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>
);
var _ = require( 'lodash' );

const img_pause = require( '../assets/Images/pause.png' );
const img_play = require( '../assets/Images/play.png' );
import Sound from 'react-native-sound';

//import Video from 'react-native-video';
//import MapView from 'react-native-maps';
import RenderHTML from 'react-native-render-html';
import { WebView } from 'react-native-webview';
import Allstyle from './allstyle';
//import TrackPlayer from 'react-native-track-player';




//const API_KEY = 'AIzaSyBZ8ibHtm5VfjbPBcEybmi-k5Erzhn994s';
const Feature = ( { title, onPress, buttonLabel = <Image source={img_play} style={styles.featureimg} />, status } ) => (
    <View style={styles.feature}>

        {status ? <Text style={{ padding: 5 }}>{resultIcons[ status ] || ''}</Text> : null}
        <Button title={buttonLabel} onPress={onPress} />
    </View>
);

const FeatureTwo = ( { title, onPress, buttonLabel = <Image source={img_pause} style={styles.featureimg} />, status } ) => (
    <View style={styles.feature}>

        {status ? <Text style={{ padding: 5 }}>{resultIcons[ status ] || ''}</Text> : null}
        <Button title={buttonLabel} onPress={onPress} />
    </View>
);


const music = [{
   title: 'death bed',
   artist: 'Powfu',
   artwork: 'https://images-na.ssl-images-amazon.com/images/I/A1LVEJikmZL._AC_SX425_.jpg',
   url: 'http://stream.radiojar.com/3e5g9wndreruv',
   duration: 2 * 60 + 53,
   id: '1',
 }
]
const trackPlayer = async () => {
    await TrackPlayer.setupPlayer();

    await TrackPlayer.add(music);

    await TrackPlayer.play();
};

const Facebook = () =>
    {
        const facebook = 'https://www.facebook.com/Businesslunchradioshow/'
        Linking.openURL( facebook ).catch( err =>
            console.error( 'An error occured', err )
        );
    }
const Telegram = () =>
    {
        const telegram = 'https://t.me/BusinessLunchRadioshow'
        Linking.openURL( telegram ).catch( err =>
            console.error( 'An error occured', err )
        );
    }
    const Twitter = () =>
    {
        const twitter = 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fethiofm.com%2F2021%2F09%2F28%2F%25e1%258b%25a8%25e1%258a%25a0%25e1%258b%25b2%25e1%2588%25b5-%25e1%258a%25a0%25e1%2589%25a0%25e1%2589%25a3-%25e1%258a%25a8%25e1%2589%25b0%25e1%2588%259b-%25e1%258a%25a0%25e1%2588%25b5%25e1%2589%25b0%25e1%258b%25b3%25e1%258b%25b0%25e1%2588%25ad-%25e1%2588%259d%25e1%258a%25ad%25e1%2588%25ad-%25e1%2589%25a4%25e1%2589%25b5%2F&text=Hey%20check%20this%20out'
        Linking.openURL( twitter ).catch( err =>
            console.error( 'An error occured', err )
        );
    }
    const Youtube = () =>
    {
        const youtube = 'https://www.youtube.com/channel/UCn4D20GPsAtNqN5bIC1BhFA'
        Linking.openURL( youtube ).catch( err =>
            console.error( 'An error occured', err )
        );
    }
    const Instagram = () =>
    {
        const instagram = 'https://www.instagram.com/ethiofmradio/'
        Linking.openURL( instagram ).catch( err =>
            console.error( 'An error occured', err )
        );
    }
    const EthioFM = () =>
    {
        const ethiofm = 'https://www.ethiofm107.com/'
        Linking.openURL( ethiofm ).catch( err =>
            console.error( 'An error occured', err )
        );
    }
    makeCal = () => {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${+251116686250}';
    } else {
      phoneNumber = 'telprompt:${+251116686250}';
    }

    Linking.openURL(phoneNumber);
  };
  makeCall = () => {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${+251116686628}';
    } else {
      phoneNumber = 'telprompt:${+251116686628}';
    }

    Linking.openURL(phoneNumber);
  };

const audioTests = [

    {
        title: 'Live Stream / የቀጥታ ስርጭት',
        url: 'http://stream.radiojar.com/3e5g9wndreruv.mp3',
    },

];



function setTestState ( testInfo, component, status )
{
    component.setState( { tests: { ...component.state.tests, [ testInfo.title ]: status } } );
}

var sound;


class Radio extends Component
{
    constructor ( props )
    {
        super( props );

        Sound.setCategory( 'Playback', true ); // true = mixWithOthers

        // Special case for stopping
        this.stopSoundLooped = () =>
        {
            if ( !this.state.loopingSound )
            {
                return;
            }

            this.state.loopingSound.stop().release();
            this.setState( { loopingSound: null, tests: { ...this.state.tests, [ 'mp3 in bundle (looped)' ]: 'win' } } );
        };

        this.state = {
            loopingSound: undefined,
            tests: {},
            isLoading: false,
            dataSource: null,
            isEnabled: false,
            discovering: false,
            devices: [],
            unpairedDevices: [],
            connected: false,
            refreshing: true,
            isPlaying: false,
            isPlayed: false,
            //isStopping: true
        };
    }
UNSAFE_componentWillMount ()
    {
        this.setState( { refreshing: true } );

        return fetch( 'https://Ethio FM.com/index.php/wp-json/wp/v2/posts' )
            .then( ( response ) => response.json() )
            .then( ( responseJson ) =>
            {
                this.setState( {
                    isLoading: false,
                    isPlayed: false,
                    dataSource: responseJson,
                } )
            } )
            .catch( ( error ) =>
            {
                console.log( error )
            } );

    }





render ()
{
let { container } = styles
            let { dataSource, isLoading, isPlaying } = this.state
return (
        <SafeAreaView style={styles.container}>






                    {/* <Text style={[ styles.flatItemText2 ], { color: 'red', alignItems: 'center', fontSize: 18 }}>About EthioFM 107.8</Text> */}
                    <View style={{ alignItems: 'center', justifyContent: 'center', top:0, width: '100%', height: '100%' }}>
			{/*<View style={{ padding: 10 }}>


                            <Image style={{ height: 100, resizeMode: 'cover', shadowColor: '#000', shadowOpacity: 1, shadowOffset: { width: 0, height: 0, }, shadowRadius: 20, resizeMode: 'contain' }}
                                source={require( '../assets/Images/ethiofmlog.png' )}

                            />
                        </View>*/}


                            <Animatable.View
                    animation="fadeInLeftBig" style={{
			    height: '25%', top: -40}}>




                            {this.state.isLoading ?
                            <View style={styles.loading}>
                              <ActivityIndicator size={40} color="#fff"/>
                              </View> : (





                            <View style={styles.container} contentContainerStyle={styles.scrollContainer}>
                                {audioTests.map( testInfo =>
                                {
                                    if ( this.state.isPlaying == false )
                                    {
                                        return (
                                            <Feature
                                                status={this.state.tests[ testInfo.title ]}
                                                key={testInfo.title}
                                                title={testInfo.title}
                                                onPress={() =>
                                                {


						                            this.setState( { isLoading: true } );
                                                    const { isPlaying,  isLoading} = this.state;
                                                    Sound.setCategory( 'Playback' );

                                                    //Alert.alert( "ማሳወቅያ","ድምፁን ይጠብቁ!", [{text: 'አሺ'}] );
						    //https://stream-39.zeno.fm/b8skbyqeqeruv?zs=2DHGUACeTRa4XGXUdWTdlw

                                                    sound = new Sound( `http://stream.radiojar.com/3e5g9wndreruv`, null, ( error ) =>
                                                    {
                                                        if ( this.state.isPlaying == false )
                                                        {

                                                            //alert( "Please wait until sound is playing!" );
                                                            sound.play();
                                                            this.setState( { isLoading: false } );
                                                            this.setState( { isPlaying: true } );
                                                            //console.warn( "Played" );

                                                        } else if ( this.state.isPlaying == true )
                                                        {
                                                            //sound.stop();
                                                            //this.setState( { isPlaying: false } )
                                                            //console.warn( "Paused" );
                                                            //sound.setVolume( 0.0 );
                                                            alert( "It is already playing!" );
                                                            //sound.pause();
                                                            //this.setState( { isPlaying: !isPlaying } )

                                                        }
                                                    } )
                                                }}
                                            /> )
                                    }
                                    else if ( this.state.isPlaying == true )
                                    {
                                        return ( <FeatureTwo
                                            status={this.state.tests[ testInfo.title ]}
                                            key={testInfo.title}
                                            title={testInfo.title}
                                            onPress={() =>
                                            {
                                                this.setState( { isLoading: true } );
                                                //const { isPlaying } = this.state;
                                                if ( this.state.isPlaying == false )
                                                {
                                                    //sound.play();
                                                    //this.setState( { isPlaying: !isPlaying } )
                                                    alert( "It is already stop playing!" );

                                                } else if ( this.state.isPlaying == true )
                                                {
                                                    //alert( "It is already stoping!" );
                                                    //sound.pause();
                                                    //this.setState( { isPlaying: !isPlaying } )
                                                    //console.warn( "Paused" );
                                                    sound.stop();
                                                    this.setState( { isLoading: false } );
                                                    this.setState( { isPlaying: false } )
                                                    //console.warn( "Paused" );
                                                }

                                            }}
                                        /> )
                                    }



                                } )}

                            </View>


)}
</Animatable.View>









                    </View>




        </SafeAreaView>

    );
}
}
const styles = StyleSheet.create( {
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        top: 0,
        backgroundColor: Allstyle.container.backgroundColor
    },
    homeHeader: {
        //flex: 1,
        width: '100%',
        backgroundColor: '#7d001b',
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: 30,
        marginBottom: 20,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,

    },

    homeOptions2: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        fontSize: 16,
        shadowOpacity: 10,
        shadowColor: 'white',
        shadowRadius: 0,
        backgroundColor: '#7d001b',

    },
    homeOptions3: {
        width: '100%',
        alignItems: 'center',
        fontSize: 16,
        borderRadius: 10,
        borderWidth: 5,
        shadowOpacity: 10,
        shadowColor: 'white',
        shadowRadius: 0,
        backgroundColor: 'white',

    },
    flatlistContainer1: {
        flex: 1,
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    flatlistContainer2: {
        flex: 1,
        width: '100%',
        height: '100%',
        top: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    flatlistContainer3: {
        flex: 1,
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#840820',
    },
    flatItemText1: {
        fontSize: 28,
        alignItems: 'center',
        alignContent: 'center',
        fontWeight: 'bold',
        fontFamily: 'verdana',
        color: 'white',

    },
    flatItemText2: {
        fontSize: 24,
        alignItems: 'center',
        alignContent: 'center',
        fontWeight: 'bold',
        fontFamily: 'verdana',
        color: 'black',
    },
    flatItemText3: {
        fontSize: 24,
        alignItems: 'center',
        alignContent: 'center',
        fontWeight: 'bold',
        fontFamily: 'verdana',
        color: 'black',
    },
    map: {
        width: '100%',
        height: '100%',
    },
    action: {
        flexDirection: 'row',
        marginTop: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    scrollContainer: {},
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 20,
        padding: 20,
        textAlign: 'center',
        backgroundColor: 'transparent',
        color: 'white',
    },
    button: {
	width: '100%',
	height: '100%',
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderWidth: 0,
        borderColor: 'rgba(120,10,10,1.5)',
        overflow: 'hidden',
        paddingLeft: 0,
	paddingBottom: 0,
    },
    header: {
        textAlign: 'left',
    },
    feature: {
	width: '100%',
	height: '100%',
        flexDirection: 'row',
	backgroundColor: 'transparent',
        padding: 0,
	top: 0,
    alignSelf: 'center',
    alignItems: 'center',
    },
    featureimg: {
	width: 300, height: 120, left: 0, top: 0, marginEnd: 5, resizeMode: 'cover', shadowColor: '#000', shadowOpacity: 1, shadowOffset: { width: 0, height: 0, }, shadowRadius: 0,
    },    product: {
        width: '100%',
        height: 120,
        fontSize: 24,
        marginVertical: 10,
        marginTop: 0,
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
        textAlign: 'center',
        color: Allstyle.container.backgroundColor,
        top: 0,
        fontSize: 18,
        fontWeight: 'bold',
        borderWidth: 2,
        borderBottomColor: 'red'
    },
    flatItemTextpa: {

        width: '100%',
        fontFamily: 'verdana',
        color: Allstyle.container.backgroundColor,
        top: 0,
        fontSize: 12,
        fontWeight: 'bold',
    },

} );

export default Radio;