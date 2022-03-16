
/**
 * @brief Bottom tab navigator as a main app entry
 */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Main from '../screens/home/Main';
import Chat from '../screens/Chat';
import Add from '../screens/Add';
import Map from '../screens/Map';
import { colors } from '@theme';

const Tab = createBottomTabNavigator();

/**
 * @param {string} name value based on the active tab
 * @returns {string} vector based icon name based on the active tab
 */
const findIconNameByTabName = (name) => {
    switch (name) {
        case 'Home':
            return 'favorite-border';
        case 'Chat':
            return 'chat-bubble-outline';
        case 'Add':
            return 'add';
        case 'Map':
            return 'room';
        default:
    }
}

/**
 * @brief Register bottom tabs components 
 */
const HomeTabNavigator = () => (
    <Tab.Navigator
        tabBarOptions={{
            activeTintColor: colors.pinkDark,
            inactiveTintColor: colors.pink,
            showLabel: false
        }}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                return <MaterialIcons size={size} name={findIconNameByTabName(route.name)} color={color} />
            }
        })} >
            <Tab.Screen name="Home" component={Main} />
            <Tab.Screen name="Chat" component={Chat} />
            <Tab.Screen name="Add" component={Add} />
            <Tab.Screen name="Map" component={Map} />
    </Tab.Navigator>
);

export default HomeTabNavigator;