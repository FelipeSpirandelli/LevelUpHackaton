import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

function OrderCard({ name, level, path, date }) {

    return (
        <View style={styles.container}>
            <View style={styles.storeInfo}>
                <Image source={{path}}  style={styles.image}/>
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
            <View style={styles.orders}>
                <View style={styles.orderNumber}>
                    <Text>
                        1
                    </Text>
                </View>
                    <Text style={styles.orderName}>
                        Mc Flurry MEM's
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
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '80%',
        height: 200,
        backgroundColor:'#E9E9E9',
        padding:20,
        borderRadius:10
    },
    storeInfo: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomColor:'#565656',
        borderBottomWidth: 1,
        height: 60,
        width:'70%',
        alignSelf:'center'
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
    },
    orders:{
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center'
    },
    orderNumber:{
        backgroundColor:'#C4C4C4',
        borderRadius: 10,
        width:20,
        height:20,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    orderName:{
        marginLeft: 20
    }

})

export default OrderCard