import React from 'react';
import { SafeAreaView } from 'react-native';
import SignIn from './views/SignIn/SignIn'
import SignUp from './views/SignUp/SignUp'
import {NavigationContainer, StackActions} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

function App(){

  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name='SignIn'
          component={SignIn}
        />
        <Stack.Screen
          name='SignUp'
          component={SignUp}

        />

      </Stack.Navigator>
    </NavigationContainer>
  )
} 

export default App