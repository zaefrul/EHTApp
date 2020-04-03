import React, { useState } from 'react'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScaleFromCenterAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';

interface RegisterProps {
    navigation:any
}

export const Register: React.FC<RegisterProps> = ({navigation}) => {
    const [username,setUsername] = useState('');    
    const [password,setPassword] = useState('');
    const [cpassword,setCpassword] = useState('');
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.pageTitle}>Account Registration</Text>
                    </View>
                    <TextInput style={styles.formInput} placeholder="username" onChangeText={(value) => setUsername(value)} />
                    <TextInput secureTextEntry={true} style={styles.formInput} placeholder="password" onChangeText={(value) => setPassword(value)} />
                    <TextInput secureTextEntry={true} style={styles.formInput} placeholder="confirm password" onChangeText={(value) => setCpassword(value)} />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={[styles.formInput, styles.buttonInput, styles.buttonSubmit]} onPress={()=>{console.log(username, password)}}>
                            <Text style={{color:'white', fontFamily: 'Comfortaa-Light'}}>Sign-Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.formInput, styles.buttonInput, styles.buttonCancel]} onPress={()=>{navigation.navigate('Login')}}>
                            <Text style={{color:'white', fontFamily: 'Comfortaa-Light'}}>Cancel</Text>
                        </TouchableOpacity>    
                    </View>
                </View>
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    titleContainer: {
        alignItems:'center',
        marginBottom:50,
    },
    pageTitle: {
        fontFamily: 'Comfortaa-Bold',
        fontSize: 20
    },
    pageDesc: {
        fontFamily: 'Comfortaa-Bold',
        fontSize: 12
    },
    formContainer: {
        alignSelf: 'stretch',
        justifyContent: 'space-between'
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
})