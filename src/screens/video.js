import React, { Component } from 'react';
import { useState, useEffect, useContext } from 'react';

import {
	SafeAreaView,
	TouchableOpacity,
	TouchableHighlight,
	ScrollView,
	Text, Alert,
	ImageBackground,
	View, Platform, StatusBar,
	StyleSheet,
	FlatList,
	Linking,
	Image,
	Animated,
	TextInput,
} from 'react-native';


import * as Animatable from 'react-native-animatable';
import {EventRegister} from 'react-native-event-listeners';
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';
import Vid from 'react-native-video';
//import RNVideoPlayer from "react-native-advanced-video-player";

import VideoPlayer from 'react-native-video-player';

const Video = () =>
{

    const [hmode, setHmode] = useState(false);
    const [offset, setOffset] = useState({});
const [ Items, setItems ] = useState( [
        { id: 1, Ename: 'ቤት', name: 'House', key: '1', icon: 'automobile', homeContentIcon: require( '../assets/Images/house.png' ) },
        { id: 2, Ename: 'መኪና', name: 'Car', key: '2', icon: 'home', homeContentIcon: require( '../assets/Images/blueCar.png' ) },
        { id: 3, Ename: 'ሱቆች', name: 'Shopping', key: '3', icon: 'desktop', homeContentIcon: require( '../assets/Images/shops.png' ) },
        { id: 4, Ename: 'ኤሌክሮኒክስ', name: 'Electronics', key: '4', icon: 'laptop', homeContentIcon: require( '../assets/Images/electronics.jpg' ) },
        { id: 5, Ename: 'ፈርኒቸር', name: 'Furniture', key: '5', icon: 'automobile', homeContentIcon: require( '../assets/Images/caferestaurant.png' ) },
        { id: 6, Ename: 'ኮስሞቲክስ', name: 'Cosmetics Products', key: '6', icon: 'home', homeContentIcon: require( '../assets/Images/beauty.jpg' ) },
        { id: 7, Ename: 'የወጥ ቤት እቃዎች', name: 'Kitchen Items', key: '7', icon: 'desktop', homeContentIcon: require( '../assets/Images/kitchincab.png' ) },
        { id: 8, Ename: 'አልባሳት', name: 'Clothes', key: '9', icon: 'automobile', homeContentIcon: require( '../assets/Images/fashions.jpg' ) },
        { id: 9, Ename: 'አስቤዛ እና የምግብ ግብአቶች', name: 'Asbeza and Foods', key: '10', icon: 'home', homeContentIcon: require( '../assets/Images/agroFood.png' ) },
        { id: 10, Ename: 'ካፌ እና ሬስቶራንት', name: 'Cafe and Restorant', key: '11', icon: 'home', homeContentIcon: require( '../assets/Images/caferestaurant.png' ) },
        { id: 11, Ename: 'ገስት ሀውስ', name: 'Gust House', key: '12', icon: 'desktop', homeContentIcon: require( '../assets/Images/gust.png' ) },
        { id: 12, Ename: 'ሪል እስቴት', name: 'Real State', key: '13', icon: 'desktop', homeContentIcon: require( '../assets/Images/realState.jpg' ) },
        { id: 13, Ename: 'ሆቴል እና ሬስቶራንት', name: 'Hotel', key: '14', icon: 'desktop', homeContentIcon: require( '../assets/Images/HotelandRestaurant.jpg' ) },
        { id: 14, Ename: 'የቤት እንስሳት', name: 'Domestic Animals', key: '15', icon: 'desktop', homeContentIcon: require( '../assets/Images/pits.png' ) },
        { id: 15, Ename: 'ኤክስፓት', name: 'Expat', key: '16', icon: 'desktop', homeContentIcon: require( '../assets/Images/export.jpg' ) },
        { id: 16, Ename: 'ሌሎች', name: 'Others', key: '17', icon: 'laptop', homeContentIcon: require( '../assets/Images/others.jpg' ) },
        { id: 17, Ename: 'ቤት', name: 'House', key: '1', icon: 'automobile', homeContentIcon: require( '../assets/Images/house.png' ) },
        { id: 18, Ename: 'መኪና', name: 'Car', key: '2', icon: 'home', homeContentIcon: require( '../assets/Images/blueCar.png' ) },
        { id: 19, Ename: 'ሱቆች', name: 'Shopping', key: '3', icon: 'desktop', homeContentIcon: require( '../assets/Images/shops.png' ) },
        { id: 20, Ename: 'ኤሌክሮኒክስ', name: 'Electronics', key: '4', icon: 'laptop', homeContentIcon: require( '../assets/Images/electronics.jpg' ) },
        { id: 21, Ename: 'ፈርኒቸር', name: 'Furniture', key: '5', icon: 'automobile', homeContentIcon: require( '../assets/Images/caferestaurant.png' ) },
        { id: 22, Ename: 'ኮስሞቲክስ', name: 'Cosmetics Products', key: '6', icon: 'home', homeContentIcon: require( '../assets/Images/beauty.jpg' ) },
        { id: 23, Ename: 'የወጥ ቤት እቃዎች', name: 'Kitchen Items', key: '7', icon: 'desktop', homeContentIcon: require( '../assets/Images/kitchincab.png' ) },
        { id: 24, Ename: 'አልባሳት', name: 'Clothes', key: '9', icon: 'automobile', homeContentIcon: require( '../assets/Images/fashions.jpg' ) },
        { id: 25, Ename: 'አስቤዛ እና የምግብ ግብአቶች', name: 'Asbeza and Foods', key: '10', icon: 'home', homeContentIcon: require( '../assets/Images/agroFood.png' ) },
        { id: 26, Ename: 'ካፌ እና ሬስቶራንት', name: 'Cafe and Restorant', key: '11', icon: 'home', homeContentIcon: require( '../assets/Images/caferestaurant.png' ) },
        { id: 27, Ename: 'ገስት ሀውስ', name: 'Gust House', key: '12', icon: 'desktop', homeContentIcon: require( '../assets/Images/gust.png' ) },
        { id: 28, Ename: 'ሪል እስቴት', name: 'Real State', key: '13', icon: 'desktop', homeContentIcon: require( '../assets/Images/realState.jpg' ) },
        { id: 29, Ename: 'ሆቴል እና ሬስቶራንት', name: 'Hotel', key: '14', icon: 'desktop', homeContentIcon: require( '../assets/Images/HotelandRestaurant.jpg' ) },
        { id: 30, Ename: 'የቤት እንስሳት', name: 'Domestic Animals', key: '15', icon: 'desktop', homeContentIcon: require( '../assets/Images/pits.png' ) },
        { id: 31, Ename: 'ኤክስፓት', name: 'Expat', key: '16', icon: 'desktop', homeContentIcon: require( '../assets/Images/export.jpg' ) },
        { id: 32, Ename: 'ሌሎች', name: 'Others', key: '17', icon: 'laptop', homeContentIcon: require( '../assets/Images/others.jpg' ) },
    ] );
const renderItem = ({item, index}) => {
    //const text = index.name;
        return(

                                <Animatable.View
                                    animation="fadeInDownBig"
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '100%',
                                    }}>
                                    <View style={{
                                        width: '100%',
                                        top: 0, left: 0, padding: 5,
                                        backgroundColor: '#fff',
                                        borderWidth: 2,
                                        borderRadius: 15,
                                    }}>
                                    <View style={{
                                        width: '100%',
                                        flexDirection: 'row',
                                    }}>
                                    <View style={{
                                        width: '10%',
                                        //flexDirection: 'row',
                                    }}>
                                        <Image style={{ width: 50, height: 50, borderRadius: 250, resizeMode: 'contain',  shadowColor: '#000', shadowOpacity: 1, shadowOffset: { width: 0, height: 0, }, shadowRadius: 20, }} source={item.homeContentIcon} />
                                     <Ionicons
                                        name="checkmark-circle"
                                        style={{

                                            color: 'red',
                                            fontWeight: '400',
                                            fontSize: 24,
                                            top: -15,
                                            left: 30,

                                        }}

                                    />
                                    </View>
                                    <View
                                        style={{
                                            width: '85%',
                                            paddingLeft: 20,
                                        }}
                                    >
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            width: '100%',
                                        }}
                                    >
                                        <Text
                                            style={{
                                            fontWeight: 'bold',
                                        }}
                                        >

                                        Admin
                                     </Text>
                                     <Text

                                            style={{
                                            //fontWeight: 400,
                                            paddingLeft: 20,
                                            width: '100%',

                                        }}
                                     >
                                        Admin post tittle and contents
                                     </Text>
                                    </View>

                                     <Text style={{
                                            //fontWeight: 400,
                                            paddingLeft: 20,
                                            width: '100%',

                                        }}>
                                        date of post
                                     </Text>
                                    </View>

                                    </View>
                                        <View
                                            style={{
                                                width: '100%',
                                                //height: 250,
                                                alignHorizontal: 'center',
                                                //alignItems: 'center',
                                                //justifyContent: 'center',
                                            }}
                                        >
                                            <VideoPlayer

                                                //ref={(ref) => { this.player = ref // this.player.presentFullscreenPlayer();}}
                                                video={require('../assets/Images/Encryption_to_SHA256_React_Native.mp4')}
                                                videoWidth={1600}
                                                videoHeight={900}
                                                thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                                                endThumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                                                showDuration={true}
                                                //autoplay
                                                controlsTimeout={2000}
                                                disableControlsAutoHide={true}
                                                //defaultMuted={true}
                                                disableSeek={true}
                                                pauseOnPress={true}
                                                loop={true}
                                                disableFullscreen={true}
                                                resizeMode={'contain'}
                                                //muted={true}
                                                //seek={true}
                                                //onShowControls={true}
                                                //volume={Math.max(Math.min(1, volume), 0)}
                                                //resizeMode="none"
                                            />
                                        </View>
                                           <Text>
                                        Admin
                                     </Text>
                                        {/*
                                        <FontAwesome
                                            name={item.icon}
                                            color="#1ed6cd"
                                            size={20}
                                            style={{ top: 10 }}
                                        />
                                    <View style={{ width: '40%', alignItems: 'center', flex: 1, top: 0, left: 0 }}>
                                        <Text style={styles.flatItemText}>{item.name}</Text>
                                    </View>
                                    */}
                                    <View
                                        style={{
                                        width: '100%',
                                        top: 0, left: 0, padding: 0,
                                        backgroundColor: '#fff',
                                        borderWidth: 2,
                                        borderRadius: 15,
                                    }}
                                    >
                                        <TextInput
                                            placeholder="commentbox"
                                            placeholderTextColor="grey"
                                            //style={styles.textInput}
                                            autoCapitalize="none"
                                            //style={styles.textInput}
                                            autoCapitalize="none"
                                            //onChangeText={( val ) => textLEmailInputChange( val )}
                                        />
                                    </View>

                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: "space-evenly",
                                    }}>
                                        <SimpleLineIcons
                                        name="like"
                                        style={{

                                            color: 'grey',
                                            fontWeight: '400',
                                            fontSize: 32,

                                        }}

                                    />
                                    <MaterialCommunityIcons
                                        name="comment-text-outline"
                                        style={{

                                            color: 'grey',
                                            fontWeight: '400',
                                            fontSize: 32,

                                        }}

                                    />
                                    <MaterialCommunityIcons
                                        name="share"
                                        style={{

                                            color: 'grey',
                                            fontWeight: '400',
                                            fontSize: 32,

                                        }}

                                    />
                                    </View>

                                    </View>


                                </Animatable.View>
        )
    }


  return (
  <SafeAreaView>
      <StatusBar backgroundColor='#fff' barStyle="light-content" />
      <View style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <FlatList

            //onScroll={onScrollEvent({ y })}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            //getItemLayout = {getItemLayout}
            //ref={(ref) => setrefFlatList(ref)}
            data={Items}
            renderItem={renderItem}
            onScroll={(e)=>{
                    //setHmode(!hmode);
                    //alert(alert);
                    //EventRegister.emit("ChangeHeader", hmode);
                    //alert(hmode);
                    var currentOffset = e.nativeEvent.contentOffset.y;
                    var direction = currentOffset > offset ? 'down' : 'up';
                    setOffset(currentOffset);
                    //console.log(currentOffset);
                    //console.log(hmode);
                    if(direction === 'down'){
                        setHmode(true);
                        EventRegister.emit("ChangeHeader", true);
                    } else if(direction === 'up' && currentOffset === 0){
                        setHmode(false);
                        EventRegister.emit("ChangeHeader", false);
                    } else {

                    }

                }}


                    />
      </View>

  </SafeAreaView>

  );

}
const styles = StyleSheet.create({
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
    backgroundVideo: {
    //position: 'absolute',
    height: 102,
    width: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})
export default Video;
