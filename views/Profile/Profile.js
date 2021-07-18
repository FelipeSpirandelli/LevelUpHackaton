import firestore from '@react-native-firebase/firestore'
import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, SafeAreaView, View } from 'react-native'
import auth from '@react-native-firebase/auth'
import AnimatedLoader from 'react-native-animated-loader'
import Column from '../../components/graph/graph'

function Profile({ navigation }) {
    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState({})
    const [experience, setExperience] = useState(0)
    const [level, setLevel] = useState(0)
    const [experienceLower, setExperienceLower] = useState(0)
    const [experienceUpper, setExperienceUpper] = useState(0)

    const ref = firestore().collection('clients')

    function getLevel(experience) {
        if (experience < 50) {
            setLevel(1)
            setExperienceLower(0)
            setExperienceUpper(50)
        } else if (experience < 150) {
            setLevel(2)
            setExperienceLower(50)
            setExperienceUpper(150)
        } else if (experience < 500) {
            setLevel(3)
            setExperienceLower(150)
            setExperienceUpper(500)
        } else if (experience < 1000) {
            setLevel(4)
            setExperienceLower(500)
            setExperienceUpper(1000)
        } else if (experience < 1800) {
            setLevel(5)
            setExperienceLower(1000)
            setExperienceUpper(1800)
        } else if (experience < 3000) {
            setLevel(6)
            setExperienceLower(1800)
            setExperienceUpper(3000)
        } else if (experience < 4800) {
            setLevel(7)
            setExperienceLower(3000)
            setExperienceUpper(4800)
        } else if (experience < 7200) {
            setLevel(8)
            setExperienceLower(4800)
            setExperienceUpper(7200)
        } else if (experience < 9500) {
            setLevel(9)
            setExperienceLower(7200)
            setExperienceUpper(9500)
        } else if (experience < 12500) {
            setLevel(10)
            setExperienceLower(9500)
            setExperienceUpper(12500)
        } else if (experience < 16500) {
            setLevel(11)
            setExperienceLower(12500)
            setExperienceUpper(16500)
        } else if (experience < 23000) {
            setLevel(12)
            setExperienceLower(16500)
            setExperienceUpper(23000)
        } else if (experience < 30000) {
            setLevel(13)
            setExperienceLower(23000)
            setExperienceUpper(30000)
        } else if (experience < 40000) {
            setLevel(14)
            setExperienceLower(30000)
            setExperienceUpper(40000)
        } else {
            setLevel(15)
            setExperienceLower(40000)
            setExperienceUpper(100000)
        }
    }

    useEffect(() => {
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

                if (documentSnapshot.exists) {
                    console.log('User data: ', documentSnapshot.data())
                }
            })

        getLevel(experience)

        if (initializing)
            setInitializing(false)
    }, [])


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

    if (!user) {
        navigation.navigate('SignIn')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.upperContainer}>
                <View style={styles.upperGray}>
                </View>
                <View style={styles.lowerGray}>
                    <View style={styles.diagramOuterBorder}>
                        <View style={styles.diagramInnerBorder}>
                            <View style={styles.diagramArc}>
                                <Text style={styles.experienceNow}>
                                    {experience - experienceLower}
                                </Text>
                                <Text style={styles.experienceNeeded}>
                                    /{experienceUpper - experienceLower}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <Text>
                        Reach level {level + 1} with more {experienceUpper - experience} points
                    </Text>
                </View>
            </View>
            <View style={styles.lowerContainer}>
                <Text style={styles.columnsTitle}>
                    Weekly Shopping Performance
                </Text>
                <View style={styles.columns}>
                        <Column heightValue={'23%'} week ={1}/>
                        <Column heightValue={'34%'} week ={2}/>
                        <Column heightValue={'65%'} week ={3}/>
                        <Column heightValue={'12%'} week ={4}/>
                        <Column heightValue={'18%'} week ={5}/>
                        <Column heightValue={'87%'} week ={6}/>
                        <Column heightValue={'45%'} week ={7}/>
                        <Column heightValue={'32%'} week ={8}/>
                </View>
            </View>
        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
    lottie: {
        width: 100,
        height: 100
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexGrow: 1,
        backgroundColor: '#FFF8EC',
    },
    upperContainer: {
        height: 200,
        width: '90%',
        marginTop: 40,
    },
    upperGray: {
        height: 40,
        backgroundColor: '#F8B440',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    lowerGray: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFE8C1',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    diagramOuterBorder: {
        width: 104,
        height: 104,
        borderWidth: 1,
        borderColor: "#A1BA35",
        borderRadius: 52,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 5
    },
    diagramInnerBorder: {
        width: 90,
        height: 90,
        borderWidth: 1,
        borderColor: "#A1BA35",
        borderRadius: 45,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 5
    },
    experienceNow: {
        fontSize: 22,
        color: "#A1BA35"
    },
    experienceNeeded: {
        fontSize: 18,
    },
    lowerContainer:{
        backgroundColor: '#A1BA35',
        height: 200,
        width: '90%',
        marginTop: 30,
        borderRadius:10,
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    columnsTitle:{
        fontSize: 20,
        marginLeft: 20,
    },
    columns:{
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: -10
    }
})


export default Profile