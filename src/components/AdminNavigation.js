import React, { useState, useContext, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
    Image,
    TextInput,
    Keyboard,
    Button,
    Dimensions,
    useColorScheme,
    Animated,
} from 'react-native';


import { Searchbar } from 'react-native-paper';
//import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
//import Select from 'react-native-select-dropdown';
import themeContext from '../screens/themeContext';
import languageContext from '../screens/languageContext';
import userContext from '../screens/userContext';
import headerContext from '../screens/headerContext';
//import header from '../screens/header';



import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import Torch from 'react-native-torch';

import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-community/async-storage';

import Login from '../screens/login';
import Register from '../screens/register';
import ForgetPassword from '../screens/forgetPassword';


import Home from '../screens/Home';
import MultipleImages from '../screens/multipleImages'
import MultipleImagesHandler from '../screens/multipleImagesHandler'
import Abouts from '../screens/Abouts';
import Following from '../screens/following';
import Profile from '../screens/Profile';
import Likes from '../screens/likes';
import Groups from '../screens/groups';
import Follower from '../screens/follower';
import Photo from '../screens/photo';
import Video from '../screens/video';
import Music from '../screens/music';
import Radio from '../screens/radio';
import Friends from '../screens/Friends';
import Allstyle from '../screens/allstyle';



{/*
const operation = ["Addis Ababa", "Amhara Region", "Afar Region", "Benshangul Region", "Debub Region", "Dire Dawa Region", "Gambela Region", "Hareri Region", "Oromia Region", "Somalia Region", "SNNP Region", "Tigrai Region", "Woliyta Region", "others"];

*/}

const fullScreenWidth = Dimensions.get( 'window' ).width;

    //const [mode, setMode] = useState(false);


const onSelect = async() => {
try
            {
            let userToken = await AsyncStorage.getItem( 'userToken' );
            var userToken1 = JSON.parse( userToken );
            userToken2 = userToken1.userToken;
            alert(JSON.stringify(datas.path));
            }
            catch ( error )
        {
          alert( error );
        }


}



const Stack = createStackNavigator();



function HomeStackScreen ({navigation, route})
{
const scheme = useColorScheme();

    const Theme = useContext(themeContext);

    const language = useContext(languageContext);
    const header = useContext(headerContext);

    const userDataToken = useContext(userContext);
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{

                headerTitle: null,
                headerShown: false,
            }} />

        </Stack.Navigator>
    );
}
function GroupsStackScreen ({navigation, route})
{
const scheme = useColorScheme();

    const Theme = useContext(themeContext);

    const language = useContext(languageContext);
    const header = useContext(headerContext);

    const userDataToken = useContext(userContext);
    return (
        <Stack.Navigator>
            <Stack.Screen name="Groups" component={Groups} options={{

                headerTitle: null,
                headerShown: false,
            }} />

        </Stack.Navigator>
    );
}

function LikesStackScreen ({navigation, route})
{
    const scheme = useColorScheme();

    const Theme = useContext(themeContext);

    const language = useContext(languageContext);
    const header = useContext(headerContext);

    const userDataToken = useContext(userContext);
    return (
        <Stack.Navigator>
            <Stack.Screen name="Likes" component={Likes} options={{

                headerTitle: null,
                headerShown: false,
            }} />
        </Stack.Navigator>
    );
}

function FollowingStackScreen ({navigation, route})
{
const scheme = useColorScheme();

    const Theme = useContext(themeContext);

    const language = useContext(languageContext);
    const header = useContext(headerContext);

    const userDataToken = useContext(userContext);
    return (
        <Stack.Navigator>
            <Stack.Screen name="Following" component={Following} options={{

                headerTitle: null,
                headerShown: false,
            }} />

        </Stack.Navigator>
    );
}

function FriendsStackScreen ({navigation, route})
{
const scheme = useColorScheme();

    const Theme = useContext(themeContext);

    const language = useContext(languageContext);
    const header = useContext(headerContext);

    const userDataToken = useContext(userContext);
    return (
        <Stack.Navigator>
            <Stack.Screen name="Friends" component={Friends} options={{

                headerTitle: null,
                headerShown: false,
            }} />

        </Stack.Navigator>
    );
}

function FollowerStackScreen ({navigation, route})
{
const scheme = useColorScheme();

    const Theme = useContext(themeContext);

    const language = useContext(languageContext);
    const header = useContext(headerContext);

    const userDataToken = useContext(userContext);
    return (
        <Stack.Navigator>
            <Stack.Screen name="Follower" component={Follower} options={{

                headerTitle: null,
                headerShown: false,
            }} />

        </Stack.Navigator>
    );
}

