import React from 'react';
import { StyleSheet, TouchableOpacity, TextInput, View, Text} from 'react-native';
import { globalStyles } from '../styles/Global';
import { Formik } from 'formik';
import * as yup from 'yup';

const ReviewSchema = yup.object({
    title: yup.string()
    .required()
    .min(5),

    body: yup.string()
    .required()
    .min(16),

    rating: yup.string()
    .required()
    .test('is-in-range', 'Whoops! Rating must be a number 1-5.', (value) => {
        return parseInt(value) < 6 && parseInt(value) > 0
    })

})

export default function ReviewForm({ addReview }){
    return(
        <View style={globalStyles.container}>
            <Formik
                initialValues={{title: '', body: '', rating: ''}}
                validationSchema={ ReviewSchema }
                onSubmit={(values) => {
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
                            onBlur={formikProps.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}>{ formikProps.touched.title && formikProps.errors.title }</Text>

                        <TextInput 
                            multiline minHeight={70}
                            style={globalStyles.textInput}
                            placeholder="Body"
                            onChangeText={formikProps.handleChange('body')}
                            value={formikProps.values.body}
                            onBlur={formikProps.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}>{ formikProps.touched.body && formikProps.errors.body }</Text>

                        <TextInput 
                            style={globalStyles.textInput}
                            placeholder="Rating (1-5)"
                            onChangeText={formikProps.handleChange('rating')}
                            value={formikProps.values.rating}
                            keyboardType='numeric'
                            onBlur={formikProps.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}>{ formikProps.touched.rating && formikProps.errors.rating }</Text>

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