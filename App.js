import React from 'react';
import SignIn from './views/SignIn/SignIn'
import SignUp from './views/SignUp/SignUp'
import HomePage from './views/HomePage/HomePage';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Order from './views/Order/Order';
import Profile from './views/Profile/Profile';
import Chat from './views/Chat/Chat';


const Tab = createBottomTabNavigator()

function HomeTabScreen() {

  return(
    <Tab.Navigator>
      <Tab.Screen name='HomePage' component={HomePage} />
      <Tab.Screen name='Order' component={Order} />
      <Tab.Screen name='Chat' component={Chat} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator >
  )
}


const Stack = createStackNavigator()

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='HomeTabScreen' component={HomeTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App