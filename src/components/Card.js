import React from 'react';
import { View, StyleSheet } from 'react-native';
/**
 * @brief common component that wraps child components
 * @param {Component} children components that are wrapped
 * @param {Object} style external styles that are specific to the component
 */
// eslint-disable-next-line arrow-body-style
const Card = ({ children, style }) => {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    );
};

export { Card };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        flexDirection: 'row'
    }
});
