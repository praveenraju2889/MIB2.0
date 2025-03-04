
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import React ,{useState} from 'react';
import { AuthContextProvider } from './AuthContext';
import RNRestart from "react-native-restart";
import { Ionicons } from '@expo/vector-icons'; // For icons
import { TouchableOpacity } from "react-native";
import { UserAuth } from "./AuthContext";



import ItemDetails from './ItemDetails';
import InfiniteScrollApp from './InfiniteScrollApp';
import Login from './Login';
import { Text ,Button} from 'react-native';
import '@/app/i18n/i18next'

const lightTheme = {
  background: '#f2edee',
  text: '#000000',
  buttonBG:'red'
};

const darkTheme = {
  background: '#b5e8c3',
  text: '#ffffff',
  buttonBG:'green',
};

const app = () => {
  //const { user, logOut } = UserAuth();
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
   <AuthContextProvider>
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" > 
        <Stack.Screen options={{headerShown: false}} name="Login"  >
        {(props) => <Login {...props} theme={theme} toggleTheme={toggleTheme} />}
        </Stack.Screen>
          <Stack.Screen name="InfiniteScrollApp" options={{headerBackVisible:true, headerRight:()=>(<TouchableOpacity onPress={() => {handleLogout}}><Ionicons name="power" size={24}  /></TouchableOpacity>)}} >
          {(props) => <InfiniteScrollApp {...props} theme={theme} toggleTheme={toggleTheme} />}
          </Stack.Screen>
          <Stack.Screen name="ItemDetails"  >
          {(props) => <ItemDetails {...props} theme={theme} toggleTheme={toggleTheme} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
    </AuthContextProvider>
   
  )


};

export default app



