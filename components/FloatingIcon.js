import React, { useState } from 'react'
import FloatingIcon from '../assets/photos/floating_icon.png'
import { StyleSheet, Image, Modal, Alert, View, Text, Pressable, TouchableOpacity } from 'react-native'
import StoreLogo from '../assets/photos/store_logo.png'
import Star from '../assets/photos/Star.png'


function floatingIcon() {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <View style={styles.floatingIcon}>
            <TouchableOpacity onPress={() => setModalVisible(true)} >
                <Image source={FloatingIcon} />
                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.textModal}>
                                    Task: Level-Up your character to have fun while eating
                                </Text>
                                <Text style={styles.textModal}>
                                    The higher your level higher your bonus
                                    Complete achievements to earn more bonus
                                    Every purchase gives in-game currency and XP points
                                </Text>
                                <View style={styles.modalInline2}>
                                    <Pressable
                                        onPress={() => setModalVisible(!modalVisible)}
                                    >
                                        <Text style={styles.textStyle}>Close</Text>
                                    </Pressable>
                                </View>

                            </View>
                        </View>
                    </Modal>
                </View>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    floatingIcon: {
        position: 'absolute',
        width: 64,
        height: 64,
        left: 318,
        top: 500,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    textModal: {
        fontSize: 14,
        textAlign: 'justify'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        marginLeft: 50,
        marginRight: 50,
        marginTop: 10,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    modalInline: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 20,
    },
    modalInline1: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        margin: 10
    },
    modalInline2: {
        display: 'flex',
        flexDirection: 'row',
    },

})

export default floatingIcon