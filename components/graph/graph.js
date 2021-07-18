import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

function Column({ heightValue, week }) {

    return (
        <View style={styles.columnContainer}>
            <View style={styles.outerColumn}>
                <View style={[styles.innerColumn, { height: `${heightValue}` }]}>
                </View>
            </View>
            { !!week ?
            <Text style={styles.weekText}>
                Week {week}
            </Text>
            : null
            }
        </View>
    )
}

const styles = StyleSheet.create({

    columnContainer:{
        width: 50,
        display:'flex',
        flexDirection: 'column',
        alignItems:'center'
    },
    outerColumn: {
        backgroundColor: '#FACA78',
        height: 120,
        width: 12,
        borderRadius: 6,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    innerColumn: {
        backgroundColor: '#F8B440',
        position:'absolute',
        width: 12,
        borderRadius: 6,
        bottom:0
    },
    weekText:{
        fontSize: 12,
    }

})

export default Column