import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import auth from '@react-native-firebase/auth'
import AnimatedLoader from 'react-native-animated-loader'


function Chat({navigation}) {
    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState()

    function onAuthStateChanged(user){
        setUser(user)
        if(initializing)
            setInitializing(false)
    }

    useEffect(()=>{
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
        return subscriber
    },[])

    if (initializing)
        return <AnimatedLoader
            visible={true}
            overlayColor="rgba(255,255,255,0.75)"
            source={require("../../assets/configs/loading.json")}
            animationStyle={styles.lottie}
            speed={1}
        >
            <Text>
                Loading
            </Text>
        </AnimatedLoader>

    if(!user){
        navigation.navigate('SignIn')
    }

    return (
        <View>
            <Text>
                Welcome {user.email}
            </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    lottie:{
        width:100,
        height:100
    }
})


export default Chat