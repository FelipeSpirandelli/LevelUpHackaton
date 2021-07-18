import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

function SearchBar() {
    const [search, setSearch] = useState('')


    return (
        <View style={styles.container}>
            <Icon name='search' size={22}/>
            <TextInput 
                style={styles.input}
                onChangeText={search=>setSearch(search)}
                defaultValue={search}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        height: 50,
        width: 350,
        borderRadius: 40,
        backgroundColor: '#FFE8C1',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft: 15,
        alignSelf:'center'
    },
    input:{
        marginLeft: 10,
        fontSize:14
    }
})

export default SearchBar