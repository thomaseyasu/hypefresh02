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
//import Select from 'react-native-select-dropdown';
import themeContext from '../screens/themeContext';
import languageContext from '../screens/languageContext';
import userContext from '../screens/userContext';



import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import Torch from 'react-native-torch';

import AsyncStorage from '@react-native-community/async-storage';

import Login from '../screens/login';
import Register from '../screens/register';
import ForgetPassword from '../screens/forgetPassword';


import Home from '../screens/Home';
import MultipleImages from '../screens/multipleImages'
import MultipleImagesHandler from '../screens/multipleImagesHandler'
import Abouts from '../screens/Abouts';
import Programs from '../screens/Programs';
import Profile from '../screens/Profile';
import Services from '../screens/Services';
import Main from '../screens/main';
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
function MainStackScreen ({navigation, route})
{
const scheme = useColorScheme();

    const Theme = useContext(themeContext);

    const language = useContext(languageContext);

    const userDataToken = useContext(userContext);
    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} options={{

                headerTitle: null,
                headerShown: false,
            }} />

        </Stack.Navigator>
    );
}

function ServicesStackScreen ({navigation, route})
{
    const scheme = useColorScheme();

    const Theme = useContext(themeContext);

    const language = useContext(languageContext);

    const userDataToken = useContext(userContext);
    return (
        <Stack.Navigator>
            <Stack.Screen name="Services" component={Services} options={{

                headerTitle: null,
                headerShown: false,
            }} />
        </Stack.Navigator>
    );
}

function ProgramsStackScreen ({navigation, route})
{
const scheme = useColorScheme();

    const Theme = useContext(themeContext);

    const language = useContext(languageContext);

    const userDataToken = useContext(userContext);
    return (
        <Stack.Navigator>
            <Stack.Screen name="Programs" component={Programs} options={{

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

    const userDataToken = useContext(userContext);
    return (
        <NavigationContainer theme={Theme.bottomTabBG === "white" ? DefaultTheme : DarkTheme}>
            <Tab.Navigator
                screenOptions={( { route } ) => ( {
                tabBarLabelStyle: { fontSize: 8 },
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
                        }else if ( route.name === 'Groups' || route.name === 'Groups')
                        {
                            iconName = focused ? 'people-sharp' : 'people-outline';
                        } else if ( route.name === 'Likes' || route.name === 'Likes')
                        {
                            iconName = focused ? 'thumbs-up' : 'thumbs-up-outline';
                        } else if ( route.name === 'Following' || route.name === 'Following')
                        {
                            iconName = focused ? 'person-add-sharp' : 'person-add-outline';
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
                <Tab.Screen name={language.lang === 'eng' ? "Groups" : "Groups"} component={MainStackScreen}  />
                <Tab.Screen name={language.lang === 'eng' ? "Likes" : "Likes"} component={ServicesStackScreen} />
                <Tab.Screen name={language.lang === 'eng' ? "Following" : "Following"} component={ProgramsStackScreen} />
                <Tab.Screen name={language.lang === 'eng' ? "Settings" : "Settings"} component={AboutsStackScreen} />

            </Tab.Navigator>


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
