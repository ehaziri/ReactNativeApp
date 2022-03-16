import React from 'react';
import { View, StyleSheet } from 'react-native';
/**
 * @brief common component that organizes components in smaller groups
 * @param {Component} children components that are wrapped
 * @param {Object} style external styles that are specific to the component
 */
// eslint-disable-next-line arrow-body-style
const CardSection = ({ children, style }) => {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    );
};

export { CardSection };

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        padding: 5,
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    }
});


