import React, {useEffect, useState} from "react";
import {Modal, ScrollView, Text, View, StyleSheet, TextInput} from "react-native";
import UserModel from "../../models/UserModel";
import AppButton from "../../commons/ui/AppButton";
import Checkbox from 'expo-checkbox';
import networkManager from "../../../data/axios/NetworkManager";
import AXIOS_CONFIGURATIONS from "../../../data/axios/config/AxiosConfiguration";
import LocalStorageRepository from "../../../data/LocalStorageRepository";

const ClassComponent = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [points, setPoints] = useState("");
    const [selectedAlumni, setSelectedAlumni] = React.useState<number[]>([]);
    const [alumni, setAlumni] = React.useState<UserModel[]>([
        new UserModel({
            id: 1,
            username: "Dani",
            is_teacher: 0,
            points: 0
        }),
        new UserModel({
            id: 3,
            username: "Fer",
            is_teacher: 0,
            points: 0
        }),
        new UserModel({
            id: 4,
            username: "Agus",
            is_teacher: 0,
            points: 0
        }),
        new UserModel({
            id: 6,
            username: "Ale",
            is_teacher: 0,
            points: 0
        })
    ])

    function givePoints() {
        setModalVisible(true);
    }

    function sendPoints() {
        networkManager.put("http://168.197.49.135/api/givePoints/list", {idusers: selectedAlumni, points: points}, AXIOS_CONFIGURATIONS.applicationJsonHeaders, 0).then(result => {

        }).catch(error => {

        })
    }

    return (
        <View style={{flex: 1}}>
            <ScrollView>
                <View style={{flex: 1}}>
                    <View style={{padding: 16}}>
                        <Text>Selecciona a los alumnos a los que queres otorgar puntos y presiona en "Dar puntos"</Text>
                    </View>

                    <View>
                        {
                            alumni.map((alumno, index) => {
                                const [isSelected, setSelection] = useState(false);

                                return (
                                    <View key={alumno+"-"+index}>
                                        <View style={{flexDirection: "row", padding: 16, alignItems: "center"}}>
                                            <Text style={{flex: 1}}>{alumno.username}</Text>
                                            <Checkbox
                                                value={isSelected}
                                                onValueChange={value => {
                                                    if(!isSelected){
                                                        selectedAlumni.push(alumno.userid);
                                                    }
                                                    else{
                                                        if(selectedAlumni.indexOf(alumno.userid) != -1){
                                                            selectedAlumni.splice(selectedAlumni.indexOf(alumno.userid), 1);
                                                        }
                                                    }

                                                    setSelection(value)
                                                }}/>
                                        </View>
                                        <View style={{height: 1, width: "100%", backgroundColor: "#000000"}}/>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {}}>
                    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <TextInput
                                    placeholder={"Puntos..."}
                                    keyboardType={"numeric"}
                                    onChangeText={(text => setPoints(text))}
                                    style={{flexDirection: "row", marginBottom: 32, marginTop: 16, alignItems: "center", borderWidth: 1, justifyContent: "space-between", padding: 16, borderColor: "#000000", height: 50, borderRadius: 10}}/>

                                <AppButton text={"Enviar"} disabled={points.length == 0} style={{marginBottom: 16}} onPress={() => {
                                    sendPoints()
                                    setModalVisible(!modalVisible)
                                }}/>
                                <AppButton text={"Cancelar"} onPress={() => setModalVisible(!modalVisible)}/>
                            </View>
                        </View>
                    </View>
                </Modal>

                <View style={{height: 60 + 24}}/>
            </ScrollView>

                <View style={{position: "absolute", bottom: 0, right: 0, left: 0, padding: 24}}>
                    <AppButton text={"Dar Puntos"} onPress={() => givePoints()}/>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        width: "90%"
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default ClassComponent
