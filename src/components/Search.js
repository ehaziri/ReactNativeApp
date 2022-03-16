import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '@theme';
/**
 * @brief common component that shows a search box with icon and input field
 * @param {string} value current input value that is displayed
 * @param {string} onChangeText value that the user is typing to be searched
 */
const Search = ({ value, onChangeText }) =>  (
    <View style={styles.container}>
        <TextInput
            value={value} 
            onChangeText={onChangeText}
            style={styles.input}
            placeholder="By genre or platform..."
        />
        <MaterialIcons style={styles.icon} size={25} name='search' color={colors.pink} />
    </View>
);

export { Search };

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 4,
        marginVertical: 15,
        borderWidth: 1,
        borderColor: colors.pink,
        borderRadius: 20,
        backgroundColor: '#fff'
    },
    input: {
        color: colors.pink,
        fontSize: 17
    },
    icon: {
        position: 'absolute',
        right: 0,
        paddingHorizontal: 15,
        padding: 0,
        marginTop: 10
    }
});

