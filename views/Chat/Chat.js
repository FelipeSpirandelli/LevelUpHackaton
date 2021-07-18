import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import auth from '@react-native-firebase/auth'
import AnimatedLoader from 'react-native-animated-loader'
import SearchBar from '../../components/searchBar/SearchBar'
import ChatCard from '../../components/chatCard/ChatCard'
import FloatingIcon from '../../components/FloatingIcon'
import StoreLogo from  '../../assets/photos/store_logo.png'
import Hamburguer1 from '../../assets/photos/hamburguer.png'
import Hamburguer2 from '../../assets/photos/hamburguer1.png'
import Hamburguer3 from '../../assets/photos/hamburguer2.png'

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
        <View style={styles.container}>
            <Text style={styles.mainTitle}>
                Your Chats
            </Text>
            <SearchBar />
            <ChatCard path={StoreLogo} name={"McDonald's"} level={4} date={'17/07/2021'}/>
            <ChatCard path={Hamburguer1} name={"Best Burguer"} level={6} date={'17/07/2021'}/>
            <ChatCard path={Hamburguer2} name={"PIkNik"} level={12} date={'17/07/2021'}/>
            <ChatCard path={Hamburguer3} name={"Katz"} level={10} date={'17/07/2021'}/>
            <FloatingIcon/>
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
        margin: 20
    },
    container:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#FFF8EC',
        flexGrow:1
    }
})


export default Chat