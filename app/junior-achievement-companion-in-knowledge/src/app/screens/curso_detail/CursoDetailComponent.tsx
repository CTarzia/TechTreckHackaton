import React, {useEffect} from "react";
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import CursoModel from "../../models/CursoModel";
import {useNavigation, useRoute, StackActions} from "@react-navigation/native";
import * as Linking from 'expo-linking';
import AppButton from "../../commons/ui/AppButton";
import SCREEN_NAMES from "../../commons/values/ScreenNames";
import LocalStorageRepository from "../../../data/LocalStorageRepository";
import UserModel from "../../models/UserModel";

const wppLogo = require("../../../../assets/wpp-logo.png");

const CursoDetailComponent = () => {
    const params: any = useRoute().params;
    const cursoParam = params["curso"] as CursoModel;
    const navigation = useNavigation();

    const [fullCurso] = React.useState(cursoParam);

    useEffect(() => {
        new LocalStorageRepository().getUserSession().then(result => {
            setUser(result)
        }).catch(error =>{

        })
    }, []);

    const [user, setUser] = React.useState<UserModel>()
    function goToWppGroup() {
        Linking.openURL("https://chat.whatsapp.com/F8eNqhyUsohF8aAWvlhpBR").then();
    }

    function startClass() {
        navigation.dispatch(StackActions.push(SCREEN_NAMES.class));
    }

    return (
        <View style={{flex: 1}}>
            <ScrollView>
                <View style={{flex: 1, padding: 16}}>
                    <Text>Curso: {fullCurso.name}</Text>
                    <Text style={{marginTop: 8}}>Horario: {fullCurso.schedule}</Text>

                    <View style={{padding: 16, marginTop: 16, borderRadius: 10, backgroundColor: "#FFFFFF", shadowColor: "#000000", elevation: 5, shadowOffset: {width: 0, height: 3}, shadowRadius: 5, shadowOpacity: 1.0}}>
                        <Text style={{marginBottom: 8}}>Links Utiles:</Text>
                        <TouchableOpacity onPress={() => goToWppGroup()}>
                            <Image source={wppLogo} style={{width: 56, height: 56, resizeMode: "contain"}}/>
                        </TouchableOpacity>
                    </View>
                </View>


                {
                    user?.is_teacher == 1 &&
                    <View style={{height: 60 + 24}}/>
                }
            </ScrollView>

            {
                user?.is_teacher == 1 &&
                <View style={{position: "absolute", bottom: 0, right: 0, left: 0, padding: 24}}>
                    <AppButton text={"Empezar Clase"} onPress={() => startClass()}/>
                </View>
            }
        </View>
    );
}

export default CursoDetailComponent;
