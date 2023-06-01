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
import VideoPlayer from 'react-native-video-player';
const Home = () =>
{

    const [hmode, setHmode] = useState(false);
    const [offset, setOffset] = useState({});
const [ Items, setItems ] = useState( [
        { id: 1,  type: "photo",Ename: 'ቤት', name: 'House', key: '1', icon: 'automobile', homeContentIcon: require( '../assets/Images/house.png' ) },
        { id: 2,  type: "video",Ename: 'መኪና', name: 'Car', key: '2', icon: 'home', homeContentIcon: require( '../assets/Images/Encryption_to_SHA256_React_Native.mp4' ) },
        { id: 3,  type: "photo",Ename: 'ሱቆች', name: 'Shopping', key: '3', icon: 'desktop', homeContentIcon: require( '../assets/Images/shops.png' ) },
        { id: 4,  type: "video",Ename: 'ኤሌክሮኒክስ', name: 'Electronics', key: '4', icon: 'laptop', homeContentIcon: require( '../assets/Images/Encryption_to_SHA256_React_Native.mp4' ) },
        { id: 5,  type: "photo",Ename: 'ፈርኒቸር', name: 'Furniture', key: '5', icon: 'automobile', homeContentIcon: require( '../assets/Images/caferestaurant.png' ) },
        { id: 6,  type: "photo",Ename: 'ኮስሞቲክስ', name: 'Cosmetics Products', key: '6', icon: 'home', homeContentIcon: require( '../assets/Images/beauty.jpg' ) },
        { id: 7,  type: "video",Ename: 'የወጥ ቤት እቃዎች', name: 'Kitchen Items', key: '7', icon: 'desktop', homeContentIcon: require( '../assets/Images/Encryption_to_SHA256_React_Native.mp4' ) },
        { id: 8,  type: "photo",Ename: 'አልባሳት', name: 'Clothes', key: '9', icon: 'automobile', homeContentIcon: require( '../assets/Images/fashions.jpg' ) },
        { id: 9,  type: "photo",Ename: 'አስቤዛ እና የምግብ ግብአቶች', name: 'Asbeza and Foods', key: '10', icon: 'home', homeContentIcon: require( '../assets/Images/agroFood.png' ) },
        { id: 10, type: "video", Ename: 'ካፌ እና ሬስቶራንት', name: 'Cafe and Restorant', key: '11', icon: 'home', homeContentIcon: require( '../assets/Images/Encryption_to_SHA256_React_Native.mp4' ) },
        { id: 11, type: "photo", Ename: 'ገስት ሀውስ', name: 'Gust House', key: '12', icon: 'desktop', homeContentIcon: require( '../assets/Images/gust.png' ) },
        { id: 12, type: "video", Ename: 'ሪል እስቴት', name: 'Real State', key: '13', icon: 'desktop', homeContentIcon: require( '../assets/Images/Encryption_to_SHA256_React_Native.mp4' ) },
        { id: 13, type: "photo", Ename: 'ሆቴል እና ሬስቶራንት', name: 'Hotel', key: '14', icon: 'desktop', homeContentIcon: require( '../assets/Images/HotelandRestaurant.jpg' ) },
        { id: 14, type: "photo", Ename: 'የቤት እንስሳት', name: 'Domestic Animals', key: '15', icon: 'desktop', homeContentIcon: require( '../assets/Images/pits.png' ) },
        { id: 15, type: "video", Ename: 'ኤክስፓት', name: 'Expat', key: '16', icon: 'desktop', homeContentIcon: require( '../assets/Images/Encryption_to_SHA256_React_Native.mp4' ) },
        { id: 16, type: "photo", Ename: 'ሌሎች', name: 'Others', key: '17', icon: 'laptop', homeContentIcon: require( '../assets/Images/others.jpg' ) },
        { id: 17, type: "video", Ename: 'ቤት', name: 'House', key: '1', icon: 'automobile', homeContentIcon: require( '../assets/Images/Encryption_to_SHA256_React_Native.mp4' ) },
        { id: 18, type: "photo", Ename: 'መኪና', name: 'Car', key: '2', icon: 'home', homeContentIcon: require( '../assets/Images/blueCar.png' ) },
        { id: 19, type: "photo", Ename: 'ሱቆች', name: 'Shopping', key: '3', icon: 'desktop', homeContentIcon: require( '../assets/Images/shops.png' ) },
        { id: 20, type: "video", Ename: 'ኤሌክሮኒክስ', name: 'Electronics', key: '4', icon: 'laptop', homeContentIcon: require( '../assets/Images/Encryption_to_SHA256_React_Native.mp4' ) },
        { id: 21, type: "photo", Ename: 'ፈርኒቸር', name: 'Furniture', key: '5', icon: 'automobile', homeContentIcon: require( '../assets/Images/caferestaurant.png' ) },
        { id: 22, type: "photo", Ename: 'ኮስሞቲክስ', name: 'Cosmetics Products', key: '6', icon: 'home', homeContentIcon: require( '../assets/Images/beauty.jpg' ) },
        { id: 23, type: "video", Ename: 'የወጥ ቤት እቃዎች', name: 'Kitchen Items', key: '7', icon: 'desktop', homeContentIcon: require( '../assets/Images/Encryption_to_SHA256_React_Native.mp4' ) },
        { id: 24, type: "photo", Ename: 'አልባሳት', name: 'Clothes', key: '9', icon: 'automobile', homeContentIcon: require( '../assets/Images/fashions.jpg' ) },
        { id: 25, type: "video", Ename: 'አስቤዛ እና የምግብ ግብአቶች', name: 'Asbeza and Foods', key: '10', icon: 'home', homeContentIcon: require( '../assets/Images/Encryption_to_SHA256_React_Native.mp4' ) },
        { id: 26, type: "photo", Ename: 'ካፌ እና ሬስቶራንት', name: 'Cafe and Restorant', key: '11', icon: 'home', homeContentIcon: require( '../assets/Images/caferestaurant.png' ) },
        { id: 27, type: "video", Ename: 'ገስት ሀውስ', name: 'Gust House', key: '12', icon: 'desktop', homeContentIcon: require( '../assets/Images/Encryption_to_SHA256_React_Native.mp4' ) },
        { id: 28, type: "photo", Ename: 'ሪል እስቴት', name: 'Real State', key: '13', icon: 'desktop', homeContentIcon: require( '../assets/Images/realState.jpg' ) },
        { id: 29, type: "photo", Ename: 'ሆቴል እና ሬስቶራንት', name: 'Hotel', key: '14', icon: 'desktop', homeContentIcon: require( '../assets/Images/HotelandRestaurant.jpg' ) },
        { id: 30, type: "photo", Ename: 'የቤት እንስሳት', name: 'Domestic Animals', key: '15', icon: 'desktop', homeContentIcon: require( '../assets/Images/pits.png' ) },
        { id: 31, type: "photo", Ename: 'ኤክስፓት', name: 'Expat', key: '16', icon: 'desktop', homeContentIcon: require( '../assets/Images/export.jpg' ) },
        { id: 32, type: "photo", Ename: 'ሌሎች', name: 'Others', key: '17', icon: 'laptop', homeContentIcon: require( '../assets/Images/others.jpg' ) },
    ] );
const renderItem = ({item, index}) => {
    //const text = index.name;
        return(

                                <Animatable.View
                                    animation="fadeInDownBig"
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '98%',
                                    }}>
                                    <View style={{
                                        width: '100%',
                                        top: 0, left: 0, padding: 5,
                                        backgroundColor: '#fff',
                                        borderWidth: 2,
                                        borderRadius: 5,
                                        marginBottom: 10,
                                        marginLeft: 10,
                                    }}>
                                    <View style={{
                                        width: '100%',
                                        flexDirection: 'row',
                                    }}>
                                    <View>
                                        <Image style={{ width: 50, height: 50, borderRadius: 250, resizeMode: 'contain',  shadowColor: '#000', shadowOpacity: 1, shadowOffset: { width: 0, height: 0, }, shadowRadius: 20, }} source={require( '../assets/Images/hypefresh.jpg' )} />
                                     <Ionicons
                                        name="checkmark-circle"
                                        style={{

                                            color: 'blue',
                                            fontWeight: '400',
                                            fontSize: 24,
                                            top: -15,
                                            left: 30,

                                        }}

                                    />
                                    </View>
                                    <View
                                        style={{
                                            paddingLeft: 20,
                                        }}
                                    >
                                    <View
                                        style={{
                                            flexDirection: 'row',
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

                                        }}
                                     >
                                        Admin post title
                                     </Text>
                                    </View>

                                     <Text>
                                        date of post
                                     </Text>
                                    </View>

                                    </View>
                                        {item.type === "photo" ?
                                            (<Image style={{ width: 380, height: 250, resizeMode: 'contain', shadowColor: '#000', shadowOpacity: 1, shadowOffset: { width: 0, height: 0, }, shadowRadius: 20, alignItems: 'center', justifyContent: 'center', }} source={item.homeContentIcon} />
                                        ) : item.type === "video" ? (
                                        <View
                                            style={{
                                                width: '99%',
                                                //height: 250,
                                                alignHorizontal: 'center',
                                                //alignItems: 'center',
                                                //justifyContent: 'center',
                                            }}
                                        ><VideoPlayer

                                                //ref={(ref) => { this.player = ref // this.player.presentFullscreenPlayer();}}
                                                video={item.homeContentIcon}
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
                                            /></View>) : (
                                                <View>
                                                </View>
                                            )}
                                        {/*
                                        <Text>
                                        Admin
                                     </Text>
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

                                    <View style={{
                                        width: '100%',
                                        flexDirection: 'row',
                                        justifyContent: "space-evenly",
                                    }}>
                                    <View
                                        style={{
                                        width: '70%',
                                        top: 0, left: 0, padding: 0,
                                        backgroundColor: '#fff',
                                        borderWidth: 2,
                                        borderRadius: 15,
                                        marginTop: 30,
                                        marginBottom: 30,

                                    }}
                                    >
                                        <TextInput
                                            placeholder="Write Your Comment ..."
                                            placeholderTextColor="grey"
                                            //style={styles.textInput}
                                            autoCapitalize="none"
                                            //style={styles.textInput}
                                            autoCapitalize="none"
                                            style={{
                                                padding: 10,
                                            }}
                                            //onChangeText={( val ) => textLEmailInputChange( val )}
                                        />

                                    </View>

                                    <View style={{
                                        marginTop: 30,
                                        marginBottom: 20,

                                    }}>
                                        <Ionicons
                                        //name="send"
                                        name="send"
                                        style={{

                                            color: 'black',
                                            fontWeight: '400',
                                            fontSize: 48,

                                        }}

                                    />
                                    <Text>
                                        Send
                                    </Text>
                                    </View>

                                    </View>


                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: "space-evenly",
                                        marginBottom: 10,
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
            //vertical
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
})
export default Home;
