import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, ImageBackground, Image, Pressable, Modal, Alert, TouchableOpacity} from 'react-native'
import auth from '@react-native-firebase/auth'
import AnimatedLoader from 'react-native-animated-loader'
import PhotoMap from '../../assets/photos/map.png'
import StorePin from '../../assets/photos/store_pin.png'
import FloatingIcon from '../../components/FloatingIcon'
import StoreLogo from  '../../assets/photos/store_logo.png'
import Star from '../../assets/photos/Star.png'
import SearchBar from '../../components/searchBar/SearchBar'

function HomePage({navigation}) {
    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState()
    function onAuthStateChanged(user){
        setUser(user)
        if(initializing)
            setInitializing(false)
    }
    const [modalVisible, setModalVisible] = useState(false)

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
                <View style={styles.container2}>
                    <SearchBar style={styles.searchBar}/>
                    <TouchableOpacity style={styles.store1} activeOpacity = { .5 } onPress={() => setModalVisible(true)}>
                        <Image source={StorePin}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.store2} activeOpacity = { .5 } onPress={() => setModalVisible(true)}>
                        <Image source={StorePin}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.store3} activeOpacity = { .5 } onPress={() => setModalVisible(true)}>
                        <Image source={StorePin}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.store4} activeOpacity = { .5 } onPress={() => setModalVisible(true)}>
                        <Image source={StorePin}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.store5} activeOpacity = { .5 } onPress={() => setModalVisible(true)}>
                        <Image source={StorePin}/>
                    </TouchableOpacity>
                    <FloatingIcon/>
                </View>
                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.modalInline}>
                                <Image source={StoreLogo}/>
                                <Text>Mc Donald's</Text>
                                <Text>Level 10</Text>
                            </View>
                            <View style={styles.modalInline1}>
                                <Text>Variety:</Text>
                                <Image source={Star}/>
                                <Image source={Star}/>
                                <Image source={Star}/>
                                <Image source={Star}/>
                            </View>
                            <View style={styles.modalInline1}>
                                <Text>Monthly Performance:</Text>
                                <Image source={Star}/>
                                <Image source={Star}/>
                                <Image source={Star}/>
                                <Image source={Star}/>
                                <Image source={Star}/>
                            </View>
                            <View style={styles.modalInline2}>
                                <Pressable
                                onPress={() => setModalVisible(!modalVisible)}
                                >
                                <Text style={styles.textStyle}>Close</Text>
                                </Pressable>
                                <Pressable
                                onPress={() => setModalVisible(!modalVisible)}
                                >
                                <Text style={styles.textStyle}>See Menu</Text>
                                </Pressable>
                            </View>
                            
                        </View>
                        </View>
                    </Modal>
                </View>
            </ImageBackground>
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
    container2: {
        flex: 1,
        marginTop: '10%'
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
    store1:{
        position: 'absolute',
        width: 32,
        height: 40,
        marginLeft: 16,
        marginTop: 509,
    },
    store2:{
        position: 'absolute',
        width: 32,
        height: 40,
        marginLeft: 370,
        marginTop: 156,
    },
    store3:{
        position: 'absolute',
        width: 32,
        height: 40,
        marginLeft: 56,
        marginTop: 434,
    },
    store4:{
        position: 'absolute',
        width: 32,
        height: 40,
        marginLeft: 203,
        marginTop: 398,
    },
    store5:{
        position: 'absolute',
        width: 32,
        height: 40,
        marginLeft: 246,
        marginTop: 265,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        marginLeft: 50,
        marginRight: 50,
        marginTop: 10,
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      modalInline: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 20,
      },
      modalInline1: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        margin: 10
      },
      modalInline2: {
        display: 'flex',
        flexDirection: 'row',
    },

})


export default HomePage