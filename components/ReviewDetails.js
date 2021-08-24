import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/Global';

export default function ReviewDetails({ route, navigation }){
    const { title } = route.params;
    const { rating } = route.params;
    const { body } = route.params;

    return(
        <View style={ globalStyles.container }>
            <Text style={ globalStyles.titleText }>{ title }</Text>
            <Text style={ globalStyles.titleText }>{ rating }</Text>
            <Text style={ globalStyles.paragraph }>{ body }</Text>
        </View>
    )
}

