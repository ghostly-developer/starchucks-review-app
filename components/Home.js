import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { globalStyles } from '../styles/Global';
import Card from '../shared/Card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './ReviewForm';

export default function Home({ navigation }){
    const [modalOpen, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState([
        { title: 'Ice Brrappucino', rating: 5, body: 'Lorem ipsum', key: '1' },
        { title: 'Caffe Foggo', rating: 4, body: 'Lorem ipsum', key: '2' },
        { title: 'Americano: Electric Boogaloo', rating: 3, body: 'Lorem ipsum', key: '3' },
    ]);

    function addReview(review){
        review.key = Math.random().toString(); //not ideal
        setReviews((currentReviews) => {
            return [review, ...currentReviews]
        });
        setModalOpen(false);
    }

    return(
        <View style={ globalStyles.container }>    

        <Modal visible={modalOpen} animationType='slide'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent}>
                    <TouchableOpacity>
                        <MaterialIcons 
                            name='delete-forever'
                            size={24}
                            style={{...styles.modalToggle, ...styles.modalClose}}
                            onPress={() => setModalOpen(false)}
                        />
                    </TouchableOpacity>
                    <ReviewForm addReview={addReview} />
                </View>
            </TouchableWithoutFeedback>
        </Modal>

        <TouchableOpacity onPress={() => setModalOpen(true)}>
            <MaterialIcons 
                name='add'
                size={24}
                style={styles.modalToggle}
            />
        </TouchableOpacity>

        <FlatList 
            data={ reviews }
            renderItem={ ({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                    <Card>
                        <Text style={globalStyles.titleText}>{ item.title }</Text>
                    </Card>
                </TouchableOpacity>    
            )}
        />

        </View>
    )
}

const styles = StyleSheet.create({
    
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#007a33',
        padding: 10,
        borderRadius: 16,
        alignSelf: 'center',
    },

    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },

    modalContent: {
        flex: 1,
    }
})

