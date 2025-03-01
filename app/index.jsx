
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import ItemDetails from './ItemDetails';
import InfiniteScrollApp from './InfiniteScrollApp';
import Login from './Login';





const app = () => {
  
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" > 
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login}  />
          <Stack.Screen name="InfiniteScrollApp" component={InfiniteScrollApp} />
          <Stack.Screen name="ItemDetails" component={ItemDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  )


};

export default app



