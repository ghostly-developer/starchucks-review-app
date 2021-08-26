import React from 'react';
import { StyleSheet, TouchableOpacity, TextInput, View, Text} from 'react-native';
import { globalStyles } from '../styles/Global';
import { Formik } from 'formik';

export default function ReviewForm({ addReview }){
    return(
        <View style={globalStyles.container}>
            <Formik
                initialValues={{title: '', body: '', rating: ''}}
                onSubmit={(values) => {
                    actions.resetForm();
                    addReview(values);
                }}
            >
                {(formikProps) => (
                    <View>
                        <TextInput 
                            style={globalStyles.textInput}
                            placeholder="Title"
                            onChangeText={formikProps.handleChange('title')}
                            value={formikProps.values.title}
                        />

                        <TextInput 
                            multiline
                            style={globalStyles.textInput}
                            placeholder="Body"
                            onChangeText={formikProps.handleChange('body')}
                            value={formikProps.values.body}
                        />

                        <TextInput 
                            style={globalStyles.textInput}
                            placeholder="Rating (1-5)"
                            onChangeText={formikProps.handleChange('rating')}
                            value={formikProps.values.rating}
                            keyboardType='numeric'
                        />

                        <TouchableOpacity style={styles.submitButton} onPress={formikProps.handleSubmit}>
                            <Text style={{color: 'white'}}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    submitButton: {
        backgroundColor: '#007a33',
        height: 40,
        width: 80,
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
})