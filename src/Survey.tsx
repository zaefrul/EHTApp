import React from 'react'
import { StyleSheet, View, Text, Picker, Button } from 'react-native';
import { TextInput, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { QuestionText } from './QuestionText';

interface SurveyProps {
    navigation: any
}

export const Survey: React.FC<SurveyProps> = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>Maklumat Peribadi</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.questionContainer}>
                        <QuestionText>Sila pilih Syarikat tempat bekerja</QuestionText>
                        <Picker style={{ fontFamily: 'Comfortaa-Regular' }}>
                            <Picker.Item label="PUSPAKOM" />
                            <Picker.Item label="POS LAJU" />
                        </Picker>
                    </View>
                    <View style={styles.questionContainer}>
                        <QuestionText>Sila masukkan nama penuh:</QuestionText>
                        <TextInput style={{ fontFamily: 'Comfortaa-Regular' }} />
                    </View>
                    <View style={styles.questionContainer}>
                        <QuestionText>Sila nyatakan Jabatan di syarikat anda bekerja. </QuestionText>
                        <TextInput style={{ fontFamily: 'Comfortaa-Regular' }} />
                    </View>
                    <View style={styles.questionContainer}>
                        <QuestionText>Alamat anda berada pada ketika ini </QuestionText>
                        <TextInput style={{ fontFamily: 'Comfortaa-Regular' }} multiline={true} numberOfLines={5} />
                    </View>
                    <View style={styles.questionContainer}>
                        <QuestionText>No telefon yang boleh dihubungi </QuestionText>
                        <TextInput style={{ fontFamily: 'Comfortaa-Regular' }} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={[styles.formInput, styles.buttonInput, styles.buttonCancel]} onPress={()=>{navigation.navigate('Login')}}>
                            <Text style={{color:'white', fontFamily: 'Comfortaa-Light'}}>Back</Text>
                        </TouchableOpacity>    
                        <TouchableOpacity style={[styles.formInput, styles.buttonInput, styles.buttonSubmit]} onPress={()=>{navigation.navigate('Health')}}>
                            <Text style={{color:'white', fontFamily: 'Comfortaa-Light'}}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    header: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20,
        marginBottom: 20,
    },
    content: {
        flex: 5
    },
    questionContainer: {
        marginRight: 10,
        marginBottom: 5,
        marginLeft: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        // backgroundColor: 'blue'
    },
    title: {
        fontSize: 20,
        fontFamily: 'Comfortaa-Bold'
    },
    formInput: {
        fontFamily: 'Comfortaa-Light',
        backgroundColor: '#dddddd8c',
        padding: 10,
        margin: 10,
        borderRadius:20
    },
    buttonContainer: {
        flexDirection:'row',
        justifyContent: 'center',
        // width: 500
    },
    buttonInput: {
        alignItems: "center",
        width: 100
    },
    buttonSubmit: {
        backgroundColor:"#2b8763"
    },
    buttonCancel: {
        backgroundColor:'#e53935'
    }
});