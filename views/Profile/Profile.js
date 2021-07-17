import firestore from '@react-native-firebase/firestore'
import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import auth from '@react-native-firebase/auth'
import AnimatedLoader from 'react-native-animated-loader'


function Profile({navigation}) {
    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState({})
    const [experience, setExperience] = useState(0)
    
    const ref = firestore().collection('clients')
    
    useEffect(()=>{
        const userValue = auth().currentUser 

        setUser(userValue)

        ref.doc(`${userValue.uid}`).get({
            source: 'server'
        })
        .then(documentSnapshot => {
            console.log('User exists: ', documentSnapshot.exists)

            const {
                experience
            } = documentSnapshot.data()

            setExperience(experience)

            if(documentSnapshot.exists) {
                console.log('User data: ', documentSnapshot.data())
            }
        })

        if(initializing)
            setInitializing(false)
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
                Welcome {experience}
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


export default Profile