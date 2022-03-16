import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { Card, CardSection } from '@components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '@theme';

const Detail = ({ title, short_description, genre, thumbnail, release_date, platform}) => {
    return (
        <Card>
            <ImageBackground borderRadius={5} source={{uri: thumbnail}} style={styles.backgroundImage}>
                <View style={styles.innerContainer}>
                    <CardSection style={[styles.sightings, styles.genre]}>
                        <Text style={styles.text}>{genre}</Text>
                    </CardSection>

                    <Text style={[styles.text, styles.h3]}>{title}</Text>
                    <Text style={[styles.text, styles.italic]}>{short_description}</Text>
                    
                    <CardSection style={styles.sightings}>
                        <Text style={[styles.text, styles.italic]}>{platform}</Text>
                        <Text style={[styles.text, styles.italic]}>{release_date}</Text>
                    </CardSection>
                    <MaterialIcons style={styles.icon} size={30} name='stars' color='#fff' />
                </View>
            </ImageBackground>
        </Card>
    );
};

export default Detail;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        height: Dimensions.get('window').width / 1.8
    },
    innerContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.6)',
        padding: 10,
        justifyContent: 'flex-end',
        borderRadius: 5
    },
    text: {
        color: '#fff',
        alignSelf: 'center',
        margin: 1
    },
    icon: {
        position: 'absolute',
        top: 15,
        right: 10,
        padding: 0
    },
    genre: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: colors.blue,
        borderWidth: 0
    },
    h3: {
        fontSize: 17
    },
    italic: {
        fontStyle: 'italic',
        fontSize: 8
    },
    sightings: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius: 100,
        paddingVertical: 5,
        margin: 10,
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.8)'
    }
});
