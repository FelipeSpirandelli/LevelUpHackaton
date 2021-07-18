import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, ImageBackground} from 'react-native'
import auth from '@react-native-firebase/auth'
import AnimatedLoader from 'react-native-animated-loader'
import PhotoMap from '../../assets/photos/map.png'
import StorePin from '../../assets/photos/store_pin.png'

function HomePage({navigation}) {
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
        <View style={styles.container}>
            <ImageBackground source={PhotoMap} resizeMode="cover" style={styles.backgroundImage}>
            </ImageBackground>
            <View style={styles.container}>
                <Image source={StorePin}/>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    lottie:{
        width:100,
        height:100
    },
    container: {
        flex: 1,
    },
    backgroundImage:{
        flex: 1,
        justifyContent: "center",
    },
    stretch: {
        width: 50,
        height: 200,
        resizeMode: 'stretch',
    },

})


export default HomePage