import { StyleSheet } from 'react-native';


export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },

    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#333',
    },

    cardTitleText: {
        fontFamily: 'nunito-bold',
        fontSize: 24,
        color: '#333',
    },

    titleTextWhite: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#FFF',
    },

    paragraph: {
        marginVertical: 8,
        lineHeight: 20, 
        fontSize: 14,
    },

    textInput: {
        borderWidth: 1,
        borderColor: '#007a33', 
        padding: 10,
        fontSize: 18,
        borderRadius: 16,
        marginVertical: 8,
    },
    
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export const Images = {
    ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
}