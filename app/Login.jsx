import React from "react";
import { View, Button, StyleSheet, TextInput } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const Login = ({ navigation }) => {

    const onClickItem = () => {
        //Alert.alert('Item Selected', `${item.title}`);
        //navigate('ItemDetails', { item });
        //return <itemDetails route={{ params: { item } }} />
        //return <ItemDetails route={{ params: { item: item } }} />;
        navigation.navigate('InfiniteScrollApp');


    };
    return (
        <View>
            <View style={styles.container}>
                <TextInput style={styles.textBox} placeholder="Username"></TextInput>
                <TextInput style={styles.textBox} placeholder="Password"></TextInput>
            </View>
            <View style={styles.buttonBG}>
                <Button
                    title="Login"
                    onPress={onClickItem}
                    color={"white"}
                    Login />
            </View>
            <View style={styles.flxd}>
            <View style={styles.buttonBG}>
                <Button
                    title="English"
                    color={"white"}
                    Login />
            </View>
            <View style={styles.buttonBG}>
                <Button
                    title="Arabic"
                    color={"white"}
                    Login />
            </View>

            </View>
        </View>
    )

}


export default Login;
const styles = StyleSheet.create({


    flxd:{
        flexDirection:"row",
        marginBlockEnd:100
    },

    container:{
        marginBlockStart:"50%"
    },
    buttonBG: {
        backgroundColor: 'red',
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
        alignContent: 'center',
        borderRadius: 5,
        marginHorizontal: 30,
        marginVertical: 5,
    }
})