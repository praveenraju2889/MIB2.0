import React, { useEffect, useState, useCallback } from "react";
import { View, Button, StyleSheet, TextInput } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { useTranslation } from 'react-i18next';
import { StringConstants } from '@/app/i18n/string_constants';
import { I18nManager } from "react-native";
import { UserAuth } from "./AuthContext";
import RNRestart from 'react-native-restart';
//import RNRestart from 'react-native-restart'

import { Updates } from 'expo';
import { reloadAppAsync } from "expo";




const Login = ({ navigation, theme, toggleTheme }) => {

    const { t, i18n } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const { user, logIn } = UserAuth();

    const changeLanguage = async (language) => {
        try {
            await i18n.changeLanguage(language);
            if (language === 'ar') {
                I18nManager.allowRTL(true);
                //I18nManager
                console.log(I18nManager.isRTL);
            } else {
                I18nManager.allowRTL(false);
            }


            // I18nManager.
            I18nManager.forceRTL(language === 'ar');
            //Updates.reload();
            //reloadAppAsync()


            console.log(I18nManager.isRTL);
            console.log(language)
        } catch (error) {
            console.error('Error changing language:', error);
        }
    };
    const onClickItem = () => {
        //Alert.alert('Item Selected', `${item.title}`);
        //navigate('ItemDetails', { item });
        //return <itemDetails route={{ params: { item } }} />
        //return <ItemDetails route={{ params: { item: item } }} />;
        navigation.navigate('InfiniteScrollApp');
        //handleSubmit();


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
        }
    };
    return (
        <View style={{ backgroundColor: theme.background, height: "100%" }}>
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
                    onPress={onClickItem}
                    color={"white"}
                    Login />
            </View>
            <View style={styles.flxd}>
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

            </View>
            <View>
                <Button title="Toggle Theme" onPress={toggleTheme} />
            </View>

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
    textBox: {
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

    }
})