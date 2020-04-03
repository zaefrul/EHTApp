import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import { TextInput, TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler'

interface LoginProps {
    navigation:any
}

function onLogin()
{
    
}

export const Login: React.FC<LoginProps> = ({navigation}) => {
    const [username,setUsername] = useState('');    
    const [password,setPassword] = useState('');
    return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.pageTitle}>Employee Health Tracker</Text>
                        <Text style={styles.pageDesc}>Stay safe, stay positive!</Text>
                    </View>
                    <TextInput style={styles.formInput} placeholder="username" onChangeText={(value) => setUsername(value)} />
                    <TextInput secureTextEntry={true} style={styles.formInput} placeholder="password" onChangeText={(value) => setPassword(value)} />
                    <View>
                        <TouchableOpacity style={[styles.formInput, styles.buttonInput]} onPress={()=>{navigation.navigate('Survey')}}>
                            <Text style={{color:'white', fontFamily:'Comfortaa-Bold'}}>Sign-In</Text>
                        </TouchableOpacity>    
                    </View>
                    <View style={{alignSelf:'center', flexDirection:'row'}}>
                        <Text style={styles.pageDesc}>Firs-time user? dont worry, please </Text>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Register')}} >
                            <Text style={[styles.pageDesc, {color:'blue'}]}>Sign-Up here</Text>
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
        alignItems:'center',
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
        fontFamily: 'Comfortaa-Light',
        fontSize: 12
    },
    formContainer: {
        alignSelf: 'stretch',
        justifyContent: 'space-between'
    },
    formInput: {
        backgroundColor: '#dddddd8c',
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 30,
        marginLeft: 30,
        borderRadius:20,
        fontFamily: 'Comfortaa-Light'
    },
    buttonInput: {
        backgroundColor:"#2b8763",
        alignItems: "center"
    }
})