function PhotoStackScreen ({navigation, route})
{
const scheme = useColorScheme();

    const Theme = useContext(themeContext);

    const language = useContext(languageContext);
    const header = useContext(headerContext);

    const userDataToken = useContext(userContext);
    return (
        <Stack.Navigator>
            <Stack.Screen name="Photo" component={Photo} options={{

                headerTitle: null,
                headerShown: false,
            }} />

        </Stack.Navigator>
    );
}
function MusicStackScreen ({navigation, route})
{
const scheme = useColorScheme();

    const Theme = useContext(themeContext);

    const language = useContext(languageContext);
    const header = useContext(headerContext);

    const userDataToken = useContext(userContext);
    return (
        <Stack.Navigator>
            <Stack.Screen name="Music" component={Music} options={{

                headerTitle: null,
                headerShown: false,
            }} />

        </Stack.Navigator>
    );
}

function VideoStackScreen ({navigation, route})
{
const scheme = useColorScheme();

    const Theme = useContext(themeContext);

    const language = useContext(languageContext);
    const header = useContext(headerContext);

    const userDataToken = useContext(userContext);
    return (
        <Stack.Navigator>
            <Stack.Screen name="Video" component={Video} options={{

                headerTitle: null,
                headerShown: false,
            }} />

        </Stack.Navigator>
    );
}


function AboutsStackScreen ({navigation, route})
{
const scheme = useColorScheme();

    const Theme = useContext(themeContext);

    const language = useContext(languageContext);
    const header = useContext(headerContext);

    const userDataToken = useContext(userContext);
    return (
        <Stack.Navigator>
            <Stack.Screen name="ስለ" component={Abouts} options={{

                headerTitle: null,
                headerShown: false,
            }} />

        </Stack.Navigator>
    );
}







const TopTab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

const Drawer = createDrawerNavigator();



