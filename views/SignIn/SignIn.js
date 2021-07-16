import React from 'react'
import {
    Text, 
    SafeAreaView, 
    View, 
    StyleSheet, 
    TextInput, 
    Button} 
        from 'react-native'

function SignIn(){

    return(
        <SafeAreaView style={styles.signin}>
            <View style = {styles.container}> 
                <Text style ={styles.mainTitle}>
                    Sign In
                </Text>
                <TextInput 
                    placeholder= 'Email'
                    style={styles.input}
                />
                <TextInput 
                    placeholder= 'Senha'
                    secureTextEntry= {true}
                    style={styles.input}
                />
            </View>
            <Button 
            type='submit'
            title='Submit'
            style = { styles.button}
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