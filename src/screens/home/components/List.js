import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Detail from './Detail';

const numColumns = 2

const List = ({ data }) => (
    <View style={styles.container}>
       
        <FlatList
            data={data}
            renderItem={({ item }) => <Detail {...item} /> }
            keyExtractor={(_, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            numColumns={numColumns}
        />
    </View>
);

export default List;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', 
        padding: 15
    }
});


