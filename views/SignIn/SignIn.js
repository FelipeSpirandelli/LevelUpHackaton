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
            <Text style ={styles.mainTitle}>
                LOGO
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
            <TouchableOpacity
            onPress={()=>submitSignIn()}
            style = {styles.button}>
            <Text style = {styles.buttonText}>
                    Submit
            </Text>
            </TouchableOpacity>
            <Text>Forgot password?</Text>
            <TouchableOpacity
            onPress={()=>navigation.navigate('SignUp')}>
                <Text style={styles.signUp}>
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
        marginTop:'0%',
    },

    container:{
        justifyContent: 'space-around',
        borderRadius: 30,
    },
    
    mainTitle:{
        color: '#000000',
        fontSize: 50,
        alignSelf: 'center',
        marginTop: '30%',
    },

    input:{
        backgroundColor: '#FACA78',
        borderRadius: 8, 
        width: '83%',
        margin: '7%',
        paddingLeft: '5%',
    },
    button:{
        margin: '3%',
        width: '83%',
        height: '7%',
        backgroundColor:'#F8B440',
        borderRadius: 8,
    },
    buttonText:{
        color: '#FFF',
        marginTop: '3.5%',
        textAlign: 'center',
    },
    signUp:{
        color: '#000000',
        marginTop: '30%',
    }

})

export default SignIn