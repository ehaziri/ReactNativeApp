import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Config
 **/
import config from './navigatorConfig';
/**
 * Tabs
 **/
import HomeTabNavigator from './homeTabNavigator';

const Stack = createStackNavigator();

/**
 * Register screens
 */
const AppNavigator = React.forwardRef((_, ref) => (
    <NavigationContainer ref={ref}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
            {/* Tabs */}
            <Stack.Screen name="H" component={HomeTabNavigator} options={{headerShown:false}} />
        </Stack.Navigator>
    </NavigationContainer>
));
export default AppNavigator;