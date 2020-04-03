import React from 'react'
import { StyleSheet, Text } from 'react-native';

interface QuestionTextProps {
    children:any
}

export const QuestionText: React.FC<QuestionTextProps> = ({children}) => {
        return (
            <Text style={styles.textStyle}>
                {children}
            </Text>
        );
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'justify',
        fontFamily: 'Comfortaa-Regular',
        fontSize: 12
    }
})