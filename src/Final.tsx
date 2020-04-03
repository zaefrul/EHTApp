import React from 'react'
import { QuestionText } from './QuestionText'
import { View, StyleSheet } from 'react-native';

interface FinalProps {
    navigation:any
}

export const Final: React.FC<FinalProps> = ({navigation}) => {
        return (
            <View style={styles.container}>
                <QuestionText>Thankyou for your time</QuestionText>
                <QuestionText>please stay in, stay safe, and always be positive</QuestionText>
                <QuestionText>you can close the App</QuestionText>
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    }
});