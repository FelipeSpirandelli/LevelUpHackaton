import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import StoreLogo from '../assets/photos/store_logo.png';

function ProfileCard({ name, level, path, date }) {

    return (
        <View style={styles.container}>
            <Image source={StoreLogo}  style={styles.image}/>
                    <Text style={styles.name}>
                        Nome do card
                    </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    image:{
        position: 'absolute',
        width: 58,
        height: 56,
        left: 10,
        top: 20,
    },
    container: {
        margin: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '90%',
        height: 90,
        backgroundColor: '#FFE8C1'
    },
    name:{
        marginBottom: 10,
        marginTop:0,
        fontSize: 16,
    },

})

export default ProfileCard