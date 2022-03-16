/**
 * @brief Main screen
 */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { fetchItems, filterItems, sortItems } from '../../store/items/actions';
import { Search, Button } from "@components";
import List from './components/List';
import { colors } from '@theme';
import { ALPHABETICALLY, RELEASE } from './constants';

const Main = ({ fetchItems, filterItems, sortItems, itemsData }) => {
    const [search, setSearch] = useState('');
    const [sortedByAZ, setSortedByAZ] = useState(false);
    const [sortedByDate, setSortedByDate] = useState(false);
    
    const onSearch = (text) => {
        setSearch(text);
        filterItems(text);
    };

    const onSort = (type) => {
        switch (type) {
            case ALPHABETICALLY:
                setSortedByAZ(!sortedByAZ);
                sortItems(ALPHABETICALLY, sortedByAZ);
                break;
            case RELEASE:
                setSortedByDate(!sortedByDate);
                sortItems(RELEASE, sortedByDate);
                break;
            default:
                break;
        }
    }
    
    useEffect(() => {
        fetchItems();
    }, [fetchItems])
    return (
        <View style={styles.container}>
            <View style={styles.innerCoverContainer}>
                <Text style={styles.coverTitle}>Discover games</Text>
                <Search value={search} onChangeText={onSearch} />
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Button value='alphabetically' icon='sort-by-alpha' onAction={() => onSort(ALPHABETICALLY)} />
                    <Button value='release date' icon='sort' onAction={() => onSort(RELEASE)} />
                </View>
            </View>
            <View style={styles.body}>
                <List data={itemsData.filteredItems} />
            </View>
        </View>
    )
};

const mapDispatchToProps = { fetchItems, filterItems, sortItems };
const mapStateToProps = ({ itemsData }) => ({ itemsData });

export default connect(mapStateToProps, mapDispatchToProps)(Main);


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        flex: 2
    },
    innerCoverContainer: {
        flex: 1,
        backgroundColor: colors.blue,
        padding: 10,
        justifyContent: "center"  
    },
    coverImage: {
        flex: 1,
        resizeMode: "cover",
    },
    coverTitle: {
        color: colors.pink,
        alignSelf: 'center',
        fontSize: 20,
        paddingHorizontal: 60,
        textAlign: 'center',
        marginVertical: 5
    },
    coverDescription: {
        fontSize: 15,
        paddingHorizontal: 10
    }
});

