import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '@theme';
/**
 * @brief common component that shows a search box with icon and input field
 * @param {string} value current input value that is displayed
 * @param {function} onAction action that the user is triggering
 */
const Button = ({ value, icon, onAction }) =>  (
    <TouchableOpacity onPress={onAction} style={styles.container}>
        <MaterialIcons style={styles.icon} size={25} name={icon} color={colors.pink} />
        <Text>{value}</Text>
    </TouchableOpacity>
);

export { Button };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        padding: 10,
        margin: 10,
    }
});

