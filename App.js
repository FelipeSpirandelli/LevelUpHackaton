import React from 'react';
import SignIn from './views/SignIn/SignIn'
import SignUp from './views/SignUp/SignUp'
import HomePage from './views/HomePage/HomePage';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Order from './views/Order/Order';
import Settings from './views/Settings/Settings';
import Chat from './views/Chat/Chat';


const Tab = createBottomTabNavigator()

function HomeTabScreen() {

  return(
    <Tab.Navigator>
      <Tab.Screen name='HomePage' component={HomePage} />
      <Tab.Screen name='Order' component={Order} />
      <Tab.Screen name='Setttings' component={Settings} />
      <Tab.Screen name='Chat' component={Chat} />
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