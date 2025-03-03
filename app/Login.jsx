import React, { useEffect, useState, useCallback } from "react";
import { Text,View, Button, StyleSheet, TextInput,TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons'; // For icons

const Stack = createNativeStackNavigator();

import { useTranslation } from 'react-i18next';
import { StringConstants } from '@/app/i18n/string_constants';
import { I18nManager } from "react-native";
import { UserAuth } from "./AuthContext";
import RNRestart from 'react-native-restart';
import { Restart } from 'react-native-restart'; // This package restarts the app

//import RNRestart from 'react-native-restart'

import { Updates } from 'expo';
import { reloadAppAsync } from "expo";




const Login = ({ navigation, theme, toggleTheme }) => {

    const { t, i18n } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const { user, logIn } = UserAuth();

    const [darkMode, setDarkMode] = useState(false);

   const toggleTheme1 = () => {
    toggleTheme()
    setDarkMode(!darkMode);
   }

    const changeLanguage = async (language) => {
        try {
            
            i18n
            .changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')
            .then(() => {
              I18nManager.allowRTL(i18n.language === 'ar')
              I18nManager.forceRTL(i18n.language === 'ar');
              //Restart();
              //rUpdates.reloadAsync();


            })
            .catch(err => {
              console.log('something went wrong while applying RTL',{err});
            });
        } catch (error) {
            console.error('Error changing language:', error);
        }
    };
    const onClickItem = () => {
        //Alert.alert('Item Selected', `${item.title}`);
        //navigate('ItemDetails', { item });
        //return <itemDetails route={{ params: { item } }} />
        //return <ItemDetails route={{ params: { item: item } }} />;
        //navigation.navigate('InfiniteScrollApp');
        handleSubmit();


    };

    //const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            console.log("asd")
            await logIn(email, password)
            //navigate('/')
            navigation.navigate('InfiniteScrollApp');
        } catch (error) {
            console.log(error);
            setError(error.message)
            alert(error.message);
        }
    };
    //color={darkMode ? '#fff' : '#333'}
    return (
        <View style={{ backgroundColor: theme.background, height: "100%" }}>
            {/* Header Buttons */}
      <View style={styles.header}>
        {/* Language Switch (Left Corner) */}
        <TouchableOpacity style={styles.langButton} onPress={() => changeLanguage()}>
          <Ionicons name="globe-outline" size={24}  />
          
          <Text style={[styles.buttonText]}>{i18n.language === 'ar' ? 'EN' : 'AR' }</Text>
        </TouchableOpacity>

        {/* Theme Switch (Right Corner) */}
        <TouchableOpacity style={styles.themeButton} onPress={toggleTheme1}>
          <Ionicons name={darkMode ? 'moon' : 'sunny'} size={24}  />
        </TouchableOpacity>
      </View>
            <View style={styles.container}>
                <TextInput style={styles.textBox}
                    placeholder={t('emailAddress')}
                    onChangeText={newText => setEmail(newText)}
                ></TextInput>
                <TextInput secureTextEntry={true} style={styles.textBox} placeholder={t('password')}
                    onChangeText={newText => setPassword(newText)}></TextInput>
            </View>
            <View style={[styles.buttonBG, { backgroundColor: theme.buttonBG }]}>
                <Button
                    title={t('login')}
                    onPress={handleSubmit}
                    color={"white"}
                    Login />
            </View>
            {/* <View style={styles.flxd}>
                <View style={[styles.buttonBG, { backgroundColor: theme.buttonBG }]}>
                    <Button
                        onPress={() => changeLanguage('en')}
                        title="English"
                        color={"white"}
                        Login />
                </View>
                <View style={[styles.buttonBG, { backgroundColor: theme.buttonBG }]}>
                    <Button
                        onPress={() => changeLanguage('ar')}
                        title="Arabic"
                        color={"white"}
                        Login />
                </View>

            </View> */}
            {/* <View>
                <Button title="Toggle Theme" onPress={toggleTheme} />
            </View> */}

        </View>
    )

}


export default Login;


const styles = StyleSheet.create({


    flxd: {
        flexDirection: "row",
        marginBlockEnd: 90,
        position: 'sticky'
    },

    container: {
        marginBlockStart: "50%"
    },
    buttonBG: {
        // backgroundColor: 'red',
        marginHorizontal: 60,
        marginTop: 30,
        borderRadius: 8
    },
    langButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
      },
      buttonText: {
        fontSize: 16,
        color: '#333',
      },
    textBox: {
        flexDirection:'row-reverse',
        padding: 10,
        backgroundColor: 'white',
        borderColor: 'white',
        height: 60,
        // width:"50%",
        justifyContent: 'center',
        alignContent: '',
        borderRadius: 5,
        marginHorizontal: 30,
        marginVertical: 5,

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 50,
        left: 20,
        right: 20,
      },
})