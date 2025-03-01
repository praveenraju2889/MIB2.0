
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import ItemDetails from './ItemDetails';
import InfiniteScrollApp from './InfiniteScrollApp';




const app = () => {
  
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="InfiniteScrollApp">
          <Stack.Screen name="InfiniteScrollApp" component={InfiniteScrollApp}/>
          <Stack.Screen name="ItemDetails" component={ItemDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  )


};

export default app



