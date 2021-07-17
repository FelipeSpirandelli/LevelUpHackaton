import React, {useState} from 'react'
import {
    Text, 
    SafeAreaView, 
    View, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity} from 'react-native'
import auth from '@react-native-firebase/auth';


function SignIn({navigation}){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitSignIn = () => {
        console.log("oi")
        auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log('User account signed in');
            navigation.navigate('HomeTabScreen')
        })
        .catch(error => {
            console.error(error);
        });
    } 

    return(
        <SafeAreaView style={styles.signin}>
            <View style = {styles.container}> 
                <Text style ={styles.mainTitle}>
                    Sign In
                </Text>
                <TextInput 
                    placeholder= 'youremail@domain.com'
                    style={styles.input}
                    onChangeText={email=>setEmail(email)}
                    defaultValue={email}
                />
                <TextInput 
                    placeholder= 'Password'
                    secureTextEntry= {true}
                    style={styles.input}
                    onChangeText={password=>setPassword(password)}
                    defaultValue={password}
                />
            </View>
            <TouchableOpacity
            onPress={()=>submitSignIn()}
            style = {styles.button}>
                <Text style = {styles.buttonText}>
                    Submit
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>navigation.navigate('SignUp')}
            style = {styles.button}>
                <Text style = {styles.buttonText}>
                    New in XXX? Sign Up
                </Text>
            </TouchableOpacity>
        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    signin:{
        backgroundColor: '#FFFFFF',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    container:{
        marginTop: '10%',
        height: '80%',
        width: '80%', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#212121',
        borderRadius: 30,
    },
    
    mainTitle:{
        color: '#FFF',
        fontSize: 22,
        alignSelf: 'center',
    },

    input:{
        backgroundColor: '#FFF',
        borderRadius: 20, 
        width: '83%',
        margin: '7%',
        paddingLeft: '5%',
    },
    button:{
        margin: '3%',
        width: '40%',
        height: '5%',
        backgroundColor: '#212121',
    },
    buttonText:{
        color: '#FFF',
        textAlign: 'center'
    }

})

export default SignIn