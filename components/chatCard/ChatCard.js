import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

function ChatCard({ name, level, path, date }) {

    return (
        <View style={styles.container}>
            <Image source={{path}}  style={styles.image}/>
            <View style={styles.storeInfo}>
                <View style={styles.nameLevel}>
                    <Text style={styles.name}>
                        {name}
                    </Text>
                    <View style={styles.level}>
                        <Icon name='star' />
                        <Text style={styles.levelRepresentantion}>
                            level {level}
                        </Text>
                    </View>
                </View>
                <Text style={styles.date}>
                    {date}
                </Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    image:{
        width:10,
        height:10
    },
    container: {
        margin: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '90%',
        height: 60
    },
    storeInfo: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomColor:'#565656',
        borderBottomWidth: 1,
        height: 60,
        width:'70%'
    },
    nameLevel: {
        display: 'flex',
        flexDirection: 'column',
        marginRight: 10
    },
    name:{
        marginBottom: 10,
        marginTop:0,
        fontSize: 16,
    },
    level:{
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center'
    },
    levelRepresentantion:{
        marginLeft:8,
    },
    date:{
        position:'absolute',
        right:0
    }

})

export default ChatCard