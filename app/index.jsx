
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import React ,{useState} from 'react';
import { AuthContextProvider } from './AuthContext';
import RNRestart from "react-native-restart";

import ItemDetails from './ItemDetails';
import InfiniteScrollApp from './InfiniteScrollApp';
import Login from './Login';

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

  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };
  
  return (
   <AuthContextProvider>
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" > 
        <Stack.Screen options={{headerShown: false}} name="Login"  >
        {(props) => <Login {...props} theme={theme} toggleTheme={toggleTheme} />}
        </Stack.Screen>
          <Stack.Screen name="InfiniteScrollApp"  >
          {(props) => <InfiniteScrollApp {...props} theme={theme} toggleTheme={toggleTheme} />}
          </Stack.Screen>
          <Stack.Screen name="ItemDetails" component={ItemDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
    </AuthContextProvider>
   
  )


};

export default app



