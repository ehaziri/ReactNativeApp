import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '@theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

/**
 * @brief common component that shows header title
 * @param {string} title title of the header 
 */
const Header = ({ title, iconName }) => {
    const { viewStyle, textStyle } = styles;

    return (
        <View style={viewStyle}>
            <MaterialIcons style={styles.icon} size={30} name={iconName} color={colors.pink} />
            <Text style={textStyle}>{title}</Text>
        </View>
    );
};

//Make the component available to other parts of the app
export { Header };

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        position: 'relative',
        flexDirection: 'row',
        paddingBottom: 5
    },
    textStyle: {
        fontSize: 25,
        color: colors.pink,
        fontWeight: 'bold',
        marginHorizontal: 10
    }
});

