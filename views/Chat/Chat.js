import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import auth from '@react-native-firebase/auth'
import AnimatedLoader from 'react-native-animated-loader'
import SearchBar from '../../components/searchBar/SearchBar'
import ChatCard from '../../components/chatCard/ChatCard'


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
            <ChatCard path={'../../assets/images/OIP.jpg'} name={"McDonald's"} level={4} date={'17/07/2021'}/>
            <ChatCard path={'../../assets/images/OIP.jpg'} name={"OIP"} level={6} date={'17/07/2021'}/>
            <ChatCard path={'../../assets/images/OIP.jpg'} name={"PIkNik"} level={1} date={'17/07/2021'}/>
            <ChatCard path={'../../assets/images/OIP.jpg'} name={"Katz"} level={10} date={'17/07/2021'}/>
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
        backgroundColor:'#FFF',
        flexGrow:1
    }
})


export default Chat