import React, {useState} from 'react'
import {
    Text, 
    SafeAreaView, 
    View, 
    StyleSheet, 
    TextInput, 
    Button} from 'react-native'
import auth from '@react-native-firebase/auth';
import Picker from '@react-native-picker/picker'

function SignIn(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [option, setOption] = useState('')

    const submit = () => {
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
                    }>
                    <Picker.Item label='Client' value='cliente'/>
                    <Picker.Item label='Store' value='store'/>
                    <Picker.Item label='Provider' value='provider'/>
                </Picker>
            </View>
            <Button 
                type='submit'
                title='Submit'
                style = {styles.button}
                onClick={submit}
            />

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
        margin: '10%',
        backgroundColor: '#212121'
    }

})

export default SignIn