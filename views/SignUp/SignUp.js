import React, {useState} from 'react'
import {
    Text, 
    SafeAreaView, 
    View, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity, Image} from 'react-native'
import auth from '@react-native-firebase/auth';
import {Picker} from '@react-native-picker/picker'
import Logo from '../../assets/photos/logo.png'

function SignIn({navigation}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [option, setOption] = useState('')

    

    const submitSignUp = () => {
        auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            console.log('User account created & signed in!');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            }

            console.error(error);
        });
        navigation.navigate('SignIn')
    } 

    return(
        <SafeAreaView style={styles.signin}>
                <Image source={Logo} style={styles.mainTitle}/>
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
                <TextInput 
                    placeholder= 'Rewrite your password'
                    secureTextEntry= {true}
                    style={styles.input}
                    onChangeText={passwordConfirmation=>setPasswordConfirmation(passwordConfirmation)}
                    defaultValue={passwordConfirmation}
                />
                <Picker
                    selectedValue={option}
                    onValueChange={(itemValue, itemIndex) =>
                        setOption(itemValue)
                    }
                    style={styles.picker}>
                    <Picker.Item label='Client' value='client' key='0' />
                    <Picker.Item label='Store' value='store' key='1' />
                    <Picker.Item label='Supplier' value='supplier' key ='2'/>
                </Picker>
            <TouchableOpacity
            onPress={()=>submitSignUp()}
            style = {styles.button}>
                <Text style = {styles.buttonText}>
                    Submit
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>navigation.navigate('SignIn')}>
                <Text style = {styles.signUp}>
                    Already have an account? Sign In
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
    mainTitle:{
        alignSelf: 'center',
        marginTop: '10%',
        marginBottom: '6%',
    },
    input:{
        backgroundColor: '#FACA78',
        borderRadius: 8, 
        width: '83%',
        margin: '3%',
        paddingLeft: '5%',
    },
    button:{
        margin: '0%',
        width: '83%',
        height: '7%',
        backgroundColor:'#B47C1C',
        borderRadius: 8,
    },
    buttonText:{
        color: '#FFF',
        marginTop: '3.5%',
        textAlign: 'center',
    },
    picker:{
        backgroundColor:'#FFF'
    },
    signin:{
        backgroundColor: '#FFFFFF',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop:'0%',
    },
    signUp:{
        color: '#000000',
        marginTop: '10%',
    }



})

export default SignIn