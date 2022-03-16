import React from 'react';
import { View, ActivityIndicator } from 'react-native';
/**
 * @brief common component that shows a loader
 * @param {string} size one of the values: large, medium, small for the spinner size
 * @param {string} color value that indicates the spinner's color
 */
const Spinner = ({ size, color }) => (
    <View>
        <ActivityIndicator size={size || 'large'} color={color || 'green'} />
    </View>
);

export { Spinner };

