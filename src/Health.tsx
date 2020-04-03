import React, { useState, isValidElement } from 'react'
import { View, Picker, Text, StyleSheet, Button, StatusBar } from 'react-native';
import { TextInput, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { QuestionText } from './QuestionText';

interface HealthProps {
    navigation: any
}

export const Health: React.FC<HealthProps> = ({ navigation }) => {
    const [q1, setQ1] = useState(false)
    const [q2, setQ2] = useState(false)
    const [q3, setQ3] = useState(false)
    const [q4, setQ4] = useState(false)
    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>Maklumat Kesihatan</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.questionContainer}>
                        <QuestionText>Adakah anda mempunyai gejala seperti demam, sukar bernafas, batuk atau selsema? / do you have symptoms such as fever, shortness of breath, cough or flu?</QuestionText>
                        <Picker selectedValue={q1} onValueChange={(value)=>{setQ1(value)}}>
                            <Picker.Item label="YA" value={true} />
                            <Picker.Item label="TIDAK" value={false} />
                        </Picker>
                    </View>
                    <View style={styles.questionContainer}>
                        <QuestionText>adakah mana-mana ahli keluarga anda mempunyai gejala seperti demam, sukar bernafas, batuk atau selsema? / does any of your family member have symptoms such as fever, shortness of breath, cough or flu?</QuestionText>
                        <Picker selectedValue={q2} onValueChange={(value)=>{setQ2(value)}}>
                            <Picker.Item label="YA" value={true}/>
                            <Picker.Item label="TIDAK" value={false}/>
                        </Picker>
                    </View>
                    <View style={styles.questionContainer}>
                        <QuestionText>adakah tuan/puan termasuk dalam kategori P1 (positif COVID-19), P2 (kontak rapat dengan P1) atau P3 (kontak rapat dengan P2) / are you classified under P1 (COVID-19 positive), P2 (close contact with P1) or P3 (close contact with P2)?</QuestionText>
                        <Picker selectedValue={q3} onValueChange={(value)=>{setQ3(value)}}>
                            <Picker.Item label="YA" value={true}/>
                            <Picker.Item label="TIDAK" value={false}/>
                        </Picker>
                    </View>
                    <View style={styles.questionContainer}>
                        <QuestionText>Adakah mana-mana ahli keluarga tuan/puan termasuk dalam kategori P1 (positif COVID-19), P2 (kontak rapat dengan P1) atau P3 (kontak rapat dengan P2)</QuestionText>
                        <QuestionText>Is any of your family member classified under P1 (COVID-19 positive), P2 (close contact with P1) or P3 (close contact with P2)</QuestionText>
                        <Picker selectedValue={q4} onValueChange={(value)=>{setQ4(value)}}>
                            <Picker.Item label="YA" value={true}/>
                            <Picker.Item label="TIDAK" value={false}/>
                        </Picker>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={[styles.formInput, styles.buttonInput, styles.buttonCancel]} onPress={()=>{navigation.navigate('Login')}}>
                            <Text style={{color:'white', fontFamily: 'Comfortaa-Light'}}>Back</Text>
                        </TouchableOpacity>    
                        <TouchableOpacity style={[styles.formInput, styles.buttonInput, styles.buttonSubmit]} onPress={()=>{navigation.navigate('Final')}}>
                            <Text style={{color:'white', fontFamily: 'Comfortaa-Light'}}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        fontFamily: 'Comfortaa'
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
    QuestionText: {
        textAlign: 'justify'
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