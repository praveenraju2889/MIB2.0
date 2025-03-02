import React from "react";
import { View, Button, StyleSheet, TextInput } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { useTranslation } from 'react-i18next';
import {StringConstants} from '@/app/i18n/string_constants';
import { I18nManager } from "react-native";




const Login = ({ navigation ,theme,toggleTheme}) => {

    const { t ,i18n} = useTranslation();

    const changeLanguage = async (language) => {
        try {
          await i18n.changeLanguage(language);
         
        //I18nManager.allowRTL(true);
          
        I18nManager.forceRTL(language === 'ar');

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


    };
    return (
        <View style= {{backgroundColor:theme.background,height:"100%"}}>
            <View style={styles.container}>
                <TextInput style={styles.textBox} placeholder={t('emailAddress')}></TextInput>
                <TextInput style={styles.textBox} placeholder={t('password')}></TextInput>
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


    flxd:{
        flexDirection:"row",
        marginBlockEnd:90,
        position:'sticky'
    },

    container:{
        marginBlockStart:"50%"
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