export default function navigation ( props )
{
    const scheme = useColorScheme();

    const Theme = useContext(themeContext);

    const language = useContext(languageContext);
    const header = useContext(headerContext);

    const userDataToken = useContext(userContext);
    return (
        <NavigationContainer theme={Theme.bottomTabBG === "white" ? DefaultTheme : DarkTheme}>
            <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            //vertical={true}
            >
            {header.showing === 'false' ?

                <Animatable.View
                animation="bounceIn"
                style={{
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',

            }}
            >

                <Image style={{ width: '100%', height: 150, shadowColor: '#000', shadowOpacity: 1, shadowOffset: { width: 0, height: 0, }, shadowRadius: 20, }}
                        source={require( '../assets/Images/hfbackground.jpg' )} />
                    <Image style={{ width: '25%', height: 100, top: -50, borderRadius: 50, resizeMode: 'cover', shadowColor: '#000', shadowOpacity: 1, shadowOffset: { width: 0, height: 0, }, shadowRadius: 20, resizeMode: 'contain' }}
                        source={require( '../assets/Images/hypefresh.jpg' )} />

                <View style={{

                    flexDirection: 'row',
                    //textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',

                }}>
                <Text style={{

                    color: '#000',
                    textAlign: 'center',
                    fontWeight: '400',
                    fontSize: 24,
                    top: -50,
                    paddingLeft: 10,

                }}>
                    admin
                </Text>
                <Ionicons

                        name="checkmark-circle"
                        style={{

                            color: 'red',
                            textAlign: 'center',
                            fontWeight: '400',
                            fontSize: 24,
                            top: -50,
                            paddingLeft: 10,

                        }}

                    />
            </View>
            <View style={{

                    flexDirection: 'row',
                    //textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: -30,

                }}>
                <ScrollView horizontal>
                    <View style={{
                            backgroundColor: 'grey',
                            padding: 10,
                            marginEnd: 10,
                            marginStart: 10,
                            borderRadius: 20,
                            borderWeight: 1,}}>
                        <Entypo

                        name="folder-images"
                        style={{

                            color: 'red',
                            textAlign: 'center',
                            fontWeight: '400',
                            fontSize: 48,
                            //top: -50,

                        }}
                    />
                    <Text style={{color: '#fff'}}>
                        Upload
                    </Text>
                    </View>
                    <View style={{
                            backgroundColor: 'grey',
                            padding: 10,
                            marginEnd: 10,
                            marginStart: 10,
                            borderRadius: 20,
                            borderWeight: 1,}}>
                        <Entypo

                        name="folder-music"
                        style={{

                            color: 'red',
                            textAlign: 'center',
                            fontWeight: '400',
                            fontSize: 48,
                            //top: -50,

                        }}
                    />
                    <Text style={{color: '#fff'}}>
                        Upload
                    </Text>
                    </View>
                    <View style={{
                            backgroundColor: 'grey',
                            padding: 10,
                            marginEnd: 10,
                            marginStart: 10,
                            borderRadius: 20,
                            borderWeight: 1,}}>
                        <Entypo

                        name="folder-video"
                        style={{

                            color: 'red',
                            textAlign: 'center',
                            fontWeight: '400',
                            fontSize: 48,
                            //top: -50,

                        }}
                    />
                    <Text style={{color: '#fff'}}>
                        Upload
                    </Text>
                    </View>
                    <View style={{
                            backgroundColor: 'grey',
                            padding: 10,
                            marginEnd: 10,
                            marginStart: 10,
                            borderRadius: 20,
                            borderWeight: 1,}}>
                        <Entypo

                        name="game-controller"
                        style={{

                            color: 'red',
                            textAlign: 'center',
                            fontWeight: '400',
                            fontSize: 48,
                            //top: -50,

                        }}
                    />
                    <Text style={{color: '#fff'}}>
                        Upload
                    </Text>
                    </View>
                    <View style={{
                            backgroundColor: 'grey',
                            padding: 10,
                            marginEnd: 10,
                            marginStart: 10,
                            borderRadius: 20,
                            borderWeight: 1,}}>
                        <Entypo

                        name="location"
                        style={{

                            color: 'red',
                            textAlign: 'center',
                            fontWeight: '400',
                            fontSize: 48,
                            //top: -50,

                        }}
                    />
                    <Text style={{color: '#fff'}}>
                        Upload
                    </Text>
                    </View>
                    <View style={{
                            backgroundColor: 'grey',
                            padding: 10,
                            marginEnd: 10,
                            marginStart: 10,
                            borderRadius: 20,
                            borderWeight: 1,}}>
                        <Entypo

                        name="megaphone"
                        style={{

                            color: 'red',
                            textAlign: 'center',
                            fontWeight: '400',
                            fontSize: 48,
                            //top: -50,

                        }}
                    />
                    <Text style={{color: '#fff'}}>
                        Upload
                    </Text>
                    </View>
                    <View style={{
                            backgroundColor: 'grey',
                            padding: 10,
                            marginEnd: 10,
                            marginStart: 10,
                            borderRadius: 20,
                            borderWeight: 1,}}>
                        <Entypo

                        name="quote"
                        style={{

                            color: 'red',
                            textAlign: 'center',
                            fontWeight: '400',
                            fontSize: 48,
                            //top: -50,

                        }}
                    />
                    <Text style={{color: '#fff'}}>
                        Upload
                    </Text>
                    </View>
                    <View style={{
                            backgroundColor: 'grey',
                            padding: 10,
                            marginEnd: 10,
                            marginStart: 10,
                            borderRadius: 20,
                            borderWeight: 1,}}>
                        <Entypo

                        name="shopping-cart"
                        style={{

                            color: 'red',
                            textAlign: 'center',
                            fontWeight: '400',
                            fontSize: 48,
                            //top: -50,

                        }}
                    />
                    <Text style={{color: '#fff'}}>
                        Upload
                    </Text>
                    </View>
                    <View style={{
                            backgroundColor: 'grey',
                            padding: 10,
                            marginEnd: 10,
                            marginStart: 10,
                            borderRadius: 20,
                            borderWeight: 1,}}>
                        <Entypo

                        name="soundcloud"
                        style={{

                            color: 'red',
                            textAlign: 'center',
                            fontWeight: '400',
                            fontSize: 48,
                            //top: -50,

                        }}
                    />
                    <Text style={{color: '#fff'}}>
                        Upload
                    </Text>
                    </View>
                </ScrollView>
            </View>

            </Animatable.View>

             : <View></View>}
            <Tab.Navigator
                screenOptions={( { route } ) => ( {
                tabBarLabelStyle: { fontSize: 8 },
                lazy: true,
                //swipeEnabled: false,
                tabBarScrollEnabled: true,
                tabBarItemStyle: { width: 90 },
                tabBarStyle: { backgroundColor: 'white' },
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'black',
                    //headerTitle: () => <Text>Header</Text>,
                    //color: Allstyle.container.backgroundColor,



                    tabBarIcon: ( { focused, color, size, padding } ) =>
                    {
                        let iconName;

			if ( route.name === 'Timeline' || route.name === 'Timeline')
                        {
                            iconName = focused ? 'apps' : 'apps-outline';
                        } else if ( route.name === 'Friends' || route.name === 'Friends')
                        {
                            iconName = focused ? 'person-sharp' : 'person-outline';
                        } else if ( route.name === 'Groups' || route.name === 'Groups')
                        {
                            iconName = focused ? 'people-sharp' : 'people-outline';
                        } else if ( route.name === 'Likes' || route.name === 'Likes')
                        {
                            iconName = focused ? 'thumbs-up' : 'thumbs-up-outline';
                        } else if ( route.name === 'Following' || route.name === 'Following')
                        {
                            iconName = focused ? 'person-add-sharp' : 'person-add-outline';
                        } else if ( route.name === 'Follower' || route.name === 'Follower')
                        {
                            iconName = focused ? 'people-sharp' : 'people-outline';
                        } else if ( route.name === 'Photo' || route.name === 'Photo')
                        {
                            iconName = focused ? 'images' : 'images-outline';
                        }  else if ( route.name === 'Music' || route.name === 'Music')
                        {
                            iconName = focused ? 'musical-notes' : 'musical-notes-outline';
                        } else if ( route.name === 'Video' || route.name === 'Video')
                        {
                            iconName = focused ? 'film' : 'film-outline';
                        } else if ( route.name === 'Settings' || route.name === 'Settings')
                        {
                            iconName = focused ? 'options' : 'options-outline';
                        }
                        return (

                            <Ionicons
                                name={iconName}
                                size={18}
                                color={color}
                                style={{ paddingBottom: padding }}
                            />
                        );
                    },

                } )}





                /*
                tabBarOptions={{
                    //size: 38,
                        //focused: false;
                    //activeTintColor: Allstyle.container.backgroundColor,
                    //inactiveTintColor: Theme.IconColor,
                    //labelStyle: { fontSize: 9, fontWeight: 'bold' },
                    //style: { position: 'absolute', bottom: 0, left: 20, right: 20, evaluation: 0, backgroundColor: Theme.bottomTabBG, borderRadius: 15, height: 70 },
                    //options={{tabBarShowLabel: false }}
                }}

                */



            >

                <Tab.Screen name={language.lang === 'eng' ? "Timeline" : "Timeline"} component={HomeStackScreen} />
                <Tab.Screen name={language.lang === 'eng' ? "Friends" : "Friends"} component={FriendsStackScreen}  />
                <Tab.Screen name={language.lang === 'eng' ? "Groups" : "Groups"} component={GroupsStackScreen}  />
                <Tab.Screen name={language.lang === 'eng' ? "Likes" : "Likes"} component={LikesStackScreen} />
                <Tab.Screen name={language.lang === 'eng' ? "Following" : "Following"} component={FollowingStackScreen} />
                <Tab.Screen name={language.lang === 'eng' ? "Follower" : "Follower"} component={FollowerStackScreen} />
                <Tab.Screen name={language.lang === 'eng' ? "Photo" : "Photo"} component={PhotoStackScreen} />
                <Tab.Screen name={language.lang === 'eng' ? "Music" : "Music"} component={MusicStackScreen} />
                <Tab.Screen name={language.lang === 'eng' ? "Video" : "Video"} component={VideoStackScreen} />
                <Tab.Screen name={language.lang === 'eng' ? "Settings" : "Settings"} component={AboutsStackScreen} />

            </Tab.Navigator>
            </ScrollView>


        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
        headerItems: {
            marginEnd: 10,
        },
    });



    /*
            <Drawer.Navigator>
                <Drawer.Screen name="ቢዝነስ" component={HomeStackScreen} />
                <Drawer.Screen name="አዳዲስ ቢዝነስ" component={NewPostsStackScreen} />
                <Drawer.Screen name="አስገቡ" component={AddStackScreen} />
                <Drawer.Screen name="ስራ ማስታዎቅያ" component={MainStackScreen} />
                <Drawer.Screen name="ስለ" component={AboutsStackScreen} />
              </Drawer.Navigator>
            */
