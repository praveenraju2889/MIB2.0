import React from "react";
import { View,Text, Image, StyleSheet, ScrollView, FlatList } from "react-native"


const ItemDetails = ({ route }) => {
    const item = route.params.item;
    console.log(item);
    return (

        <View style={styles.containerBG}>
        <ScrollView style={styles.container}>

            <Text style={styles.title}>{item.title}</Text>
            <Image source={{ uri: item.images[0] }} style={styles.image1} />
            <Text style={styles.description}>{item.description}</Text>
            <View></View>
            <Text style={styles.text}>Rating : {item.rating}</Text>
            <Text style={styles.text}>Warranty Information : {item.warrantyInformation}</Text>
            <Text style={styles.text}>Return Policy : {item.returnPolicy}</Text>
            <Text style={styles.text}>Price : {item.price}</Text>
            <Text style={styles.text}>Shipping Information : {item.shippingInformation}</Text>
            <Text style={styles.text}>Category : {item.category}</Text>
            
        </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        borderBlockColor: 'red',
        backgroundColor: 'white',
       // height: "100%",
        marginVertical: 20,
        marginHorizontal: 30
        //shadowColor: 'black',
    },
    containerBG: {
        flex: 1,
        flexDirection: 'column',
        borderBlockColor: 'red',
        backgroundColor: 'white',
       
    },
    
    text: {
        fontFamily: "SpaceMono-Regular",
        // marginVertical: 10,
        // marginBlockStart:5,
        // marginHorizontal: 10,
        //width:"80%",
        color: 'rgba(0, 0, 0, 0.47)',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'left',
    },


    title: {
        fontFamily: "SpaceMono-Regular",
        //fontStyle:'normal',
        fontSize: 25,
        marginVertical: 5,
        //marginHorizontal: 16,
        textAlign: 'left',

    },
    description: {
        fontFamily: "SpaceMono-Regular",
        //fontStyle:'normal',
        fontSize: 12,
        marginVertical: 5,
        //marginHorizontal: 16,
        textAlign: 'left',

    },
    
    
    image1: {
        //flex:1,
        width: 300,
        height: 300,
        resizeMode:"stretch",
        borderRadius: 5,
    },
   
});

export default ItemDetails;