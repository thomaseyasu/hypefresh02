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
const Follower = () =>
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
                                        top: 0, left: 0,
                                        backgroundColor: '#fff',
                                        borderWidth: 2,
                                        borderRadius: 15,
                                        marginBottom: 20,
                                        padding: 20,
                                    }}>
                                    <View style={{
                                        width: '100%',
                                        flexDirection: 'row',
                                        padding: 20,
                                    }}>
                                    <View>
                                        <Image style={{ width: 70, height: 70, borderRadius: 250, resizeMode: 'contain',  shadowColor: '#000', shadowOpacity: 1, shadowOffset: { width: 0, height: 0, }, shadowRadius: 20, }} source={item.homeContentIcon} />
                                     {/*

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

                                     */}
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

                                        Friend Full Name
                                     </Text>
                                    </View>

                                     <Text>
                                        Last seen at <Text style={{fontWeight: 'bold',}}>10:30 PM</Text>
                                     </Text>
                                    </View>

                                    </View>
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


                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: "space-evenly",
                                    }}>

                                        <Ionicons
                                        name="ios-chatbox-ellipses-outline"
                                        style={{

                                            color: 'grey',
                                            fontWeight: '400',
                                            fontSize: 32,

                                        }}

                                    />
                                    <Ionicons
                                        name="ios-call-outline"
                                        style={{

                                            color: 'grey',
                                            fontWeight: '400',
                                            fontSize: 32,

                                        }}

                                    />
                                    <Ionicons
                                        name="videocam-outline"
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
})
export default Follower;
