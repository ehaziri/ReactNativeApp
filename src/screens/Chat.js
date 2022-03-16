/**
 * @brief Chat screen
 */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Chat = () => {
    return (
        <View style={styles.container}>
           <Text>Chat</Text>
        </View>
    )
};

export default Chat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange'
    }
});

