import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/Global';
import Card from '../shared/Card'

export default function About(){
    return(
        <View style={ globalStyles.container }>
            <Card>
                <Text style={globalStyles.cardTitleText}>About Starchucks-Review</Text>
                <Text style={globalStyles.paragraph}>
                    Hello! This is my second React Native project I made as a beginner. It is a simple review app with a few bells and whistles. 
                    If you would like to run this project (assuming you already cloned the repository) type in npm start or expo start in the command prompt.
                    Posts that you add will not stay after you restart the preview because this app doesn't actually use a database.
                    Make sure you have Expo Go installed on your phone if you would like to preview the app physically. If the app does not work on the first attempt, enter expo start -c in the command prompt.
                </Text>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    }
});