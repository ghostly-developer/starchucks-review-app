import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { globalStyles, Images } from '../styles/Global';
import Card from '../shared/Card';

export default function ReviewDetails({ route, navigation }){
    const { title } = route.params;
    const { rating } = route.params;
    const { body } = route.params;

    const reviewRating = route.params.rating;
    return(
        <View style={ globalStyles.container }>
            <Card>
                <Text style={ globalStyles.cardTitleText }>{ title }</Text>
                <View style={styles.rating}>
                    <Image source={ Images.ratings[rating] } />
                </View>
                <Text style={ globalStyles.paragraph }>{ body }</Text>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
        marginBottom: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#eee',
    }
})