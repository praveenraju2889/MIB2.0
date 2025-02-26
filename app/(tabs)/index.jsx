import { View, FlatList, Text, StyleSheet, ActivityIndicator,ImageBackground, Button, Image ,TouchableOpacity,Alert} from 'react-native'
import imgMIB from "@/assets/images/cart_w.png"
//import font from "@/assets/fonts/SpaceMono-Regular.ttf"


import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import React , {useEffect, useState,useCallback} from 'react'

// const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d71',
//     title: 'Fourth Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d712',
//     title: 'Fifth Item',
//   },
// ];

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Image source={imgMIB}
//       style={styles.image1} />
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );
const handleImagePress = (item) => {
  Alert.alert('Added To Cart', `${item.title}`);
};

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <TouchableOpacity onPress={() => handleImagePress(item)}>
    <Image source={imgMIB} style={styles.imageMenu} />
    </TouchableOpacity>
    
    <Text style={styles.title}>{item.title}</Text>
    <Image source={ {uri:item.thumbnail} } style={styles.image1} />
    <Text style={styles.price}>AED {item.price}</Text>
    <Text style={styles.description}>{item.description}</Text>
  </View>
);


const app = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [resData, setResData] = useState([]);
  //const [loading] = useState(false);
  const [page, setPage] = useState(1);

   
  const getProducts = async () => {
    try {
      //const response = await fetch('https://reactnative.dev/movies.json');
      //const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const response = await fetch('https://dummyjson.com/products');

      //const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
      
      const json = await response.json();
      const arrayData = json.products;
      //setData(json.products);
      console.log("getProducts");
      setResData(json.products);
      //fetchDataDynamic();
      //setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const renderFooter = () => (
    isLoading ? <ActivityIndicator size="large" color="blue" /> : null
  );
  // const fetchDataDynamic = useCallback(async () => {
  //   if (loading) return;
  //   setLoading(true);
    
  //   try {
  //     const newData = resData.slice((page - 1) * 4, page * 4);
  //     setData(prevData => [...prevData, ...newData]);
  //     setPage(prevPage => prevPage + 1);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, [isLoading, page]);
  const fetchData = useCallback(async () => {
    if (isLoading) return;
    setLoading(true);
    
    try {
      // const newData = Array.from({ length: 10 }, (_, i) => ({
      //   id: i + 35 + (page - 1) * 20,
      //   title: `Dummy Item ${i + 1 + (page - 1) * 20}`,
      //   thumbnail: 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png',
      //   description:"Dummy item description"
        
      // }));
      console.log("fetchData");
      const newData1 = resData.slice((page - 1) * 4, page * 4);
      setData(prevData => [...prevData, ...newData1]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, [isLoading, page]);
  useEffect(() => {
    getProducts();
    //fetchData();
    
  }, []);
  return (
    <View style={styles.container}>
     
        <Text style={styles.text}>Scrolling List</Text>
        {/* <Buttonr
          title="Learn More"r
          color="#841584"
          backgroundColor="#ffffff"
          accessibilityLabel="Learn more about this purple button"
        /> */}
        <SafeAreaProvider style={styles.containerBG}>
          <SafeAreaView style={styles.containerBG}>
            <FlatList
              data={data}
              //renderItem={({item}) => <Item title={item.title} />}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              onEndReached={fetchData}
              //onEndReachedThreshold={0.5}
              ListFooterComponent={renderFooter}
            />
          </SafeAreaView>
        </SafeAreaProvider>
         {/* <ImageBackground
        source={imgMIB}
        resizeMode="cover"
        style={styles.image}>
      </ImageBackground> */}
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderBlockColor: 'red',
    height:"80%",
    //marginVertical: 70,
    //shadowColor: 'black',
  },
  containerBG:{
    flex: 1,
   //
    //marginVertical: 70,
   //marginBlockStart:70,
    width: '100%',
    height: '80%',
    backgroundColor: '#d1d0cd',
    //shadowColor: 'red',
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor:'rgba(0,0,0,0.5)'

  },
  text: {
    //marginTop:70,
    marginVertical: 10,
    marginBlockStart:5,
    marginHorizontal: 10,
    color: 'rgba(243, 72, 103, 0.47)',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    //backgroundColor: 'rgba(0,0,0,0.5)'
  },

  item: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    //flexDirection: 'row'
    borderRadius:15,
    //shadowColor: 'black',
  },
  title: {
    fontFamily:"SpaceMono-Regular",
    //fontStyle:'normal',
    fontSize: 25,
    marginVertical: 5,
    //marginHorizontal: 16,
    textAlign: 'left',

  },
  subtitle: {
    fontFamily:"SpaceMono-Regular",
    //fontStyle:'normal',
    fontSize: 10,
    marginVertical: 5,
    backgroundColor:'grey',
    //marginHorizontal: 16,
    textAlign: 'left',

  },
  price: {
    fontFamily:"SpaceMono-Regular",
    color:'green',
    fontWeight:'bold',
    fontSize: 15,
    marginVertical: 10,
    //marginHorizontal: 16,
    textAlign: 'left',

  },
  image1: {
    width: 200,
    height: 200,
    borderRadius: 5,
  },
  imageMenu: {
    width: 24,
    height: 24,
    marginLeft:'auto',
    alignContent:"flex-end",
    backgroundColor:'white'
  }

})