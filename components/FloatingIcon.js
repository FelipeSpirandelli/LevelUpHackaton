import React from 'react';
import FloatingIcon from '../assets/photos/floating_icon.png'
import {StyleSheet, Image} from 'react-native'

function floatingIcon(){
    return (
        <Image source={FloatingIcon} style={styles.floatingIcon}/>
    )
}

const styles = StyleSheet.create({
    floatingIcon:{
        position: 'absolute',
        width: 64,
        height: 64,
        left: 318,
        top: 530,
    }

})

export default floatingIcon