import React, { useState } from "react";
import { Button, View, Text, Image, StyleSheet, ScrollView, FlatList } from "react-native"
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { useTranslation } from 'react-i18next';
import { AsyncStorage } from 'react-native';



const Item = ({ title }) => (
    <View style={styles.containerComment}>
        <Text style={styles.textReviewsTitle}>{title.reviewerName}</Text>

        <Text style={styles.textComments}>Comments: {title.comment}</Text>
        <StarRatingDisplay rating={title.rating} starSize={25} color="#03a9fc" />

    </View>
);

const ItemDetails = ({ route, navigation }) => {
    const item = route.params.item;
    //const [reviews,setReviews]=useState([]);
    //setReviews(item.reviews);// item.reviews;
    //console.log(reviews);


    const { t, i18n } = useTranslation();

    const handleSubmit = async (item) => {
        //route.popTo

        try {
            await AsyncStorage.setItem(
                item.id,
            );
        } catch (error) {
            // Error saving data
        }
        navigation.popTo('InfiniteScrollApp')
        // route.popTo('InfiniteScrollApp')
    }
    return (
        //reviews
        <View style={styles.containerBG} showsVerticalScrollIndicator={false}>
            <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>

                <Text style={styles.title}>{item.title}</Text>
                <Image source={{ uri: item.images[0] }} style={styles.image1} />
                <Text style={styles.description}>{item.description}</Text>
                <View>
                <Text style={styles.price}>Price : {item.price}</Text>
                </View>

                <Text style={styles.text}>Warranty Information : {item.warrantyInformation}</Text>
                <Text style={styles.text}>Return Policy : {item.returnPolicy}</Text>
               
                <Text style={styles.text}>Shipping Information : {item.shippingInformation}</Text>
                <Text style={styles.text}>Category : {item.category}</Text>


                <Text style={styles.textReviews}>Rating : {item.rating}</Text>
                <StarRatingDisplay rating={item.rating} />
                <Text style={styles.textReviews}>Reviews</Text>


                <View>

                    <FlatList
                        data={item.reviews}
                        renderItem={({ item }) => <Item title={item} />}
                        //renderItem={renderItem}
                        keyExtractor={item => item.id}
                    //onEndReached={fetchData}
                    //onEndReachedThreshold={0.5}
                    //ListFooterComponent={renderFooter}
                    />
                </View>
            </ScrollView>

            <View style={[styles.buttonBG]}>
                <Button
                    title={t('addToCart')}
                    onPress={handleSubmit}
                    color={"white"}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    price: {
        fontFamily: "SpaceMono-Regular",
        color: 'green',
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
        //marginHorizontal: 16,
        textAlign: 'left',

    },
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
    buttonBG: {
        backgroundColor: 'red',
        marginHorizontal: 60,
        marginTop: 30,
        borderRadius: 8
    },
    containerComment: {
        flex: 1,
        flexDirection: 'column',
        borderBlockColor: 'red',
        backgroundColor: 'rgba(251, 171, 171, 0.47)',
        marginVertical: 8,
        borderRadius: 10,
        bottom: 10,
        padding: 15,
        showsHorizontalScrollIndicator: false

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
    textReviews: {
        fontFamily: "SpaceMono-Regular",
        marginVertical: 25,
        //marginBlockStart:5,
        // marginHorizontal: 10,
        //width:"80%",
        color: 'rgb(0, 0, 0)',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    textReviewsTitle: {
        fontFamily: "SpaceMono-Regular",
        marginVertical: 10,
        //marginBlockStart:5,
        marginHorizontal: 10,
        //width:"80%",
        color: 'rgb(0, 0, 0)',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'left',
        borderRadius: 5
    },
    textComments: {
        fontFamily: "SpaceMono-Regular",
        marginVertical: 5,
        //marginBlockStart:5,
        marginHorizontal: 10,
        //width:"80%",
        color: 'rgb(0, 0, 0)',
        fontSize: 15,
        //fontWeight: 'bold',
        textAlign: 'left',
        borderRadius: 5
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
        resizeMode: "stretch",
        borderRadius: 5,
    },

});

export default ItemDetails;