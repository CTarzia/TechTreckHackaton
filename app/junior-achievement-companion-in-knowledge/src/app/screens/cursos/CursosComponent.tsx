import React, {useEffect} from "react";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import CursoModel from "../../models/CursoModel";
import SCREEN_NAMES from "../../commons/values/ScreenNames";
import { StackActions, useNavigation } from "@react-navigation/native";
import networkManager from "../../../data/axios/NetworkManager";
import AXIOS_CONFIGURATIONS from "../../../data/axios/config/AxiosConfiguration";

const CursosComponent = () => {
    const navigation = useNavigation();

    useEffect(() => {
        networkManager.get<CursoModel[]>("http://168.197.49.135/api/courses", AXIOS_CONFIGURATIONS.applicationJsonHeaders, 0).then(result => {
            setMyCursos(result.data)
        }).catch(error =>{

        })
    }, []);

    const [myCursos, setMyCursos] = React.useState<CursoModel[]>([
        new CursoModel({
            id: 1,
            name: "Curso 1",
            schedule: "Lun-Vie de 10 a 14 hs."
        }),
        new CursoModel({
            id: 2,
            name: "Curso 2",
            schedule: "Martes y Jueves de 10 a 14 hs."
        }),
        new CursoModel({
            id: 3,
            name: "Curso 3",
            schedule: "Lunes y Miercoles 10 a 14 hs."
        }),
    ]);

    function navigateToCursoDetail(curso: CursoModel) {
        navigation.dispatch(StackActions.push(SCREEN_NAMES.cursoDetail, {
            "curso": curso
        }));
    }

    function goToCursoDetail(curso: CursoModel) {
        navigateToCursoDetail(curso);
    }

    return (
        <View style={{flex: 1, padding: 16}}>
            <Text>Entra y mira el detalle de tus cursos actuales para tener mas informacion sobre ellos</Text>
            <View>
                <ScrollView contentContainerStyle={{padding: 8}}>
                    {
                        myCursos.length > 0 ?
                            myCursos.map((curso, index) => {
                                return (
                                    <TouchableOpacity key={curso.id+"-"+index} onPress={() => goToCursoDetail(curso)}>
                                        <View style={{padding: 16, marginVertical: 8, borderRadius: 10, backgroundColor: "#FFFFFF", shadowColor: "#000000", elevation: 5, shadowOffset: {width: 0, height: 3}, shadowRadius: 5, shadowOpacity: 1.0}}>
                                            <Text>{curso.name}</Text>
                                            <Text>{curso.schedule}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                            :
                            <View>
                                <Text>No hay cursos disponibles actualmente. Chequea diariamente para nuevas oportunidades!</Text>
                            </View>
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default CursosComponent;
