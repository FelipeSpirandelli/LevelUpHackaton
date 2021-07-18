import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import auth from '@react-native-firebase/auth'
import AnimatedLoader from 'react-native-animated-loader'
import OrderCard from '../../components/orderCard/OrderCard'
import SearchBar from '../../components/searchBar/SearchBar'


function Order({navigation}) {
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
            <Text style={styles.mainTitle}>
                Your Orders
            </Text>
            <SearchBar />
            <OrderCard path={'../../assets/images/OIP.jpg'} name={"McDonald's"} level={4} />
        </View>
    )

}

const styles = StyleSheet.create({
    lottie:{
        width:100,
        height:100
    },
    mainTitle:{
        fontSize:22,
        margin: 20,
        alignSelf:'flex-start'
    },
    container:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#FFF8EC',
        flexGrow:1,
        alignItems:'center'
    }
})



export default Order