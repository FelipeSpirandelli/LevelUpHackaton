import React, {useState} from 'react'
import {
    Text, 
    SafeAreaView, 
    View, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity} from 'react-native'
import auth from '@react-native-firebase/auth';
import {Picker} from '@react-native-picker/picker'

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
            <View style = {styles.container}> 
                <Text style ={styles.mainTitle}>
                    Sign Up
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
                    }
                    style={styles.picker}>
                    <Picker.Item label='Client' value='client' key='0' />
                    <Picker.Item label='Store' value='store' key='1' />
                    <Picker.Item label='Supplier' value='supplier' key ='2'/>
                </Picker>
            </View>
            <TouchableOpacity
            onPress={()=>submitSignUp()}
            style = {styles.button}>
                <Text style = {styles.buttonText}>
                    Submit
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>navigation.navigate('SignIn')}
            style = {styles.button}>
                <Text style = {styles.buttonText}>
                    Already has an account? Sign In
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
    },
    picker:{
        backgroundColor:'#FFF'
    }

})

export default SignIn