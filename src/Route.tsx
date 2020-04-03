import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { Login } from './Login';
import { Register } from './Register';
import { Survey } from './Survey';
import { Health } from './Health';
import { Final } from './Final';

interface RouteProps {

}

const Stack = createStackNavigator();

export const Route: React.FC<RouteProps> = ({}) => {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown:false}}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="Survey" component={Survey} />
                    <Stack.Screen name="Health" component={Health} />
                    <Stack.Screen name="Final" component={Final} />
                </Stack.Navigator>
            </NavigationContainer>
        );
}