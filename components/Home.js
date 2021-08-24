import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/Global';

export default function Home({ navigation }){

    const [reviews, setReviews] = useState([
        { title: 'Ice Brrappucino', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Caffe Foggo', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Americano: Electric Boogaloo', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);

    return(
        <View style={ globalStyles.container }>    
        <FlatList 
            data={ reviews }
            renderItem={ ({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                    <Text style={globalStyles.titleText}>{ item.title }</Text>
                </TouchableOpacity>    
            )}
        />

        </View>
    )
}

const styles = StyleSheet.create({
    
    buttonStyle: {
        justifyContent: 'center',
        backgroundColor: '#007a33',
        borderRadius: 16,
        width: 80,
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },

})

