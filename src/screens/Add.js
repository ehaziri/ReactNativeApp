/**
 * @brief Add screen
 */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Add = () => {
    return (
        <View style={styles.container}>
           <Text>Add</Text>
        </View>
    )
};

export default Add;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    }
});

