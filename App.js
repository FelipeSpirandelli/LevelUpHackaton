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
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

function HomeTabScreen() {

  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'HomePage') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        } else if (route.name === 'Order') {
          iconName = focused ? 'cart' : 'cart-outline';
        } else if (route.name === 'Chat') {
          iconName = focused ? 'chatbubble-sharp' : 'chatbubble-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    }}>
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