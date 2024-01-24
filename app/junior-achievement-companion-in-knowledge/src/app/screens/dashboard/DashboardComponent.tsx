import React, {useEffect} from "react";
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import CursoModel from "../../models/CursoModel";
import SCREEN_NAMES from "../../commons/values/ScreenNames";
import { StackActions, useNavigation } from "@react-navigation/native";
import LocalStorageRepository from "../../../data/LocalStorageRepository";
import UserModel from "../../models/UserModel";
import networkManager from "../../../data/axios/NetworkManager";
import AXIOS_CONFIGURATIONS from "../../../data/axios/config/AxiosConfiguration";
import * as Notifications from "expo-notifications";

const jack = require("../../../../assets/jack.png");
const book = require("../../../../assets/book.png");

const DashboardComponent = () => {
    const navigation = useNavigation();

    useEffect(() => {
        new LocalStorageRepository().getUserSession().then(result => {
            setUser(result)
        }).catch(error =>{

        })
    }, []);

    useEffect(() => {
        Notifications.setNotificationHandler({
            handleNotification: async () => ({
                shouldShowAlert: true,
                shouldPlaySound: false,
                shouldSetBadge: false,
            }),
        });

        schedulePushNotification();
    }, [])

    function schedulePushNotification() {
        Notifications.scheduleNotificationAsync({
            content: {
                title: "No lo dejes atras!",
                body: 'Nico no se conecto a saludar a JACK en los ultimos 3 dias, por que no le escribis?',
            },
            trigger: { seconds: 2 },
        });
    }

    const [user, setUser] = React.useState<UserModel>();
    const [newCursos, setNewCursos] = React.useState<CursoModel[]>([
        new CursoModel({
            name: "La ciencia del futuro (2021)",
            id: 5,
            schedule: "A determinar"
        }),
        new CursoModel({
            name: "Curso de inversiones (2022)",
            id: 5,
            schedule: "A determinar"
        }),
        new CursoModel({
            name: "Financias personales (2022)",
            id: 5,
            schedule: "A determinar"
        }),
    ]);

    function navigateToCursoDetail(curso: CursoModel) {
        navigation.dispatch(StackActions.push(SCREEN_NAMES.cursoDetail, {
            "curso": curso
        }));
    }

    function goToCursoDetail(id: number) {
        navigateToCursoDetail(new CursoModel({
            id: 1,
            name: "",
            schedule: ""
        }));
    }

    return (
        user?.is_teacher == 1 ?
        <View style={{flex: 1}}>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center", padding: 16, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: "#FFFFFF", shadowColor: "#000000", elevation: 5, shadowOffset: {width: 0, height: 3}, shadowRadius: 5, shadowOpacity: 1.0}}>
                <Image source={jack} style={{width: 120, height: 120, resizeMode: "contain"}}/>
                <Text style={{marginBottom: 8}}>Bienvenido, {user.username}!</Text>
            </View>
            <View style={{flex: 2}}>
                <View style={{padding: 8}}>
                    <Text style={{marginBottom: 8}}>Novedades</Text>

                    <View style={{padding: 8, borderRadius: 10, backgroundColor: "#FFFFFF", shadowColor: "#000000", elevation: 5, shadowOffset: {width: 0, height: 3}, shadowRadius: 5, shadowOpacity: 1.0}}>
                        <Text>Volvemos a la normalidad! Docentes y facilitadores estar atentos al calendario para saber cuando hay clases presenciales y cuando virtuales.</Text>
                    </View>
                </View>
                <View style={{padding: 8}}>
                    <Text style={{marginBottom: 8}}>No te olvides!</Text>

                    <View style={{padding: 8, borderRadius: 10, backgroundColor: "#FFFFFF", shadowColor: "#000000", elevation: 5, shadowOffset: {width: 0, height: 3}, shadowRadius: 5, shadowOpacity: 1.0}}>
                        <Text>Recorda comenzar la clase en esta app para otorgar puntos por asistencia y tambien para utilizar puntos y asi fomentar la participacion en las clases</Text>
                    </View>
                </View>
            </View>
        </View>
        :
        <View style={{flex: 1}}>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center", padding: 16, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: "#FFFFFF", shadowColor: "#000000", elevation: 5, shadowOffset: {width: 0, height: 3}, shadowRadius: 5, shadowOpacity: 1.0}}>
                <Image source={jack} style={{width: 120, height: 120, resizeMode: "contain"}}/>
                <Text style={{marginBottom: 8}}>Bienvenido, {user?.username}!</Text>
                <Text>Tenes {user?.points} puntos</Text>
            </View>
            <View style={{flex: 2, padding: 16}}>
                <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                    <Image source={book} style={{width: 24, height: 24, marginRight: 4, resizeMode: "contain"}}/>
                    <Text style={{marginVertical: 8}}>Chequea los cursos que se vienen!</Text>
                    <Image source={book} style={{width: 24, height: 24, marginLeft: 4, resizeMode: "contain"}}/>
                </View>
                <ScrollView contentContainerStyle={{padding: 8}}>
                    {
                        newCursos.length > 0 ?
                        newCursos.map((curso, index) => {
                            return (
                                <TouchableOpacity key={curso.id+"-"+index} onPress={() => {

                                }}>
                                    <View style={{padding: 16, marginVertical: 8, borderRadius: 10, backgroundColor: "#FFFFFF", shadowColor: "#000000", elevation: 5, shadowOffset: {width: 0, height: 3}, shadowRadius: 5, shadowOpacity: 1.0}}>
                                        <Text style={{marginBottom: 8, textDecorationLine: "underline"}}>Curso:</Text>
                                        <Text style={{marginBottom: 8}}>{curso.name}:</Text>
                                        <Text style={{marginBottom: 8, textDecorationLine: "underline"}}>Horarios:</Text>
                                        <Text>{curso.schedule}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                        :
                        <View>
                            <Text style={{textAlign: "center"}}>No hay cursos disponibles actualmente. Chequea diariamente para nuevas oportunidades!</Text>
                        </View>
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default DashboardComponent;
